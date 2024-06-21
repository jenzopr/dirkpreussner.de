import Meta from "../components/meta";
import Section from "../components/section";
import Link from 'next/link';

export default function Impressum() {
    return(
        <>
            <Meta></Meta>
            <Section className="bg-white">
                <div className="flex flex-col max-w-3xl pb-8 xl lg:py-16 text-gray-900 text-sm">
                    <h1 className="text-burgund-600 text-3xl">Impressum</h1>
                    <h2 className="text-xl mt-2 mb-1">Diensteanbieter</h2>
                        <p className="">Dirk Preußner</p>
                        <p className="">c/o Praxis Trenkwalder</p>
                        <p className="">Burnitzstr. 2</p>
                        <p className="">60596 Frankfurt am Main</p>
                    <h2 className="text-xl mt-2 mb-1">Kontaktmöglichkeiten</h2>
                        <p>E-Mail-Adresse: hallo@dirkpreussner.de</p>
                        <p className="mt-2">Kontaktformular auf der <Link href="/"><a className="underline text-burgund-600">Startseite</a></Link></p>
                    <h2 className="text-xl mt-2 mb-1">Bildnachweise</h2>
                        <p className="">Bildquellen und Urheberrechtshinweise:</p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li>Kopfgrafik <Link href="/"><a className="underline text-burgund-600">Startseite</a></Link>: Dominik Bingel</li>
                            <li>Stock-Fotos <Link href="/workshops-moderation"><a className="underline text-burgund-600">Workshops</a></Link>: pixabay, unsplash, Dirk Preußner</li>
                        </ul>
                    <span className="mt-2 text-xs">
                        Erstellt mit dem kostenlosen <Link href="https://datenschutz-generator.de/"><a target="_blank">Datenschutz-Generator von Dr. Thomas Schenke</a></Link>. Vom Websiteinhaber angepasst. 
                    </span>
                </div>
            </Section>
        </>
    )
}