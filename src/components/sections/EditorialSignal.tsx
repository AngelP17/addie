import { useLanguage } from '../../contexts/LanguageContext';

const copy = {
  en: {
    title: 'Campaigns, reporting, and advocacy in one portfolio.',
    description: 'A compact throughline for Addie’s work: persuasive digital communication, public-interest journalism, and community-centered storytelling.',
    items: ['Digital strategy', 'Investigative reporting', 'Culture writing', 'Policy research'],
  },
  es: {
    title: 'Campañas, reportajes y defensa en un solo portafolio.',
    description: 'Un hilo conductor compacto para el trabajo de Addie: comunicación digital persuasiva, periodismo de interés público y narrativas centradas en la comunidad.',
    items: ['Estrategia digital', 'Periodismo investigativo', 'Escritura cultural', 'Investigación de políticas'],
  },
};

export default function EditorialSignal() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="border-y border-border bg-card/30 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {content.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {content.items.map((item) => (
            <span key={item} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
