import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Share2, Monitor, FileText, PenTool, Megaphone, Settings } from 'lucide-react';

export default function Freelance() {
    const { t } = useTranslation();

    const services = [
        { key: 'social', icon: Share2 },
        { key: 'websites', icon: Monitor },
        { key: 'marketing', icon: FileText },
        { key: 'content', icon: PenTool },
        { key: 'pr', icon: Megaphone },
        { key: 'setup', icon: Settings }
    ];

    return (
        <section id="freelance" className="relative border-t border-border/40 bg-background px-4 py-24 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Main Content Area */}
                    <div className="mb-12">
                        <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            {t('freelance.title')}
                        </h2>

                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
                            {t('freelance.description')}
                        </p>
                    </div>

                    {/* Service Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {services.map((service) => (
                            <div
                                key={service.key}
                                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-4 py-2.5 text-foreground shadow-sm transition-colors hover:bg-card/80 sm:px-5"
                            >
                                <service.icon className="w-4 h-4 text-primary" />
                                <span className="text-sm md:text-base">
                                    {t(`freelance.services.${service.key}`)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Details & CTA */}
                    <div className="flex flex-col items-center gap-8 mt-12">
                        <p className="text-muted-foreground text-base max-w-lg mx-auto">
                            {t('freelance.moreDetails')}
                        </p>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://jones-co.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-base font-semibold text-background shadow-lg transition-colors hover:bg-foreground/90 sm:w-auto sm:px-8 sm:text-lg"
                        >
                            {t('freelance.cta')}
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
