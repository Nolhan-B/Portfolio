import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Correspondance entre les valeurs du champ "subject" et leur version lisible
const subjectMapping: Record<string, string> = {
  job_opportunity: 'Me contacter pour une opportunité professionnelle',
  report_bug: 'Signaler un bug ou un problème technique',
  user_feedback: 'Faire un retour ou une suggestion',
  general_support: 'Demander un support général',
  other: 'Autre',
};

export async function POST(req: Request) {
  try {
    const { identity, email, subject, content } = await req.json();

    // Validation des champs requis
    if (!identity || !email || !subject || !content) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // Traduction du sujet en texte lisible
    const readableSubject = subjectMapping[subject] || 'Sujet inconnu';

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true, // Utilise SSL pour une connexion sécurisée
      auth: {
        user: process.env.AUTH_EMAIL_USER,
        pass: process.env.AUTH_EMAIL_PASS,
      },
    });

    // Contenu HTML stylisé pour l'email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #4CAF50;">Nouveau message via votre portfolio</h2>
        <p><strong>Identité :</strong> ${identity}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
        <p><strong>Objet :</strong> ${readableSubject}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="white-space: pre-line;">${content}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <footer style="text-align: center; font-size: 0.9em; color: #555;">
          <p>Ce message a été envoyé via le formulaire de contact de votre portfolio.</p>
        </footer>
      </div>
    `;

    // Configuration de l'email
    const mailOptions = {
      from: 'portfolio-nolhan-bilyj-contact@db-vtc-belfort.fr',
      to: 'nolhanbil@gmail.com',
      subject: `Nouveau message : ${readableSubject}`,
      html: htmlContent, // Utilisation de HTML au lieu de texte brut
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Réponse en cas de succès
    return NextResponse.json(
      { success: 'Email envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    // Log de l'erreur pour débogage
    if (error instanceof Error) {
      console.error('Erreur lors de l\'envoi de l\'email :', error.message);
    } else {
      console.error('Erreur inconnue lors de l\'envoi de l\'email :', error);
    }

    // Réponse en cas d'erreur
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email.' },
      { status: 500 }
    );
  }
}