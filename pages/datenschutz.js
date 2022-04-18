import Meta from "../components/meta";
import Section from "../components/section";
import Link from 'next/link';

export default function Datenschutz() {
    return(
        <>
            <Meta></Meta>
            <Section className="bg-white">
                <div className="flex flex-col max-w-3xl pb-8 xl lg:py-16 text-gray-900 text-sm">
                    <h1 className="text-burgund-600 text-3xl">Datenschutzerklärung</h1>
                    <span className="text-xs font-semibold">
                        Stand: 18. April 2022
                    </span>
                    <h2 className="text-xl mt-2 mb-1">Einleitung</h2>
                    <p>
                        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als &quot;Onlineangebot&quot;).
                        Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                    </p>
                    <h2 className="text-xl mt-2 mb-1">Verantwortlicher</h2>
                        <p>Dirk Preußner</p>
                        <p>Nibelungenallee 55</p>
                        <p>60318 Frankfurt am Main</p>
                        <p className="mt-2">E-Mail-Adresse: hallo@dirkpreussner.de</p>
                    <h2 className="text-xl mt-2 mb-1">Übersicht der Verarbeitungen</h2>
                        <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                    <h3 className="font-semibold mt-2 mb-1">Arten der verarbeiteten Daten</h3>
                        <div className="grid grid-cols-2">
                            <ul className="pl-8 list-disc">
                                <li>Bestandsdaten</li>
                                <li>Kontaktdaten</li>
                                <li>Inhaltsdaten</li>
                            </ul>
                            <ul className="pl-8 list-disc">
                                <li>Nutzungsdaten</li>
                                <li>Meta-/Kommunikationsdaten</li>
                            </ul>
                        </div>
                    <h3 className="font-semibold mt-2 mb-1">Kategorien betroffener Personen</h3>
                        <ul className="pl-8 list-disc">
                            <li>Kommunikationspartner</li>
                            <li>Nutzer</li>
                        </ul>
                    <h3 className="font-semibold mt-2 mb-1">Zwecke der Verarbeitung</h3>
                        <ul className="pl-8 list-disc">
                            <li>Erbringung vertraglicher Leistungen und Kundenservice</li>
                            <li>Kontaktanfragen und Kommunikation</li>
                            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                        </ul>
                    <h2 className="text-xl mt-2 mb-1">Maßgebliche Rechtsgrundlagen</h2>
                        <p>
                            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li>
                                <span className="font-semibold">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</span> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
                            </li>
                            <li>
                                <span className="font-semibold">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)</span> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
                            </li>
                            <li>
                                <span className="font-semibold">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</span> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">Sicherheitsmaßnahmen</h2>
                        <p>
                            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                        </p>
                        <p className="mt-2">
                            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
                        </p>
                        <p className="mt-2">
                            SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">Löschung von Daten</h2>
                        <p>
                            Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
                        </p>
                        <p className="mt-2">
                            Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
                        </p>
                        <p className="mt-2">
                            Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">Bereitstellung des Onlineangebots und Webhosting</h2>
                        <p>
                            Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.
                        </p>
                        <p className="mt-2">
                            Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li><span className="font-semibold">Verarbeitete Datenarten:</span> Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li><span className="font-semibold">Betroffene Personen:</span> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                            <li><span className="font-semibold">Zwecke der Verarbeitung:</span> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                            <li><span className="font-semibold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul>
                        <h3 className="font-semibold mt-2 mb-1">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>
                        <ul className="pl-8 list-disc">
                            <li>
                                <span className="font-semibold">Erhebung von Zugriffsdaten und Logfiles:</span> Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                            </li>
                            <li>
                                <span className="font-semibold">Content-Delivery-Network:</span> Wir setzen ein &quot;Content-Delivery-Network&quot; (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer ausgeliefert werden können.
                            </li>
                        </ul>
                    <h2 className="text-xl mt-2 mb-1">Kontakt- und Anfragenverwaltung</h2>
                        <p>
                            Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                        </p>
                        <p className="mt-2">
                            Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw. Geschäftsbeziehungen.
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li><span className="font-semibold">Verarbeitete Datenarten:</span> Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li>
                            <li><span className="font-semibold">Betroffene Personen:</span> Kommunikationspartner.</li>
                            <li><span className="font-semibold">Zwecke der Verarbeitung:</span> Kontaktanfragen und Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.</li>
                            <li><span className="font-semibold">Rechtsgrundlagen:</span> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).</li>
                        </ul>
                        <h3 className="font-semibold mt-2 mb-1">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>
                        <ul className="pl-8 list-disc">
                            <li>
                                <span className="font-semibold">Kontaktformular:</span> Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher und vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung erforderlich ist und im Übrigen auf Grundlage unserer berechtigten Interessen sowie der Interessen der Kommunikationspartner an der Beantwortung der Anliegen und unserer gesetzlichen Aufbewahrungspflichten.
                            </li>
                        </ul>
                    <h2 className="text-xl mt-2 mb-1">Änderung und aktualisierung der Datenschutzerklärung</h2>
                        <p>
                            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
                        </p>
                        <p className="mt-2">
                            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">Rechte der betroffenen Personen</h2>
                        <p>
                            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                        </p>
                        <ul className="pl-8 list-disc">
                            <li>
                                <span className="font-semibold">Widerspruchsrecht:</span> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                            </li>
                            <li>
                                <span className="font-semibold">Widerrufsrecht bei Einwilligungen:</span> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
                            </li>
                            <li>
                                <span className="font-semibold">Auskunftsrecht:</span> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                            </li>
                            <li>
                                <span className="font-semibold">Recht auf Berichtigung:</span> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                            </li>
                            <li>
                                <span className="font-semibold">Recht auf Löschung und Einschränkung der Verarbeitung:</span> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
                            </li>
                            <li>
                                <span className="font-semibold">Recht auf Datenübertragbarkeit:</span> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                            </li>
                            <li>
                                <span className="font-semibold">Beschwerde bei Aufsichtsbehörde:</span> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                            </li>
                        </ul>
                    <h2 className="text-xl mt-2 mb-1">Begriffsdefinitionen</h2>
                        <p>
                            In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li>
                                <span className="font-semibold">Personenbezogene Daten:</span> &quot;Personenbezogene Daten&quot; sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden &quot;betroffene Person&quot;) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
                            </li>
                            <li>
                                <span className="font-semibold">Verantwortlicher:</span> Als &quot;Verantwortlicher&quot; wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
                            </li>
                            <li>
                                <span className="font-semibold">Verarbeitung:</span> &quot;Verarbeitung&quot; ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
                            </li>
                        </ul>
                    <span className="mt-2 text-xs">
                        Erstellt mit dem kostenlosen <Link href="https://datenschutz-generator.de/"><a target="_blank">Datenschutz-Generator von Dr. Thomas Schenke</a></Link>. Vom Websiteinhaber angepasst. 
                    </span>
                </div>
            </Section>
        </>
    )
}