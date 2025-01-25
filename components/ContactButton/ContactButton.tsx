import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Linkedin, Loader2, Phone } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import Link from 'next/link';

const ContactForm = ({ onSubmit }: { onSubmit: (data: { identity: string; email: string; subject: string; content: string }) => void }) => {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid = identity && email && subject && content;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const data = { identity, email, subject, content };

    const startTime = Date.now(); // Capture le temps de début pour garantir 3s minimum
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      const elapsedTime = Date.now() - startTime;
      const delay = Math.max(2250 - elapsedTime, 0);

      setTimeout(() => {
        if (response.ok) {
          alert(result.success || 'Votre message a été envoyé avec succès !');
          setIdentity('');
          setEmail('');
          setSubject('');
          setContent('');
        } else {
          alert(result.error || 'Une erreur est survenue lors de l\'envoi de votre message.');
        }
        setLoading(false);
      }, delay);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      setLoading(false); // Libère l'état de chargement même en cas d'erreur
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="identity">Vous êtes...</Label>
        <Input
          id="identity"
          type="text"
          name="identity"
          placeholder="NOM Prénom"
          value={identity}
          required
          onChange={(e) => setIdentity(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Votre adresse mail</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="exemple@email.com"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="subject">Objet du message</Label>
        <Select onValueChange={(value) => setSubject(value)} value={subject} required>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un objet" />
          </SelectTrigger>
          <SelectContent className="z-[99999999999]">
            <SelectGroup>
              <SelectItem value="job_opportunity">Me contacter pour une opportunité professionnelle</SelectItem>
              <SelectItem value="report_bug">Signaler un bug ou un problème technique</SelectItem>
              <SelectItem value="user_feedback">Faire un retour ou une suggestion</SelectItem>
              <SelectItem value="general_support">Demander un support général</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="content">Votre message</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Contenu de votre message ici"
          value={content}
          className="resize-none"
          required
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        variant="default"
        disabled={!isFormValid || loading}
      >
        {loading ? <><Loader2 className="animate-spin mr-1" /> Envoi en cours...</> : 'Envoyer'}
      </Button>
    </form>
  );
};

const ContactButton = () => {
  const handleFormSubmit = (data: { identity: string; email: string; subject: string; content: string }) => {
    console.log('Nom:', data.identity);
    console.log('Email:', data.email);
    console.log('Objet:', data.subject);
    console.log('Contenu:', data.content);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Me contacter</Button>
        </DialogTrigger>
        <DialogContent className="overflow-visible">
          <DialogHeader>
            <h2 className="font-bold text-2xl">Rentrons en contact</h2>
          </DialogHeader>
          <DialogDescription>
            <ContactForm onSubmit={handleFormSubmit} />
            <div className="flex items-center mt-4 mb-2">
              <div className="flex-1 h-px bg-muted-foreground"></div>
              <span className="px-4 text-sm text-muted-foreground">Autres alternatives</span>
              <div className="flex-1 h-px bg-muted-foreground"></div>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Button variant="ghost" className="flex-1 flex items-center gap-2">
                <Link href="https://www.linkedin.com/in/nolhan-bilyj-27a546341/" target="_blank" className="flex justify-center items-center gap-2">
                  <Linkedin />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="ghost" className="flex-1 flex items-center gap-2">
                <Link href="tel:+33669450903" className="flex justify-center items-center gap-2">
                  <Phone />
                  Téléphone
                </Link>
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactButton;