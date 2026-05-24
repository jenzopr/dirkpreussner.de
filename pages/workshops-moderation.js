import Meta from "../components/meta"
import Section from "../components/section"
import ContactForm from "../components/contactform"

export default function Workshops() {
    return(
        <>
            <Meta title="Dirk Preußner - Workshops & Moderation"></Meta>
            <Section className="bg-white">
            <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                <div className="lg:text-center">
                     <p className="mt-2 text-3xl leading-8 tracking-tight text-burgund-600 sm:text-4xl">
                        Individuelle Workshops & Moderationen
                    </p>
                    <p className="max-w-3xl mt-4 text-lg text-gray-700 lg:mx-auto">
                        Jeder Workshop entsteht aus dem konkreten Bedarf heraus – und wird gemeinsam mit Ihnen entwickelt. Zugeschnitten auf Ihre Gruppe, Ihr Thema und Ihre Situation.
                    </p>
                    <p className="mt-4 text-lg text-gray-700">
                        Ich arbeite prozessorientiert, erfahrungsbezogen und mit einem guten Gespür für Gruppendynamik.
                    </p>
                    <p className="mt-4 text-lg text-gray-700">
                        Thematisch bewege ich mich in den Bereichen Gruppendynamik, Kommunikation, Führung und Leitung, Theaterpädagogik, Methodenkompetenz und Reflexion – gerne auch zu Themen, die sich aus Ihrem konkreten Kontext ergeben. 
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-gruppendynamik group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Gruppendynamik
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Als Leitung von Arbeitsgruppen, Teams oder Seminaren müssen Sie immer wieder neu entscheiden, ob Sie leiten oder die Selbststeuerungskräfte der Gruppe nutzen möchten. In meinen Workshops lernen Sie, wie Sie diese sensible Balance halten und entwickeln können.
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-kommunikation group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Kommunikation
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Gruppen und Einzelpersonen sind lebendige Systeme, deren wichtigstes Mittel zur positiven Handlungsfähigkeit Kommunikation ist. In meinen Angeboten lernen Sie, wie Sie Kommunikation besser funktioniert und wie Sie neue Angebote des Zuhörens gestalten. 
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-fuehrung group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Führung & Leitung
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Führung und Leitung anders denken – innovativ, verbunden und mit viel Perspektivwechsel. Sie lernen in meinen Veranstaltungen, wie Vertrauen, Wertschätzung und Kooperation in Führungshandeln gelingt – und wie Sie als Leitung persönlich wachsen. 
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-theater group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Theaterpädagogik
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Impulse und Potentiale in Verbindung mit einer Gruppe nutzen, mich selbst besser kennenlernen, meine Grenzen und Rollen (neu) entdecken. In meinen theaterpädagogischen Workshops geht es um das, was ist, das Entdecken von Neuem und das Vertrauen, dass alles richtig ist und seinen Platz hat.
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-methodenkoffer group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Methodenkompetenz
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Manchmal braucht es neue Impulse und Kreativität. In meinen Methodentrainings lernen Sie, (spielerisch) Gruppen zu begleiten, mit wenig Mitteln neue Ergebnisse zu generieren oder einfach mal Neues auszuprobieren – auf der Basis von systemischem und erfahrungsorientiertem Lernen.
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-lg h-96 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center bg-reflexion group-hover:opacity-60"></div>
                        <div className="absolute inset-0 z-10 bg-transparent flex flex-col items-start justify-end pl-8 pr-2 pb-4">
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Reflexion
                            </h3>
                            <div className="mt-2 text-gray-700 hidden group-hover:block">
                                Innehalten und Pause machen heißt oft, auch über das was war und das was kommt, nachzudenken. Ich begleite Sie oder ihr Team dabei, diese Überlegungen in einem strukturieren Rahmen und mit dem Fokus auf Ressourcen sichtbar und nutzbar zu machen.
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </Section>
            <Section>
                <div className="flex flex-col w-full lg:justify-center py-8 lg:py-16">
                    <h1 className="text-3xl pb-4 text-center text-burgund-700">Lassen Sie uns ins Gespräch kommen.</h1>
                    <p>
                        Schreiben Sie mir kurz, was in Ihrer Gruppe oder Ihrem Team gerade ansteht. In einem ersten, unverbindlichen Gespräch entwickeln wir gemeinsam eine erste Idee für Ihr Format.
                    </p>
                    <ContactForm></ContactForm>
                </div>
                
            </Section>
        </>
    )
}