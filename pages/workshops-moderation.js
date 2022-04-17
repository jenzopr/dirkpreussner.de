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
                            Gruppendynamik
                        </h3>
                        <p className="text-sm">
                            Als Leitung von Arbeitsgruppen, Teams oder Seminaren müssen Sie immer wieder neu entscheiden, ob sie leiten oder die Selbststeuerungskräfte der Gruppe nutzen möchten. In meinen Workshops lernen Sie, wie sie diese sensible Balance halten und entwickeln können.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Kommunikation
                        </h3>
                        <p className="text-sm">
                            Gruppen und Einzelpersonen sind lebendige Systeme, deren wichtigstes Mittel zur positiven Handlungsfähigkeit Kommunikation ist. In meinen Angeboten lernen Sie, wie Sie Kommunikation besser funktioniert und wie Sie neue Angebote des Zuhörens gestalten. 
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Führung & Leitung
                        </h3>
                        <p className="text-sm">
                            Führung und Leitung anders denken – innovativ, verbunden und mit viel Perspektivwechsel. Sie lernen in meinen Veranstaltungen, wie Vertrauen, Wertschätzung und Kooperation in Führungshandeln gelingt – und wie sie als Leitung persönlich wachsen. 
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-end rounded-lg h-96 bg-burgund-100 pl-8 pr-2 pb-4">
                        <h3 className="text-2xl font-light">
                            Theatherpädagogik
                        </h3>
                        <p className="text-sm">
                            Impulse und Potentiale in Verbindung mit einer Gruppe nutzen, mich selbst besser kennenlernen, meine Grenzen und Rollen (neu) entdecken. In meinen theaterpädagogischen Workshops geht es um das, was ist, das Entdecken von neuem und das Vertrauen, dass alles richtig ist und seinen Platz hat.
                        </p>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="flex flex-col items-start justify-end pl-8 pr-2 pb-4 absolute inset-0 z-0 bg-cover bg-methodenkoffer">
                            <h3 className="text-2xl font-light group-hover:hidden">
                                Methodenkompetenz
                            </h3>
                        </div>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 bg-transparent flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-light">
                                Methodenkompetenz
                            </h3>
                            <p className="text-sm">
                                Manchmal braucht es neue Impulse und Kreativität. In meinen Methodentrainings lernen Sie, (spielerisch) Gruppen zu begleiten, mit wenig Mitteln neue Ergebnisse zu generieren oder einfach mal Neues auszuprobieren – auf der Basis von systemischem und erfahrungsorientiertem Lernen.
                            </p>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="flex flex-col items-start justify-end pl-8 pr-2 pb-4 absolute inset-0 z-0 bg-cover bg-methodenkoffer group-hover:opacity-70">
                        </div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-light">
                                Reflexion
                            </h3>
                            <p className="hidden group-hover:block text-sm">
                                Innehalten und Pause machen heißt oft, auch über das was war und das was kommt, nachzudenken. Ich begleite Sie oder ihr Team dabei, diese Überlegungen in einem strukturieren Rahmen und mit dem Fokus auf Ressourcen sichtbar und nutzbar zu machen.
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
            </Section>
            <Section>
                <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                    <h1 className="text-3xl py-4 text-center text-burgund-700">Informieren Sie sich jetzt über ein individuelles Konzept!</h1>
                    <p>
                    Ich gestalte mit ihnen Konzepte und Seminare zu aktuellen und spezifischen Themen auf ihren Bedarf zugeschnitten. Wenn sie ein individuelles Konzept besprechen möchten, kontaktieren Sie mich!
                    </p>
                    <ContactForm></ContactForm>
                </div>
                
            </Section>
        </>
    )
}