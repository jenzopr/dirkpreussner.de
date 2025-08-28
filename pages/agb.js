import Meta from "../components/meta";
import Section from "../components/section";
import Link from 'next/link';

export default function AGB() {
    return(
        <>
            <Meta></Meta>
            <Section className="bg-white">
                <div className="flex flex-col max-w-3xl pb-8 xl lg:py-16 text-gray-900 text-sm">
                    <h1 className="text-burgund-600 text-3xl">Allgemeine Geschäftsbedingungen</h1>
                    <span className="text-xs font-semibold">
                        Stand: 1. Januar 2025
                    </span>
                    <p className="mt-2">
                        Die folgenden allgemeinen Geschäftsbedingungen gelten für einen Vertrag über Supervision bzw. Coaching. Sie werden Auftraggeber*innen vor bzw. spätestens mit dem Vertragsangebot des Supervisors bzw. Coachs ausgehändigt oder zur Kenntnis gebracht und gelten als Bestandteil des Vertrages.
                    </p>
                    <h2 className="text-xl mt-2 mb-1">§ 1 Ablauf eines Supervisions- bzw. Coachingprozesses</h2>
                        <h3 className="font-semibold mt-2 mb-1">Themenfelder und Zielsetzungen</h3>
                        <p>Zum Beginn eines Supervisions- bzw. Coachingprozesses werden die relevanten Themenfelder und potenzielle Zielsetzungen für den geplanten Beratungsprozess erhoben und ggf. weiter konkretisiert. In die Erhebung der Themenfelder und Zielsetzungen werden die Supervisand*innen bzw. Coachees und ggf. Vertreter*innen der Organisation, in der der Beratungsprozess stattfindet, einbezogen (z.B. Auftraggeber*innen, Leitungspersonen, Budgetverantwortliche, Verantwortliche für Personalentwicklung). Sollten die im Verlauf des Prozesses zur Beratung anstehenden Themenfelder von den vereinbarten Themenfeldern abweichen, so entscheidet der Supervisor bzw. Coach in Abstimmung mit den Supervisand*innen bzw. Coachees, ob diese Modifikation im Rahmen der geschlossenen Vereinbarung bearbeitet werden kann oder ob eine Neuabstimmung der Themenfelder mit den anderen Kontraktpartnern notwendig ist. Gleiches gilt für eine ggf. notwendige Modifikation der vereinbarten Zielsetzungen.</p>
                        <h3 className="font-semibold mt-2 mb-1">Auswertungen</h3>
                        <p>In regelmäßigen Abständen, mindestens jedoch einmal pro Jahr und vor Abschluss des Beratungszeitraumes, findet eine Zwischen- bzw. Abschlussauswertung des Supervisions- bzw. Coachingprozesses statt, die der Supervisor bzw. Coach gestaltet und, wenn vereinbart, dokumentiert.</p>
                    <h2 className="text-xl mt-2 mb-1">§ 2 Haltung und Qualität</h2>
                        <h3 className="font-semibold mt-2 mb-1">Mitgliedschaft in einem Fach- und Berufsverband</h3>
                        <p>Als Mitglied im Fach- und Berufsverband der „Deutschen Gesellschaft für Supervision und Coaching e.V.“ (DGSv) und der „Deutschen Gesellschaft für Systemische Therapie, Beratung und Familientherapie (DGSF) ist der Auftragnehmer Teil eines Qualitätsverbundes und verpflichtet sich damit auf die Einhaltung der ethischen Leitlinien und der Mitgliederordnung der DGSv (siehe hierzu www.dgsv.de) sowie auf die Einhaltung der Ethik-Richtlinien der DGSF (siehe hierzu www.dgsf.org). Dies trägt zur Sicherung und Entwicklung der Qualität der angebotenen Beratungsleistungen bei.</p>
                        <h3 className="font-semibold mt-2 mb-1">Qualitätssicherung und -entwicklung</h3>
                        <p>Zur stetigen Sicherung und Weiterentwicklung der Qualität der Arbeit nutzt der Supervisor bzw. Coach regelmäßig geeignete Maßnahmen aus dem Qualitätsmanagement der DGSv sowie kollegiale Beratung, Intervision, Balintgruppenarbeit, Kontrollsupervision oder andere Maßnahmen zur Reflexion und Evaluation der eigenen Beratungsarbeit.</p>
                        <h3 className="font-semibold mt-2 mb-1">Ombudsstelle</h3>
                        <p>
                            Im Falle von Differenzen und Beschwerden steht dem*der Auftraggeber*in die unabhängige Ombudsstelle der DGSv zur Verfügung. Beschwerden können direkt an die Ombudsstelle zur weiteren Bearbeitung gemeldet werden (siehe hierzu www.dgsv.de).</p>
                        <p>
                            Weiterhin steht dem*der Auftraggeber*in die unabhängige Konfliktstelle der DGSF zur Verfügung. Beschwerden können direkt an die Konfliktstelle zur weiteren Bearbeitung gemeldet werden (siehe hierzu www.dgsf.org).
                        </p>
                    <h2 className="text-xl mt-2 mb-1">§ 3 Abrechnungsmodalitäten, Stornierungen, Ausfallkosten</h2>
                        <h3 className="font-semibold mt-2 mb-1">Absagen von einzelnen Sitzungen</h3>
                        <p>
                            Wird eine Supervisions- bzw. Coachingssitzung oder ein Auswertungsgespräch von Seiten der Supervisand*innen bzw. Coachees oder seitens ihrer Organisation abgesagt, so wird das Sitzungshonorar (ohne Fahrtkosten) wie folgt in Rechnung gestellt:
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li>
                                <span className="font-normal">bis zu einem Monat vor Sitzungstermin: keine Berechnung von Ausfallhonorar</span>
                            </li>
                            <li>
                                <span className="font-normal">bis zu 96 Stunden vor Sitzungstermin: 50 % des Honorars als Ausfallhonorar</span>
                            </li>
                            <li>
                                <span className="font-normal">weniger als 96 Stunden vor Sitzungstermin: 100 % des Honorars als Ausfallhonorar</span>
                            </li>
                        </ul>
                        <p className="mt-2">
                            Der Nachweis eines geringeren Schadens bleibt dem Klienten oder dem Auftraggeber vorbehalten. Sollte eine Sitzung auf Wunsch der Supervisand*innen bzw. Coachees oder seitens ihrer Organisation verkürzt werden, wird gleichwohl das vereinbarte Honorar für die vereinbarte Zeit fällig. Sollte der Supervisor bzw. Coach eine Sitzung absagen müssen, wird er die Supervisand*innen bzw. Coachees oder deren Organisation umgehend darüber in Kenntnis setzen. Eine Honorarberechnung erfolgt in diesem Falle nicht.
                        </p>
                        <h3 className="font-semibold mt-2 mb-1">Umsatzsteuer</h3>
                        <p>
                            Honorare des Auftragnehmers sowie Nebenkosten sind in der Regel umsatzsteuerpflichtig, derzeit mit 19%. Im Jahr 2025 gilt für den Auftragnehmer die Umsatzsteuerbefreiung nach § 19 UstG. Macht der*die Auftraggeber*in einen Tatbestand zur Befreiung von der Umsatzsteuer nach § 4 UStG geltend, so weist er dem Auftragnehmer bei Abschluss des Vertrages den Befreiungsgrund in geeigneter Weise nach. Sollte eine Bescheinigung über eine Umsatzsteuerbefreiung vom*von der Auftraggeber*in nicht vorgelegt werden oder stellt sich die Bescheinigung des*der Auftraggebers*in im Nachhinein als unzureichend heraus, so wird die Umsatzsteuer von dem Auftragnehmer – auch rückwirkend – in Rechnung gestellt und an das Finanzamt abgeführt. 
                        </p>
                    <h2 className="text-xl mt-2 mb-1">§ 4 Vereinbarung zur Verschwiegenheit</h2>
                        <p>
                            Grundsätzlich verpflichtet sich der Supervisor bzw. Coach zur Verschwiegenheit in allen persönlichen und organisatorischen Belangen, von denen sie oder er im Laufe seiner Tätigkeit Kenntnis erhält. Diese Verpflichtung zur Verschwiegenheit gilt auch über das Auftragsende hinaus. Supervisor* innen und Coaches gehören nicht zu den Berufsgruppen, die einer besonderen gesetzlichen Verschwiegenheit nach § 203 StGB unterliegen.
                        </p>
                        <p className="mt-2">
                            Der Supervisor bzw. Coach behält sich zur Qualitätssicherung nach §2–3 vor, sich selbst unter Wahrung der Vertraulichkeit und mit Hilfe geeigneter Anonymisierung beraten zu lassen bzw. Erfahrungen und Erkenntnisse aus seiner Arbeit für den jeweiligen Auftraggeber unter Wahrung der Vertraulichkeit und mit Hilfe geeigneter Anonymisierung für seine professionellen Zwecke zu verwenden. Es wird gewährleistet, dass in der Beratung kein Rückschluss auf den Supervisionsprozess gezogen werden kann.
                        </p>
                        <p className="mt-2">
                            Grundsätzlich wird sich der Supervisor oder Coach organisationsintern nach dem Grundsatz verhalten, dass Vertraulichkeit bezüglich persönlicher Themen der Supervisand*innen bzw. Coachees zu wahren ist. In strukturellen und organisatorischen Themen kann hingegen, i.d.R. durch die Supervisand/innen bzw. Coachees selbst, Transparenz hergestellt werden.
                        </p>
                        <p className="mt-2">
                            Im Innenverhältnis kann der Supervisor bzw. Coach eine Rückmeldung zu Inhalten und Prozess im Kontext von Zwischen- und Abschlussauswertung an Auftraggebende, Leitungspersonen, Budgetverantwortliche, für Personalentwicklung Verantwortliche oder andere grundsätzlich Berechtigte nur insoweit weitergegeben, als dieses im Vertrag transparent vereinbart war.
                        </p>
                        <p className="mt-2">
                            Die Supervisand*innen bzw. Coachees werden zu Beginn des Beratungsprozesses darauf hingewiesen, dass es notwendig ist, sollten sie je Informationen zu Inhalten oder zum Prozess einer Supervision oder eines Coachings organisationsintern weitergeben wollen, dieses Vorhaben vorab mit dem*der Supervisor*in /Coach und den anderen an der Beratung Teilnehmenden abzustimmen und deren Einverständnis einzuholen.
                        </p>
                        <p className="mt-2">
                            Erhält der Supervisor/Coach im Laufe des Supervisions- oder Coachingprozesses Kenntnis über Ereignisse mit strafrechtlicher (z. B. über Kindeswohlgefährdung, Gewalt in der Pflege o. ä.) oder arbeitsrechtlicher Relevanz, wird der Supervisor bzw. Coach mit den Supervisand*innen bzw. Coachees besprechen und vereinbaren, auf welche Weise und von wem die zuständigen Organisationsvertreter* innen zeitnah informiert werden.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">§ 5 Datenschutz, DSGVO, Einwilligung</h2>
                        <p>
                            Mit Unterzeichnung des Vertrages willigen alle Vertragspartner*innen im Sinne der DSGVO ein, dass Aufzeichnungen zu den Beratungsprozessen von dem Supervisor bzw. Coach erstellt, verarbeitet und gespeichert werden können.
                        </p>
                        <p className="mt-2">
                            Der Supervisor bzw. Coach legt (elektronische) Akten an. Er*sie stellt sicher, dass die Regelwerke der DSGVO und des Datenschutzes eingehalten werden. Die Aufbewahrung der Unterlagen erfolgt für zehn Jahre.
                        </p>
                        <p className="mt-2">
                            Bei Abschluss und Durchführung des Beratungsvertrages werden persönliche Daten (z. B. Name, Anschrift, E-Mail, Adresse, Telefonnummer, Vertragsdaten, Bankverbindung) durch den Supervisor* in bzw. Coach dokumentiert. Mit Abschluss des Vertrages willigt der*die Auftraggeber*in ein, dass diese Datenverarbeitung vorgenommen werden kann (gemäß Art. 6 Abs. 1 Satz 1 lit. a, EU DSGVO).
                        </p>
                        <p className="mt-2">
                            Der Supervisor wird die Supervisand*innen bzw. Coachees zum Beginn des Beratungsprozesses darüber informieren, dass die Datenverarbeitung stattfindet und durch den Vertrag eine Einwilligung ausgesprochen wurde. Eine zusätzliche schriftliche Einwilligung durch die Supervisand*innen bzw. Coachees ist damit nicht mehr erforderlich (BeckOK zu Art. 7 DSGVO, RN86).
                        </p>
                        <p className="mt-2">
                            Die Einwilligungserklärung kann jederzeit mit Wirkung für die Zukunft ganz oder teilweise widerrufen werden, ohne dass dadurch Nachteile für den*die Auftraggeber*in eintreten. Ein Widerruf kann per E-Mail erfolgen. Sofern der Auftragnehmer Aufzeichnungen über die Beratung erstellt, die er für die Beratung benötigt, ist ein Widerruf der Einwilligungserklärung ein Grund zur fristlosen Kündigung eines Beratungsvertrags.
                        </p>
                    <h2 className="text-xl mt-2 mb-1">§ 6 Steuern, Sozialabgaben, Haftung</h2>
                        <p>
                            Die Vertragspartner sind sich einig, dass durch den Supervisionsvertrag kein Arbeits- oder Dienstverhältnis begründet wird. Der Auftragnehmer sichert zu, dass er nicht scheinselbständig ist.
                        </p>
                        <p className="mt-2">
                            Der Auftragnehmer sichert zu, dass er seine aus einem Auftrag erwirtschafteten Umsätze korrekt versteuert und ggf. fällige Abgaben zur Sozialversicherung vornimmt.
                        </p>
                        <p className="mt-2">
                            Der Auftragnehmer haftet nur
                        </p>
                        <ul className="mt-2 pl-8 list-disc">
                            <li>im Falle von vorsätzlicher oder fahrlässiger Pflichtverletzung bei Ansprüchen aus der Verletzung von Leben und Gesundheit.</li>
                            <li>im Falle von Vorsatz und Fahrlässigkeit bei der Verletzung von wesentlichen Vertragspflichten.</li>
                            <li>im Falle von Vorsatz und grober Fahrlässigkeit für die Verletzung von vertraglichen Nebenpflichten.</li>
                        </ul>
                        <p className="mt-2">
                            Der Auftragnehmer hat zur Absicherung seiner Tätigkeit eine berufliche Haftpflichtversicherung mit einer Deckungssumme von €3.000.000 bei der Continentale Versicherungsgesellschaft abgeschlossen.
                        </p>
                </div>
            </Section>
        </>
    )
}