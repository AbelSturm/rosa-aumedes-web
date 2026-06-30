"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const nombre = formData.get("nombre")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const mensaje = formData.get("mensaje")?.toString().trim();

  if (!nombre || !email || !mensaje) {
    return { status: "error", message: "Por favor rellena todos los campos." };
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return { status: "error", message: "Error de configuración del servidor." };
  }

  const { error } = await resend.emails.send({
    from: "Web Rosa Aumedes <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Mensaje de contacto de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
    html: `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p style="white-space:pre-wrap">${mensaje}</p>
    `,
  });

  if (error) {
    return { status: "error", message: "No se pudo enviar el mensaje. Inténtalo de nuevo." };
  }

  return { status: "success" };
}
