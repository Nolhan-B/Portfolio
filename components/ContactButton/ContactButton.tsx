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
import { Linkedin, Loader2, Mail, Phone } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import Link from 'next/link';

const ContactForm = () => {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = identity && email && subject && content;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const data = { identity, email, subject, content };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setErrorMessage(result.error || 'Une erreur est survenue.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="space-y-4 text-center flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold">Merci pour votre message !</h3>
        <p>Vous pouvez également me contacter via :</p>
        <div className="flex items-center justify-center space-x-4">
          <Link href="tel:0669450903">
          <Button variant="ghost" className="flex items-center gap-2">
              <Phone />
              06 69 45 09 03
            </Button>
          </Link>
          <Link href="href">
            <Button variant="ghost" className='flex gap-2 justify-center items-center'>
              <Mail/>
              nolhanbil@gmail.com
            </Button>
          </Link>
        </div>
        <Link href="https://www.linkedin.com/in/nolhan-bilyj-27a546341/" target="_blank" className="flex items-center gap-2">
            <Button variant="ghost" className="flex items-center gap-2">
              <Linkedin />
              LinkedIn
            </Button>
            </Link>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="space-y-4 text-center">
        <h3 className="text-lg font-bold text-red-600">Une erreur est survenue</h3>
        <p>{errorMessage}</p>
        <Button variant="default" onClick={() => setStatus('idle')}>
          Réessayer
        </Button>
      </div>
    );
  }

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
            <ContactForm />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactButton;