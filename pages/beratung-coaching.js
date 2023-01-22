import Meta from "../components/meta";
import ContactForm from "../components/contactform";
import Section from "../components/section";

export default function Beratung() {
    return(
        <>
        <Meta title="Dirk Preußner - Beratung & Coaching"></Meta>
        <Section>
            <div className="flex flex-col w-full lg:justify-center pb-8 lg:pt-16">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 tracking-tight text-burgund-600 sm:text-4xl">
                        Beratung & Coaching
                    </p>
                    <p className="mt-4 max-w-3xl text-lg text-gray-700 lg:mx-auto">
                        Jeder von uns bringt Ressourcen mit, um Herausforderungen innerhalb seiner bestehenden Arbeits- oder Familiensysteme zu bearbeiten. Es gibt jedoch Situationen, in denen uns bekannte Lösungsversuche nicht zum gewünschten Erfolg führen. Das führt oft zu Verunsicherung oder Konflikten und bringt ein System aus dem Gleichgewicht.
                    </p>
                    <p className="mt-4 max-w-3xl text-lg text-gray-700 lg:mx-auto">
                        Wenn Sie für sich eine neue Perspektive auf den Umgang mit privaten oder beruflichen Belastungen finden möchten, wenn Sie sich in Ihren Rollen abgrenzen oder stärken möchten oder wenn Sie mehr Antworten als Fragen haben, kann Unterstützung von außen zur Perspektiverweiterung und zur Entwicklung von alternativen Lösungsmöglichkeiten hilfreich sein.
                    </p>
                    <h3 className="my-8 text-xl font-medium text-burgund-700">Ich biete Ihnen bei persönlichen Herausforderungen und Problemsituationen Unterstützung in Form von systemischer Beratung (DGSF) und Coachings an.</h3>
                    <p className="text-lg max-w-3xl text-gray-700 lg:mx-auto">
                        Dabei begleite ich Sie, eine Bewältigungsstrategie für Ihre aktuelle Krise zu finden und Ihre eigenen Denk- und Handlungsmuster besser zu verstehen. Ich möchte Sie einladen, Ihre Ressourcen neu zu entdecken Ihre Handlungsmöglichkeiten zu erweitern.
                    </p>
                    <p className="text-lg max-w-3xl text-gray-700 lg:mx-auto">
                        Für mich stehen die individuellen Bedürfnisse und Wünsche der Klient*innen im Mittelpunkt meiner Arbeit. Ich lege darauf Wert, Ihr Anliegen in Verbindung mit Ihrem sozialen Umfeld und ihrem sozialen Familien-, Partnerschafts- oder Arbeitssystem zu betrachten - und Sie darin zu unterstützen, konkrete Veränderung auszuprobieren. 
                    </p>
                </div>
            </div>
        </Section>
        <Section className="bg-white">
            <div className="flex flex-col w-full lg:justify-center pb-8 lg:pt-16">
                <div className="lg:text-center">
                    <p className="mt-2 text-xl leading-8 tracking-tight text-burgund-800 sm:text-4xl">
                    Unsere Zusammenarbeit
                    </p>
                    <p className="mt-4 max-w-3xl text-lg text-gray-700 lg:mx-auto">
                    In einem Erstgespräch lernen Sie mich und ich Sie kennen und wir betrachten Ihr persönliches Anliegen, um den Auftrag mit Zielen für die systemische Beratung zu klären. Am Ende der ersten Sitzung wird klar, ob wir uns eine Zusammenarbeit vorstellen können und welcher individuelle Beratungsintervall hilfreich ist.
                    </p>
                </div>
                <div>
                    <dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-burgund-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                    </svg>
                                </div>
                                <p className="ml-14 text-lg leading-6 font-serif font-medium text-gray-900">Systemische Einzelberatung</p>
                            </dt>
                            <dd className="mt-2 ml-14 text-base text-gray-700">
                                <p className="">
                                    Mein Stundensatz für eine Einzelberatung liegt bei 80€ / 60 Minuten und 100€ / 90 Minuten.
                                </p>
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-burgund-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <p className="ml-14 text-lg leading-6 font-serif font-medium text-gray-900">Systemische Familienberatung</p>
                            </dt>
                            <dd className="mt-2 ml-14 text-base text-gray-700">
                                Mein Stundensatz für eine Familienberatung liegt bei 100€ / 60 Minuten und 120€ / 90 Minuten.
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-4 text-small text-gray-900">
                    Die Kosten für eine systemische Beratung werden nicht von gesetzlichen Krankenkassen übernommen. Nach Absprache ist möglich, den Preis für die Beratung bei finanziellen Herausforderungen individuell zu vereinbaren. Bitte sprechen Sie mich an!
                </div>
            </div>
        </Section>
        <Section>
            <div className="flex flex-col w-full lg:justify-center py-8 text-gray-900">
                <h3 className="mt-2 text-base">Gerne kläre ich mit Ihnen in einem unverbindlichen Vorgespräch, was für Ihr Anliegen das passende Vorgehen sein kann.</h3>
                <ContactForm></ContactForm>
            </div>
        </Section>
        </>
    )
}