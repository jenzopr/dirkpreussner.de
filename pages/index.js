import Meta from '../components/meta'
import Section from '../components/section'
import ContactForm from '../components/contactform'

export default function Home() {
  return (
    <>
      <Meta title="Dirk Preußner - Systemische Beratung & Entwicklung in Frankfurt"></Meta>
      <div className="mx-auto max-w-6xl lg:mt-12 md:mb-8 lg:mb-0">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <img className="md:translate-x-12 w-full h-[24rem] md:w-[30rem] md:h-[30rem] object-cover object-top md:rounded-sm" src="_DBP9043-Bearbeitet2.jpg" alt="Photo von Dirk Preußner"></img>
          </div>
          <div className="flex flex-col justify-center px-8 py-8 md:p-20 lg:p-24 md:bg-burgund-100 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[40rem]">
              <h1 className='text-2xl lg:text-4xl text-burgund-600 md:text-burgund-900 md:font-semibold pb-4'>Veränderung braucht manchmal Begleitung.</h1>
              <div className='lg:text-lg text-gray-700'>
                <p>Vielleicht läuft ein Konflikt in Ihrem Team schon zu lange. Vielleicht haben Sie eine neue Führungsrolle übernommen und fragen sich, wie Sie die richtig ausfüllen. Vielleicht suchen Sie Unterstützung bei einem persönlichen Anliegen, in der Familie oder in einer Lebensphase, die sich gerade bei Ihnen verändert.</p>
                <p>Als Berater und Supervisor begleite ich Menschen und Teams im Bildungs-, Sozial- und Non-Profit-Bereich und Einzelpersonen in beruflichen wie persönlichen Situationen, mit ganz unterschiedlichen Anliegen.</p>
              </div>
          </div>
        </div>
      </div>
      <Section className="bg-white px-4">
        <div className="flex flex-col w-full lg:justify-center pb-8 lg:pt-16">
          <div className="">
            <h1 className="text-2xl lg:text-3xl leading-8 tracking-tight text-gray-900">
              Was Menschen zu mir bringt
            </h1>
            <p className="mt-4 lg:mt-8">
              Teams kommen zu mir, weil sie nicht mehr richtig zusammenarbeiten, weil Rollen unklar sind, Entscheidungen nicht getragen werden oder sich Konfliktmuster wiederholen.
            </p>
            <p className="mt-2 lg:mt-4">
              Führungskräfte suchen Unterstützung beim Wechsel in eine Leitungsfunktion, wenn die eigene Rolle neu ausgehandelt werden muss oder unterschiedliche Erwartungen aus der Organisation schwer zu vereinbaren sind.
            </p>
            <p className="mt-2 lg:mt-4">
              Einzelpersonen nutzen den geschützten Raum, um die eigene Arbeit zu reflektieren und handlungsfähig zu bleiben, oder bringen ein persönliches Anliegen mit: familiär, biografisch oder die Frage, wie es weitergehen soll.
            </p>
            <p className="mt-2 lg:mt-4 font-medium text-burgund-700">
              Was diese Anliegen verbindet: der Wunsch nach mehr Klarheit, Handlungsfähigkeit und Orientierung.
            </p>
            <p className="mt-2 lg:mt-4">
              Mit diesen Anliegen arbeite ich systemisch und prozessorientiert, im Dialog mit Ihnen, angepasst an Ihre Situation und Ihren Bedarf. Ich unterstütze Sie dabei, eigene Lösungen zu entwickeln. Online oder vor Ort, als Einzelbegleitung oder mit dem ganzen Team.
            </p>
          </div>
          <div className="mt-4 lg:mt-8">
            <h1 className="text-2xl lg:text-3xl leading-8 tracking-tight text-gray-900">
              Meine Qualifikationen
            </h1>
          </div>
          <div className="pl-2 py-4 lg:py-8">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">pecon-Akademie Mannheim</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Gruppendynamischer Leiter (DGGO)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Experte für Prozessmanagement und Gruppendynamik</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">praxis-Institut Hanau</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Systemischer Berater (DGSF)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Systemisches Arbeiten in Sozialarbeit, Pädagogik, Beratung und Therapie</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bundesverband Kulturarbeit in der ev. Jugend e.V.</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Spiel- und Theaterpädagoge (bka)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">2-jährige Ausbildung, u.a. bei Carola Unser, Nicole Amsbeck und Uli Geißler</p>
              </li>                  
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Goethe-Universität Frankfurt</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">BA, MA Erziehungswissenschaft</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Schwerpunkte: Migration, Jugend- und Erwachsenenbildung, Psychologie und Soziologie</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Berufserfahrung</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Langjährige Erfahrung im Non-Profit-Sektor und Sozialbereich als Referent und in Leitungsfunktionen</h3>
              </li>
              <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fortbildungen</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Lösungsorientierte Beratung, Wirkungsmanagement, Erlebnispädagogik</h3>
              </li>
            </ol>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col w-full lg:justify-center py-8">
          <h1 className="text-2xl lg:text-3xl pb-4 text-center text-burgund-700">Lassen Sie uns ins Gespräch kommen.</h1>
          <p>
            Schreiben Sie mir kurz, was Sie oder Ihr Team gerade beschäftigt. In einem ersten, unverbindlichen Gespräch von ca. 30 Minuten schauen wir gemeinsam, wie ich Sie unterstützen kann.
          </p>
          <ContactForm></ContactForm>
        </div>          
      </Section>

    </>
  )
}
