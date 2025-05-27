import { Resend } from "resend";
import { verification } from "../../views/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string) => {
  await resend.emails.send({
    from: "Rakshit Gumber <onboarding@resend.dev>",
    to: email,
    subject: "Just 1 step to become unpopular",
    react: verification({ url: "" }),
  });
};
