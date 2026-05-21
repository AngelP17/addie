import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Download, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type Language = 'en' | 'es';

interface ArticleCopy {
  back: string;
  status: string;
  category: string;
  byline: string;
  title: string;
  dek: string;
  note: string;
  download: string;
  contact: string;
  originalLanguage: string;
  noteLabel: string;
  pullQuote: string;
  captions: string[];
  sections: {
    heading?: string;
    paragraphs: string[];
    image?: {
      src: string;
      captionIndex: number;
    };
  }[];
}

const copy: Record<Language, ArticleCopy> = {
  en: {
    back: 'Back to Portfolio',
    status: 'Unpublished portfolio sample',
    category: 'Feature / International Reporting',
    byline: 'By Addie Jones',
    title: 'What Bolivia reads: Pages, palabras and the stories in between',
    dek: 'Bolivia went from 36% adult illiteracy in 1976 to a literacy rate over 94% today, but packed bookstores and thriving book clubs in its major cities tell only part of the story.',
    note: 'This piece is presented from an unpublished PDF portfolio sample written for the Multimedia Journalism & Art in Bolivia study abroad program. Translation and interview assistance provided by Mariana Maira Ayala Gutierrez, a communication sciences student at the Universidad Autonoma Gabriel Rene Moreno. All interviews have been translated from Spanish to English.',
    download: 'Download PDF',
    contact: 'Contact Addie',
    originalLanguage: 'Original article text in English',
    noteLabel: 'Note',
    pullQuote: 'What a country reads, and who gets to read it, tells a story of who it is becoming.',
    captions: [
      'A street vendor organizes books in La Paz, Bolivia. The city\'s municipal library was locked the same day as nationwide protests shut down parts of the capital.',
      'A handwritten book donation sign at San Pablo Cafe & Libreria encourages customers to share rather than keep their books.',
      'John Willan Bejarano Cabrera speaks about reading culture and education in Bolivia from his desk in Santa Cruz.',
      'Third-grade teacher Lidia Melgar Oliva stands in front of the chalkboard in her classroom.',
      'A vendor at the Mercado Central in Uyuni holds up one of his favorite books for sale.',
      'Books sit alongside everyday goods at the Mercado Central in Uyuni.',
      'Two young people sit outside the locked Biblioteca Municipal Mariscal Andres de Santa Cruz in La Paz.',
      'A painted mural of book spines appears near the closed public library in La Paz.',
    ],
    sections: [
      {
        image: { src: '/bolivia-books.jpg', captionIndex: 0 },
        paragraphs: [
          'A handwritten cardboard donation box in San Pablo Cafe & Libreria in Santa Cruz, Bolivia reads “un lector hoy, un lider manana.” A reader today, a leader tomorrow.',
          '“We have book clubs with more than 30 people each,” said an anonymous employee. “There are people who even get turned away and have to wait for the next one. There is a reading community in Bolivia.”',
          'Bolivia has experienced one of the most dramatic literacy transformations of any nation in the Western hemisphere. While 36% of adults could not read in 1976, the country now has a literacy rate of over 94%, according to Global Economy.',
          'This progress is visible in bookstores and street stalls in major cities, but professors and researchers say urban Bolivia represents the best-case scenario. In rural Bolivia, some individuals counted as literate are only functionally literate, unable to meaningfully participate in employment or civic life.',
        ],
      },
      {
        image: { src: '/articles/bolivia/photo-2.jpg', captionIndex: 1 },
        paragraphs: [
          'Access to basic education drops from 98% in cities to 78% in rural areas, highlighting substantial gaps in infrastructure, according to the SOLYDES Foundation. More than a million Bolivians aged 15 and above remain illiterate or functionally illiterate, according to a Ballard Brief study on indigenous adult illiteracy in the Andean region.',
          'What a country reads, and who gets to read it, tells a story of who it is becoming. Across 12 days and four Bolivian cities, the educational gap was present.',
          'Santa Cruz is Bolivia’s largest and fastest-growing city, boasting a confident relationship with books. Posters in several locations advertised the 27th Annual Feria Internacional del Libro, an international book fair running late May through early June. The tagline reads, “nos gusta leer.” We like to read.',
          'Inside the San Pablo bookstore, bookshelves stretch wall-to-wall, floor-to-ceiling. Genres span religion, philosophy, politics and children’s fiction. A Virgin Mary stood between the titles, and a small printed card on a cafe table displayed an Aristotle quote: “El hombre es por naturaleza un ser que busca sentido.” Man is by nature a being that seeks meaning.',
        ],
      },
      {
        heading: 'A growing reading culture',
        image: { src: '/articles/bolivia/photo-3.jpg', captionIndex: 2 },
        paragraphs: [
          'John Willan Bejerano Cabrera, a computer science teacher working with students in Santa Cruz from preschool through high school, said the city’s reading culture is growing, but slowly.',
          '“Santa Cruz doesn’t have a strong reading culture,” Bejarano Cabrera said. “Very few people have it. But it has been increasing over time. The best example is the Book Fair. Years ago, attendance was lower. It has been growing, not by leaps and bounds as we would like, but progressively.”',
          'Sulema Medina Tapia, a sixth-grade teacher at a Santa Cruz primary school, agreed the fair represents a turning point. “At the book fair you notice more people attending and buying a book,” Medina Tapia said. “They look for the book of their preference. A change is being seen.”',
          'Bejarano Cabrera said most students do not get their books from bookstores and that “the vast majority use the markets.” Because market vendors do not issue official tax receipts, book prices are 10 to 15% lower, an important distinction for families with limited budgets.',
        ],
      },
      {
        heading: 'Inside the classroom',
        image: { src: '/articles/bolivia/photo-4.png', captionIndex: 3 },
        paragraphs: [
          'Lidia Melgar Oliva, who teaches third grade at a Santa Cruz primary school, explained the difficulty of getting books into her classroom.',
          '“Right now, it is prohibited for teachers or school principals to sell any book or texts in schools,” she said. “If we do that, we get reported and there are problems for us.”',
          'Melgar Oliva trained as a teacher from 2001 to 2004 during an era of education reform and has experienced decades of policy shifts. The changes do not just affect the curriculum, but also expectations for students and families.',
          'She said when she studied and did homework at home as a student, she did not wait for her mom to help her. “Why? Because there were punishments,” Melgar Oliva said. “If you didn’t do it, the punishment was carried out. So out of fear, you worked, you were responsible.”',
          'Technology has also played a mixed role in students’ relationships with education and reading, she said. “Before, I had to go to the public library,” Melgar Oliva said. “I would take out the thick books and read. Now you give a child an assignment and the first thing they grab is their phone. Technology helps, but at the same time it hurts, because it no longer lets them learn to think.”',
          'Bejarano Cabrera said that if before, five out of 10 students did not read, the number has shifted to eight out of 10 not reading.',
        ],
      },
      {
        heading: 'Language, access and reclamation',
        image: { src: '/articles/bolivia/photo-5.jpg', captionIndex: 4 },
        paragraphs: [
          '“There is no love for reading among young Bolivians, and you cannot teach a love for reading,” he said. “It has to be born. It is like watering a plant from a seed until it bears fruit. It is the parents who have to collaborate at home.”',
          'Bolivia’s constitution officially recognizes 37 languages, and education laws have encouraged trilingual instruction in Spanish, English and an indigenous language, according to Development and Cooperation.',
          'In practice, however, indigenous languages are often treated as “transitional languages,” with instruction reduced to the bare minimum and quickly replaced with exclusive Spanish.',
          '“I teach the alphabet in English, I teach the alphabet in Guarani,” Melgar Oliva said. “Something basic, for knowledge.” It should be different, she said, but being in the city, there are very few places to practice indigenous languages.',
          'In 2015, a team spent two years translating “The Little Prince” into Aymara, marking the first time this beloved novel existed in this indigenous language spoken by more than two million people across Bolivia, Peru and Chile. A Guarani translation followed, making the story an unlikely tool of linguistic reclamation.',
        ],
      },
      {
        heading: 'Books as practical goods',
        image: { src: '/articles/bolivia/photo-6.jpg', captionIndex: 5 },
        paragraphs: [
          'Over 500 miles away from Santa Cruz, the high-altitude mining town Uyuni boasts the Mercado Central, bringing together vendors from surrounding small towns to sell anything ranging from calculators to soap and other household necessities.',
          'Around a dozen vendors sold books, including one man who shared his favorite titles, encompassing topics like origami and soccer. Here, books are not packed on shelves or behind the class. They are practical goods, accessible to anyone with a few bolivianos.',
          'Melgar Oliva cautioned against this easy availability. “They are good and bad at the same time,” she said. “There are publishers that have closed. Since texts can no longer be requested, they are no longer used. Parents go to the cheaper texts, even if the content is not as good.”',
          'In a country where rural students complete an average of just 4.2 years of schooling, compared to 9.4 years for urban students, according to the Borgen Project, the informal market is still a reliable point of access for many families to have books at all.',
        ],
      },
      {
        heading: 'Locked gates, visible desire',
        image: { src: '/articles/bolivia/photo-7.jpg', captionIndex: 6 },
        paragraphs: [
          'In May, year-long protests flared up and blocked off sections of Bolivia’s administrative capital. Participants demanded the resignation of President Rodrigo Paz and blocked major highways into La Paz and El Alto, protesting inflation, fuel shortages and a deepening economic crisis.',
          'The Biblioteca Municipal Mariscal Andres de Santa Cruz, the main public library in La Paz, was locked early behind iron gates. Two young people sat on the steps outside, scrolling their phones. A planned bookstore route was blocked off entirely by ropes.',
          'Despite the institutional barriers, books remained everywhere outside institutional walls. On a side street near the library, a woman in a pink coat arranged a floor-to-ceiling street stall of paperbacks, and on the sidewalk, someone had painted a mural of book spines into the concrete.',
        ],
      },
      {
        image: { src: '/articles/bolivia/photo-8.jpg', captionIndex: 7 },
        paragraphs: [
          'La Paz has the lowest education inequality of any major Bolivian city, according to the Sustainable Development Solutions Network Bolivia. Still, the city with the best-case scenario for literacy had it locked behind a gate.',
          '“There are students who really put effort into learning, who would love for education to be different,” Bejarano Cabrera said. “There is a lot of desire from many students who want to change, want to improve and want to leave behind the flaws in the country’s educational system.”',
          'Medina Tapia, when asked what she would tell the world about education in Bolivia, kept it simple. “We are on the right path,” she said, “and we want to keep improving.”',
        ],
      },
    ],
  },
  es: {
    back: 'Volver al portafolio',
    status: 'Muestra inédita de portafolio',
    category: 'Reportaje / Periodismo internacional',
    byline: 'Por Addie Jones',
    title: 'Lo que lee Bolivia: páginas, palabras y las historias entre líneas',
    dek: 'Bolivia pasó de un 36% de analfabetismo adulto en 1976 a una tasa de alfabetización superior al 94% hoy, pero las librerías llenas y los clubes de lectura activos en sus ciudades principales cuentan solo una parte de la historia.',
    note: 'Esta pieza se presenta desde una muestra PDF inédita de portafolio, escrita para el programa de estudios en el extranjero Multimedia Journalism & Art in Bolivia. La asistencia de traducción e entrevistas fue proporcionada por Mariana Maira Ayala Gutierrez, estudiante de ciencias de la comunicación en la Universidad Autónoma Gabriel René Moreno.',
    download: 'Descargar PDF',
    contact: 'Contactar a Addie',
    originalLanguage: 'Texto del articulo traducido al espanol para el portafolio',
    noteLabel: 'Nota',
    pullQuote: 'Lo que lee un país, y quién puede leerlo, cuenta una historia sobre en qué se está convirtiendo.',
    captions: [
      'Una vendedora callejera organiza libros en La Paz, Bolivia. La biblioteca municipal de la ciudad estaba cerrada el mismo dia en que protestas nacionales paralizaron partes de la capital.',
      'Un letrero escrito a mano en San Pablo Cafe & Libreria anima a los clientes a compartir sus libros en vez de guardarlos.',
      'John Willan Bejarano Cabrera habla sobre la cultura lectora y la educacion en Bolivia desde su escritorio en Santa Cruz.',
      'La maestra de tercer grado Lidia Melgar Oliva esta frente al pizarron de su aula.',
      'Un vendedor del Mercado Central de Uyuni muestra uno de sus libros favoritos a la venta.',
      'Libros se venden junto a productos cotidianos en el Mercado Central de Uyuni.',
      'Dos jovenes se sientan afuera de la cerrada Biblioteca Municipal Mariscal Andres de Santa Cruz en La Paz.',
      'Un mural pintado con lomos de libros aparece cerca de la biblioteca publica cerrada en La Paz.',
    ],
    sections: [
      {
        image: { src: '/bolivia-books.jpg', captionIndex: 0 },
        paragraphs: [
          'Una caja de donaciones escrita a mano en San Pablo Cafe & Libreria en Santa Cruz, Bolivia, dice “un lector hoy, un lider manana.”',
          '“Tenemos clubes de lectura con mas de 30 personas cada uno”, dijo una empleada anonima. “Hay personas que incluso se quedan sin cupo y tienen que esperar al siguiente. Hay una comunidad lectora en Bolivia.”',
          'Bolivia ha vivido una de las transformaciones de alfabetizacion mas dramaticas de cualquier pais del hemisferio occidental. Mientras que el 36% de los adultos no podia leer en 1976, hoy el pais tiene una tasa de alfabetizacion superior al 94%, segun Global Economy.',
          'Ese avance es visible en librerias y puestos callejeros de las ciudades grandes, pero profesores e investigadores dicen que la Bolivia urbana representa el mejor escenario. En la Bolivia rural, algunas personas consideradas alfabetizadas solo lo son de manera funcional, sin poder participar plenamente en el empleo o la vida civica.',
        ],
      },
      {
        image: { src: '/articles/bolivia/photo-2.jpg', captionIndex: 1 },
        paragraphs: [
          'El acceso a la educacion basica baja del 98% en las ciudades al 78% en zonas rurales, lo que evidencia brechas importantes de infraestructura, segun la Fundacion SOLYDES. Mas de un millon de bolivianos de 15 anos o mas siguen siendo analfabetos o funcionalmente analfabetos, segun un estudio de Ballard Brief sobre analfabetismo adulto indigena en la region andina.',
          'Lo que lee un pais, y quien puede leerlo, cuenta una historia sobre en que se esta convirtiendo. Durante 12 dias y cuatro ciudades bolivianas, la brecha educativa estuvo presente.',
          'Santa Cruz es la ciudad mas grande y de mas rapido crecimiento de Bolivia, con una relacion segura con los libros. En varios lugares, carteles anunciaban la 27.a Feria Internacional del Libro, que se realiza de finales de mayo a principios de junio. El lema decia: “nos gusta leer.”',
          'Dentro de la libreria San Pablo, los estantes cubren las paredes de piso a techo. Los generos incluyen religion, filosofia, politica y literatura infantil. Una Virgen Maria se ubicaba entre los titulos, y una tarjeta en una mesa del cafe mostraba una cita de Aristoteles: “El hombre es por naturaleza un ser que busca sentido.”',
        ],
      },
      {
        heading: 'Una cultura lectora en crecimiento',
        image: { src: '/articles/bolivia/photo-3.jpg', captionIndex: 2 },
        paragraphs: [
          'John Willan Bejerano Cabrera, profesor de computacion que trabaja con estudiantes desde preescolar hasta secundaria en Santa Cruz, dijo que la cultura lectora de la ciudad esta creciendo, aunque lentamente.',
          '“Santa Cruz no tiene una cultura lectora fuerte”, dijo Bejarano Cabrera. “Muy poca gente la tiene. Pero ha ido aumentando con el tiempo. El mejor ejemplo es la Feria del Libro. Hace anos, la asistencia era menor. Ha ido creciendo, no a pasos agigantados como quisieramos, pero progresivamente.”',
          'Sulema Medina Tapia, maestra de sexto grado en una escuela primaria de Santa Cruz, coincidio en que la feria representa un punto de cambio. “En la feria del libro se nota que asiste mas gente y compra un libro”, dijo Medina Tapia. “Buscan el libro de su preferencia. Se esta viendo un cambio.”',
          'Bejarano Cabrera dijo que la mayoria de los estudiantes no consigue sus libros en librerias y que “la gran mayoria usa los mercados.” Como los vendedores de mercado no emiten facturas oficiales, los precios de los libros son entre 10 y 15% mas bajos, una diferencia importante para familias con presupuestos limitados.',
        ],
      },
      {
        heading: 'Dentro del aula',
        image: { src: '/articles/bolivia/photo-4.png', captionIndex: 3 },
        paragraphs: [
          'Lidia Melgar Oliva, maestra de tercer grado en una escuela primaria de Santa Cruz, explico la dificultad de llevar libros a su aula.',
          '“Ahora mismo esta prohibido que los maestros o directores vendan libros o textos en las escuelas”, dijo. “Si hacemos eso, nos denuncian y tenemos problemas.”',
          'Melgar Oliva se formo como maestra entre 2001 y 2004, durante una epoca de reforma educativa, y ha vivido decadas de cambios de politica. Esos cambios no solo afectan el curriculo, sino tambien las expectativas para estudiantes y familias.',
          'Dijo que cuando ella estudiaba y hacia tareas en casa, no esperaba que su mama la ayudara. “Por que? Porque habia castigos”, dijo Melgar Oliva. “Si no lo hacias, el castigo se cumplia. Entonces, por miedo, trabajabas, eras responsable.”',
          'La tecnologia tambien ha tenido un papel mixto en la relacion de los estudiantes con la educacion y la lectura, dijo. “Antes, yo tenia que ir a la biblioteca publica”, dijo Melgar Oliva. “Sacaba los libros gruesos y leia. Ahora le das una tarea a un nino y lo primero que agarra es su telefono. La tecnologia ayuda, pero al mismo tiempo perjudica, porque ya no les permite aprender a pensar.”',
          'Bejarano Cabrera dijo que si antes cinco de cada 10 estudiantes no leian, ahora la cifra ha cambiado a ocho de cada 10.',
        ],
      },
      {
        heading: 'Idioma, acceso y recuperacion',
        image: { src: '/articles/bolivia/photo-5.jpg', captionIndex: 4 },
        paragraphs: [
          '“No hay amor por la lectura entre los jovenes bolivianos, y no se puede ensenar el amor por la lectura”, dijo. “Tiene que nacer. Es como regar una planta desde la semilla hasta que da fruto. Son los padres quienes tienen que colaborar en casa.”',
          'La constitucion de Bolivia reconoce oficialmente 37 idiomas, y las leyes educativas han promovido la ensenanza trilingue en espanol, ingles y una lengua indigena, segun Development and Cooperation.',
          'En la practica, sin embargo, las lenguas indigenas suelen tratarse como “lenguas de transicion”, con una ensenanza reducida al minimo y rapidamente reemplazada por el espanol exclusivo.',
          '“Enseño el alfabeto en ingles, enseño el alfabeto en guarani”, dijo Melgar Oliva. “Algo basico, para conocimiento.” Deberia ser diferente, dijo, pero en la ciudad hay muy pocos lugares para practicar lenguas indigenas.',
          'En 2015, un equipo paso dos anos traduciendo “El Principito” al aimara, marcando la primera vez que esta querida novela existia en esta lengua indigena hablada por mas de dos millones de personas en Bolivia, Peru y Chile. Luego llego una traduccion al guarani, convirtiendo la historia en una herramienta inesperada de recuperacion linguistica.',
        ],
      },
      {
        heading: 'Libros como bienes practicos',
        image: { src: '/articles/bolivia/photo-6.jpg', captionIndex: 5 },
        paragraphs: [
          'A mas de 500 millas de Santa Cruz, la ciudad minera de gran altitud de Uyuni cuenta con el Mercado Central, que reune a vendedores de pueblos cercanos para vender desde calculadoras hasta jabon y otros articulos necesarios para el hogar.',
          'Alrededor de una docena de vendedores vendian libros, incluido un hombre que compartio sus titulos favoritos, sobre temas como origami y futbol. Aqui, los libros no estan apretados en estantes ni detras del aula. Son bienes practicos, accesibles para cualquiera con algunos bolivianos.',
          'Melgar Oliva advirtio sobre esa facil disponibilidad. “Son buenos y malos al mismo tiempo”, dijo. “Hay editoriales que han cerrado. Como ya no se pueden pedir textos, ya no se usan. Los padres van a los textos mas baratos, aunque el contenido no sea tan bueno.”',
          'En un pais donde los estudiantes rurales completan un promedio de apenas 4.2 anos de escolaridad, frente a 9.4 anos para estudiantes urbanos, segun The Borgen Project, el mercado informal sigue siendo un punto confiable de acceso para que muchas familias tengan libros.',
        ],
      },
      {
        heading: 'Rejas cerradas, deseo visible',
        image: { src: '/articles/bolivia/photo-7.jpg', captionIndex: 6 },
        paragraphs: [
          'En mayo, protestas de un ano se intensificaron y bloquearon secciones de la capital administrativa de Bolivia. Los participantes exigian la renuncia del presidente Rodrigo Paz y bloquearon carreteras principales hacia La Paz y El Alto, protestando por la inflacion, la escasez de combustible y una crisis economica cada vez mas profunda.',
          'La Biblioteca Municipal Mariscal Andres de Santa Cruz, la principal biblioteca publica de La Paz, estaba cerrada temprano detras de rejas de hierro. Dos jovenes se sentaban en las gradas de afuera, mirando sus telefonos. Una ruta planeada de librerias estaba completamente bloqueada por cuerdas.',
          'A pesar de las barreras institucionales, los libros seguian apareciendo por todas partes fuera de los muros institucionales. En una calle lateral cerca de la biblioteca, una mujer con abrigo rosado organizaba un puesto callejero de libros de piso a techo, y en la acera alguien habia pintado un mural de lomos de libros en el concreto.',
        ],
      },
      {
        image: { src: '/articles/bolivia/photo-8.jpg', captionIndex: 7 },
        paragraphs: [
          'La Paz tiene la menor desigualdad educativa de cualquier ciudad boliviana grande, segun Sustainable Development Solutions Network Bolivia. Aun asi, la ciudad con el mejor escenario para la alfabetizacion la tenia encerrada detras de una reja.',
          '“Hay estudiantes que realmente se esfuerzan por aprender, que quisieran que la educacion fuera diferente”, dijo Bejarano Cabrera. “Hay mucho deseo de muchos estudiantes que quieren cambiar, quieren mejorar y quieren dejar atras las fallas del sistema educativo del pais.”',
          'Medina Tapia, cuando se le pregunto que le diria al mundo sobre la educacion en Bolivia, fue sencilla. “Estamos en el camino correcto”, dijo, “y queremos seguir mejorando.”',
        ],
      },
    ],
  },
};

export default function BoliviaArticle() {
  const { language } = useLanguage();
  const article = copy[language];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <article className="bg-background">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-16 z-50 h-1 w-full origin-left bg-primary"
      />
      <section className="relative overflow-hidden border-b border-border bg-card/40 px-4 py-8 sm:px-6 lg:py-12">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_20%_0%,rgba(100,116,139,0.16),transparent_38%),radial-gradient(circle_at_82%_10%,rgba(148,163,184,0.1),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl">
          <a
            href="/#portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {article.back}
          </a>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span>{article.status}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{article.category}</span>
            </div>
            <h1 className="max-w-5xl text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              {article.dek}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{article.byline}</span>
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground sm:block" />
              <span>{article.originalLanguage}</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/articles/bolivia.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                {article.download}
              </a>
              <a href="mailto:addie.elizabethjones@gmail.com" className="btn-outline inline-flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                {article.contact}
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="min-w-0">
          <div className="space-y-12">
            {article.sections.map((section, sectionIndex) => (
              <motion.section
                key={`${section.heading ?? 'section'}-${sectionIndex}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {sectionIndex === 1 && (
                  <blockquote className="rounded-lg border-l-4 border-primary bg-card p-5 text-2xl font-semibold leading-snug text-card-foreground shadow-sm sm:p-7 sm:text-3xl">
                    “{article.pullQuote}”
                  </blockquote>
                )}
                {section.heading && (
                  <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{section.heading}</h2>
                )}
                {section.image && (
                  <figure className="overflow-hidden rounded-lg border border-border bg-card">
                    <motion.img
                      src={section.image.src}
                      alt={article.captions[section.image.captionIndex]}
                      className="aspect-[4/3] w-full object-cover"
                      loading={sectionIndex < 2 ? 'eager' : 'lazy'}
                      initial={{ scale: 0.96, opacity: 0.72 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    <figcaption className="border-t border-border px-4 py-3 text-sm leading-6 text-muted-foreground">
                      {article.captions[section.image.captionIndex]}
                    </figcaption>
                  </figure>
                )}
                <div className="space-y-5 text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <p className="text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">{article.noteLabel}: </span>
              {article.note}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
