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
                        Es gibt Situationen, in denen die eigenen Antworten nicht mehr reichen – beruflich oder privat. Wenn Konflikte sich wiederholen, Rollen unklar werden oder eine Lebensphase Orientierung fordert, kann ein Blick von außen helfen.
                    </p>
                    <p className="mt-4 max-w-3xl text-lg text-gray-700 lg:mx-auto">
                        In der systemischen Einzel- und Familienberatung begleite ich Sie dabei, Ihre Situation neu zu verstehen, eigene Muster zu erkennen und konkrete Veränderungen auszuprobieren. Nicht mit fertigen Lösungen – sondern im Dialog mit Ihnen.
                    </p>
                    <p className="mt-4 text-lg max-w-3xl text-gray-700 lg:mx-auto">
                        Dabei schauen wir gemeinsam, welche Muster Ihre Situation prägen und was sich verändern könnte. Ihr Umfeld – ob Familie, Partnerschaft oder Arbeit – spielt dabei immer eine Rolle.
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
                    Im Erstgespräch lernen wir uns kennen und schauen gemeinsam auf Ihr Anliegen. Wir klären, was Sie sich von der Beratung erhoffen und wie eine Zusammenarbeit aussehen könnte – wie oft wir uns treffen und in welchem Rahmen.
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
                                <p className="ml-14 text-lg leading-6 font-serif font-medium text-gray-900">Einzelberatung</p>
                            </dt>
                            <dd className="mt-2 ml-14 text-base text-gray-700">
                                <p className="">
                                    160€ / 60 Minuten und 240€ / 90 Minuten.
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
                                <p className="ml-14 text-lg leading-6 font-serif font-medium text-gray-900">Mehrpersonenberatung</p>
                            </dt>
                            <dd className="mt-2 ml-14 text-base text-gray-700">
                                180€ / 60 Minuten und 270€ / 90 Minuten.
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-4 text-small text-gray-900">
                     Die Kosten werden nicht von gesetzlichen Krankenkassen übernommen. Wenn Sie Fragen zur Finanzierung haben oder eine individuelle Vereinbarung treffen möchten, sprechen Sie mich gerne an.
                </div>
            </div>
        </Section>
        <Section>
            <div className="flex flex-col w-full lg:justify-center py-8 text-gray-900">
                <h1 className="text-3xl pb-4 text-center text-burgund-700">Lassen Sie uns ins Gespräch kommen.</h1>
                <p className="mt-2 text-base">Schreiben Sie mir kurz, was Sie bewegt. In einem ersten, unverbindlichen Gespräch finden wir gemeinsam heraus, was der nächste sinnvolle Schritt für Sie sein kann.</p>
                <ContactForm></ContactForm>
            </div>
        </Section>
        </>
    )
}