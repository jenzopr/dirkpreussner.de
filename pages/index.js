import Meta from '../components/meta'
import Section from '../components/section'
import ContactForm from '../components/contactform'

export default function Home() {
  return (
    <>
      <Meta title="Dirk Preußner - Beratung & Entwicklung"></Meta>
      <div className="mx-auto max-w-6xl lg:mt-12 md:mb-8 lg:mb-0">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <img className="md:translate-x-12 w-full h-[24rem] md:w-[30rem] md:h-[30rem] object-cover object-top md:rounded-sm" src="lemrich-start-016.jpg" alt="Photo von Dirk Preußner"></img>
          </div>
          <div className="flex flex-col justify-center px-8 py-8 md:p-24 lg:p-28 md:bg-burgund-100 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[40rem]">
              <h1 className='text-4xl text-burgund-600 md:text-burgund-900 md:font-semibold pb-4'>Herzlich Willkommen!</h1>
              <div className='lg:text-lg text-gray-700'>
                Mein Angebot umfasst Beratung, Coaching, Trainings oder Workshops für Einzelpersonen, soziale Organisationen oder Unternehmen.
                Meine Arbeit gestalte ich im Dialog mit Ihnen: angepasst an Ihre Situation und Ihren Bedarf. Online und offline, bei Ihnen vor Ort oder in einem Tagungshaus. 
              </div>
          </div>
        </div>
      </div>
      <Section className="bg-white px-4">
        <div className="flex flex-col w-full lg:justify-center pb-8 lg:pt-16">
          <div className="">
            <p className="text-3xl leading-8 tracking-tight text-gray-900">
              Meine Qualifikationen
            </p>
          </div>
          <div className="pl-2 py-4 lg:py-8">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Goethe-Universität Frankfurt</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BA, MA Erziehungswissenschaft</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Schwerpunkte: Migration, Jugend- und Erwachsenenbildung, Psychologie und Soziologie</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bundesverband Kulturarbeit in der ev. Jugend e.V.</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Spiel- und Theaterpädagoge (bka)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">2-jährige Ausbildung, unter anderem bei Carola Unser, Nicole Amsbeck und Uli Geißler</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">praxis-Institut Hanau</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Systemisches Arbeiten in Sozialarbeit, Pädagogik, Beratung und Therapie</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Systemischer Berater (DGSF, i.A.)</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Berufserfahrung</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Langjährige Erfahrung im Non-Profit-Sektor und Sozialbereich als Referent und in Leitungsfunktionen</h3>
              </li>
              <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fortbildungen</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gruppendynamik, systemische und lösungsorientierte Beratung, Wirkungsmanagement, Erlebnispädagogik</h3>
              </li>
            </ol>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col w-full lg:justify-center py-8">
          <h1 className="text-3xl pb-4 text-center text-burgund-700">Kontaktieren Sie mich!</h1>
          <p>
            In einem unverbindlichen Vorgespräch können wir gemeinsam herausfinden, wie wir ihr Anliegen wirkungsvoll und nachhaltig bearbeiten können.
          </p>
          <ContactForm></ContactForm>
        </div>          
      </Section>

    </>
  )
}
