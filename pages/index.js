import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section'
import ContactForm from '../components/contactform'
import ImageSection from '../components/imagesection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Herzlich Willkommen!</title>
      </Head>
      <div className="mx-auto max-w-6xl lg:my-12 md:mb-12">
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
      <Section className="bg-white">
        <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Meine Qualifikationen
            </p>
          </div>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <span class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Goethe-Universität Frankfurt</span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">BA, MA Erziehungswissenschaften</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Schwerpunkte: Migration, Jugend- und Erwachsenenbildung, Psychologie und Soziologie.</p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <span class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2-jährige Ausbildung</span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Spiel- und Theaterpädagoge</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Unter anderem bei Carola Unser, Nicole Amsbeck und Uli Geißler</p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <span class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">praxis-Institut Hanau</span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Systemisches Arbeiten in Sozialarbeit, Pädagogik, Beratung und Therapie</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Systemischer Berater (DGSF, i.A.)</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <span class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fortbildungen</span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Gruppendynamik, systemischer und lösungsorientierter Beratung, Wirkungsmanagement, Erlebnispädagogik</h3>
            </li>
          </ol>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
          <h1 className="text-3xl py-4 text-center text-burgund-700">Kontaktieren Sie mich!</h1>
          <p>
            In einem unverbindlichen Vorgespräch können wir gemeinsam herausfinden, wie wir ihr Anliegen wirkungsvoll und nachhaltig bearbeiten können.
          </p>
          <ContactForm></ContactForm>
        </div>          
      </Section>

    </>
  )
}
