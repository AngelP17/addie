import { useLanguage } from '../../contexts/LanguageContext';

const copy = {
  en: {
    statement: 'Reporting with rigor. Communicating for public purpose.',
    description: 'Addie works at the intersection of public-interest journalism, progressive campaigns, and literacy advocacy.',
    credentials: ['Middle Seat', 'The American Prospect', 'Arkansas Traveler', 'Fulbright Honors Sturgis Fellow'],
  },
  es: {
    statement: 'Reportajes con rigor. Comunicación con propósito público.',
    description: 'Addie trabaja en la intersección del periodismo de interés público, las campañas progresistas y la alfabetización.',
    credentials: ['Middle Seat', 'The American Prospect', 'Arkansas Traveler', 'Becaria Fulbright Honors Sturgis'],
  },
};

export default function EditorialSignal() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="bg-secondary px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-foreground sm:text-6xl">
            {content.statement}
          </h2>
          <p className="max-w-md text-base leading-7 text-muted-foreground">{content.description}</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-7 text-sm font-medium text-foreground md:grid-cols-4">
          {content.credentials.map((credential) => (
            <p key={credential}>{credential}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
