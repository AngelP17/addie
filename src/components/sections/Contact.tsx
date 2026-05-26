import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, CheckCircle, AlertCircle, Linkedin } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const messages = language === 'en'
      ? {
          name: 'Name is required',
          email: 'Email is required',
          validEmail: 'Please enter a valid email address',
          subject: 'Subject is required',
          message: 'Message is required',
          messageLength: 'Message must be at least 10 characters long',
        }
      : {
          name: 'El nombre es obligatorio',
          email: 'El correo electrónico es obligatorio',
          validEmail: 'Ingresa un correo electrónico válido',
          subject: 'El asunto es obligatorio',
          message: 'El mensaje es obligatorio',
          messageLength: 'El mensaje debe tener al menos 10 caracteres',
        };

    if (!formData.name.trim()) newErrors.name = messages.name;
    if (!formData.email.trim()) {
      newErrors.email = messages.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = messages.validEmail;
    }
    if (!formData.subject.trim()) newErrors.subject = messages.subject;
    if (!formData.message.trim()) {
      newErrors.message = messages.message;
    } else if (formData.message.length < 10) {
      newErrors.message = messages.messageLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(false);
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => submitData.append(key, value));

    try {
      const response = await fetch('https://formspree.io/f/xzddpogv', {
        method: 'POST',
        body: submitData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: '' }));
  };

  const inputClass = 'form-input';

  return (
    <section id="contact" className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.43fr_0.57fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {language === 'en' ? 'Contact' : 'Contacto'}
          </p>
          <h2 className="max-w-md text-5xl font-medium leading-tight tracking-[-0.05em] text-foreground sm:text-6xl">
            {language === 'en' ? 'Start a conversation.' : 'Iniciemos una conversación.'}
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
            {language === 'en'
              ? 'For reporting, political communications, or editorial collaborations, reach out directly or send a note.'
              : 'Para reportajes, comunicación política o colaboraciones editoriales, envía un mensaje.'}
          </p>

          <div className="mt-12 border-t border-border text-sm">
            <a href="mailto:addie.elizabethjones@gmail.com" className="editorial-link block border-b border-border py-5">
              addie.elizabethjones@gmail.com
            </a>
            <a href="tel:+18705770389" className="editorial-link block border-b border-border py-5">
              (870) 577-0389
            </a>
            <a
              href="https://www.linkedin.com/in/addie-jones-b5a5b6250/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link flex items-center gap-2 border-b border-border py-5"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 lg:pt-0"
        >
          {isSubmitted ? (
            <div className="flex min-h-[22rem] flex-col justify-center border-b border-border py-12">
              <CheckCircle className="mb-5 h-8 w-8 text-primary" />
              <h3 className="text-3xl font-medium text-foreground">{t('contact.form.success.title')}</h3>
              <p className="mt-4 text-muted-foreground">{t('contact.form.success.message')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-x-7 gap-y-6 md:grid-cols-2">
              <Field label={t('contact.form.name')} error={errors.name}>
                <input value={formData.name} onChange={(event) => handleInputChange('name', event.target.value)} className={inputClass} aria-required="true" />
              </Field>
              <Field label={t('contact.form.email')} error={errors.email}>
                <input type="email" value={formData.email} onChange={(event) => handleInputChange('email', event.target.value)} className={inputClass} aria-required="true" />
              </Field>
              <Field label={t('contact.form.company')}>
                <input value={formData.company} onChange={(event) => handleInputChange('company', event.target.value)} className={inputClass} />
              </Field>
              <Field label={t('contact.form.subject')} error={errors.subject}>
                <input value={formData.subject} onChange={(event) => handleInputChange('subject', event.target.value)} className={inputClass} aria-required="true" />
              </Field>
              <div className="md:col-span-2">
                <Field label={t('contact.form.message')} error={errors.message}>
                  <textarea value={formData.message} onChange={(event) => handleInputChange('message', event.target.value)} rows={6} className={`${inputClass} resize-none`} aria-required="true" />
                </Field>
              </div>
              {submitError && (
                <p className="flex items-center gap-2 text-sm text-destructive md:col-span-2" role="alert">
                  <AlertCircle className="h-4 w-4" />
                  {language === 'en' ? 'Your message could not be sent. Please email directly.' : 'El mensaje no pudo enviarse. Escribe por correo electrónico.'}
                </p>
              )}
              <button type="submit" disabled={isSubmitting} className="btn-primary group inline-flex items-center justify-center gap-3 px-7 py-4 md:col-span-2 md:justify-self-start">
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-3 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
    </label>
  );
}
