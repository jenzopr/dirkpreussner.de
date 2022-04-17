import Section from "../components/section"
import ContactForm from "../components/contactform"

export default function Workshops() {
    return(
        <>
            <Section className="bg-white">
            <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                <div className="lg:text-center">
                     <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Individuelle Workshops & Moderationen
                    </p>
                    <p className="max-w-3xl mt-4 text-xl text-gray-700 lg:mx-auto">
                    In meinen Fortbildungen zur Arbeit mit Gruppen und Teams arbeite ich prozessorientiert und erfahrungsbezogen. Dort schaffe ich einen Lern- und Aktionsraum, in dem sich Teilnehmer*innen ausprobieren können und neue Rollen entdecken können. Ich arbeite mit einem ganzheitlichen Lernansatz und unter starker Berücksichtigung der Gruppendynamik.
                    </p>
                    <p className="mt-4 text-xl text-gray-700">
                        Zu folgenden Themen biete ich Ihnen gerne individuelle Workshops an: 
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Reflexion
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Theatherpädagogik
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Führung & Leitung
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Kommunikation
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Gruppendynamik
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Methodenkompetenz
                        </h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                </div>  
            </div>
            </Section>
            <Section>
                <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                    <h1 className="text-3xl py-4 text-center text-burgund-700">Informieren Sie sich jetzt über ein individuelles Konzept</h1>
                    <p>
                    Auch klassische, theaterpädagogische Workshops gehören zu meinem Angebot. Wenn Sie ein individuelles Konzept besprechen möchten, kontaktieren Sie mich!
                    </p>
                    <ContactForm></ContactForm>
                </div>
                
            </Section>
        </>
    )
}