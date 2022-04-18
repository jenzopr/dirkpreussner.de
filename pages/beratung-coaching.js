import Meta from "../components/meta";
import ContactForm from "../components/contactform";
import Section from "../components/section";

export default function Beratung() {
    return(
        <>
        <Meta title="Dirk Preußner - Beratung & Coaching"></Meta>
        <Section className="bg-white">
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
                    <h3 className="my-8 text-xl font-medium text-burgund-700">Ich biete Ihnen bei persönlichen Herausforderungen und Problemsituationen Unterstützung an.</h3>
                    <p className="text-lg max-w-3xl text-gray-700 lg:mx-auto">
                        Dabei begleite ich Sie, eine Bewältigungsstrategie für Ihre aktuelle Krise zu finden und Ihre eigenen Denk- und Handlungsmuster besser zu verstehen. Ich möchte Sie einladen, Ihre Ressourcen neu zu entdecken Ihre Handlungsmöglichkeiten zu erweitern.
                    </p>
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