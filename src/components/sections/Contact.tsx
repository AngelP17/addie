import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Mail, Phone, MapPin, Send, Clock,
  Linkedin, Twitter, CheckCircle,
  AlertCircle, User, MessageSquare, Building
} from 'lucide-react';

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

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.title'),
      value: "addie.elizabethjones@gmail.com",
      href: "mailto:addie.elizabethjones@gmail.com",
      description: t('contact.info.email.desc')
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(870) 577-0389",
      href: "tel:+18705770389",
      description: t('contact.info.phone.desc')
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Fayetteville, Arkansas",
      href: "#",
      description: t('contact.info.location.desc')
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/addie-jones-b5a5b6250",
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:bg-sky-500/20 hover:text-sky-400"
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xzddpoqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Could add error state here
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const ContactInfoCard = ({ info }: { info: typeof contactInfo[0] }) => (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-navy-700 dark:bg-navy-800 rounded-2xl p-6 border border-navy-600 dark:border-cream-300 hover:border-cream-400/30 transition-all duration-300 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-cream-400 rounded-xl flex items-center justify-center flex-shrink-0">
          <info.icon className="w-6 h-6 text-navy-700 dark:text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-1">{info.label}</h3>
          <a
            href={info.href}
            className="text-navy-700 dark:text-white hover:text-navy-800 dark:hover:text-white transition-colors font-medium"
          >
            {info.value}
          </a>
          <p className="text-navy-700 dark:text-white text-sm mt-2">{info.description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="contact" className="py-20 px-6 bg-navy-900 dark:bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
              <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                {t('contact.form.title')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">{t('contact.form.success.title')}</h4>
                  <p className="text-gray-300">
                    {t('contact.form.success.message')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 ${
                            errors.name ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="Your name"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 ${
                            errors.email ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
              </div>
            </div>

              <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {t('contact.form.company')}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                        placeholder="Your company (optional)"
                      />
              </div>
            </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 ${
                        errors.subject ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="What can I help you with?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
              </div>

              <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
              <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>
              </div>

            {/* Social Links */}
              <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t('contact.social.title')}</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-navy/50 border border-navy/50 rounded-xl flex items-center justify-center transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-400" />
                  </motion.a>
                ))}
              </div>
              </div>

            {/* Response Time */}
            <div className="bg-navy/50 backdrop-blur-sm rounded-2xl p-6 border border-navy/50">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">{t('contact.response.title')}</h4>
              </div>
              <p className="text-gray-400 text-sm">
                {t('contact.response.message')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
