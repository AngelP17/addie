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
        <section id="freelance" className="py-24 px-6 bg-background relative border-t border-border/40">
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
                        <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6 font-serif">
                            {t('freelance.title')}
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {t('freelance.description')}
                        </p>
                    </div>

                    {/* Service Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {services.map((service) => (
                            <div
                                key={service.key}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-border/50 text-foreground font-medium shadow-sm hover:bg-card/80 transition-colors"
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
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg hover:bg-foreground/90 transition-colors shadow-lg"
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
