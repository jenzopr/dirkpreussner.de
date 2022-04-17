import ContactForm from "../components/contactform";
import Section from "../components/section";

export default function Beratung() {
    return(
        <>
        <Section className="bg-white">
            <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Beratung & Coaching
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-700 lg:mx-auto">
                        Jeder von uns bringt Ressourcen mit, um Herausforderungen innerhalb seiner bestehenden Systeme zu bearbeiten. Es gibt jedoch Situationen, in denen uns bekannte Lösungsversuche nicht zum gewünschten Erfolg führen. Das führt oft zu Verunsicherung oder Konflikten und bringt ein System aus dem Gleichgewicht. 
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-700 lg:mx-auto">
                        Wenn Sie für sich eine neue Perspektive auf den Umgang mit privaten oder beruflichen Belastungen finden möchten, wenn Sie sich in ihren Rollen abgrenzen oder stärken möchten oder wenn sie mehr Antworten als Fragen haben, kann Unterstützung von außen zur Perspektiverweiterung und zur Entwicklung von alternativen Lösungsmöglichkeiten hilfreich sein. 
                    </p>
                </div>
            </div>
        </Section>
        <Section>
                <div className="flex flex-col w-full lg:justify-center pb-8 lg:py-16">
                <h1 className="text-3xl py-4 text-center text-burgund-700">Call for Action</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
                <ContactForm></ContactForm>
            </div>
        </Section>
        </>
    )
}