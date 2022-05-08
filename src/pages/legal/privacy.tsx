/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { Link } from '@chakra-ui/react';

export default function Privacy() {
  return (
    <>
      <NextSeo title="Privacy Policy | Ben Siebert - Software Engineer & Student" />
      <Box marginInline={'2rem'} marginBottom={'2rem'}>
        <div>
          <Heading size="lg">Datenschutzerklärung</Heading>
          <p>
            Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
            Datenschutz hat einen besonders hohen Stellenwert für die
            Geschäftsleitung der Ben Siebert. Eine Nutzung der Internetseiten
            der Ben Siebert ist grundsätzlich ohne jede Angabe personenbezogener
            Daten möglich. Sofern eine betroffene Person besondere Services
            unseres Unternehmens über unsere Internetseite in Anspruch nehmen
            möchte, könnte jedoch eine Verarbeitung personenbezogener Daten
            erforderlich werden. Ist die Verarbeitung personenbezogener Daten
            erforderlich und besteht für eine solche Verarbeitung keine
            gesetzliche Grundlage, holen wir generell eine Einwilligung der
            betroffenen Person ein.
          </p>
          <p>
            Die Verarbeitung personenbezogener Daten, beispielsweise des Namens,
            der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen
            Person, erfolgt stets im Einklang mit der
            Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
            Ben Siebert geltenden landesspezifischen Datenschutzbestimmungen.
            Mittels dieser Datenschutzerklärung möchte unser Unternehmen die
            Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen,
            genutzten und verarbeiteten personenbezogenen Daten informieren.
            Ferner werden betroffene Personen mittels dieser
            Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
          </p>
          <p>
            Die Ben Siebert hat als für die Verarbeitung Verantwortlicher
            zahlreiche technische und organisatorische Maßnahmen umgesetzt, um
            einen möglichst lückenlosen Schutz der über diese Internetseite
            verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch
            können Internetbasierte Datenübertragungen grundsätzlich
            Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht
            gewährleistet werden kann. Aus diesem Grund steht es jeder
            betroffenen Person frei, personenbezogene Daten auch auf
            alternativen Wegen, beispielsweise telefonisch, an uns zu
            übermitteln.
          </p>
          <Heading size="md">1. Begriffsbestimmungen</Heading>
          <p>
            Die Datenschutzerklärung der Ben Siebert beruht auf den
            Begrifflichkeiten, die durch den Europäischen Richtlinien- und
            Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
            (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl
            für die Öffentlichkeit als auch für unsere Kunden und
            Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
            gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten
            erläutern.
          </p>
          <p>
            Wir verwenden in dieser Datenschutzerklärung unter anderem die
            folgenden Begriffe:
          </p>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Heading size="md">a) personenbezogene Daten</Heading>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person (im
                Folgenden „betroffene Person“) beziehen. Als identifizierbar
                wird eine natürliche Person angesehen, die direkt oder indirekt,
                insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck
                der physischen, physiologischen, genetischen, psychischen,
                wirtschaftlichen, kulturellen oder sozialen Identität dieser
                natürlichen Person sind, identifiziert werden kann.
              </p>
            </li>
            <li>
              <Heading size="md">b) betroffene Person</Heading>
              <p>
                Betroffene Person ist jede identifizierte oder identifizierbare
                natürliche Person, deren personenbezogene Daten von dem für die
                Verarbeitung Verantwortlichen verarbeitet werden.
              </p>
            </li>
            <li>
              <Heading size="md">c) Verarbeitung</Heading>
              <p>
                Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten wie das Erheben, das
                Erfassen, die Organisation, das Ordnen, die Speicherung, die
                Anpassung oder Veränderung, das Auslesen, das Abfragen, die
                Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder
                eine andere Form der Bereitstellung, den Abgleich oder die
                Verknüpfung, die Einschränkung, das Löschen oder die
                Vernichtung.
              </p>
            </li>
            <li>
              <Heading size="md">d) Einschränkung der Verarbeitung</Heading>
              <p>
                Einschränkung der Verarbeitung ist die Markierung gespeicherter
                personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
                einzuschränken.
              </p>
            </li>
            <li>
              <Heading size="md">e) Profiling</Heading>
              <p>
                Profiling ist jede Art der automatisierten Verarbeitung
                personenbezogener Daten, die darin besteht, dass diese
                personenbezogenen Daten verwendet werden, um bestimmte
                persönliche Aspekte, die sich auf eine natürliche Person
                beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher
                Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu
                analysieren oder vorherzusagen.
              </p>
            </li>
            <li>
              <Heading size="md">f) Pseudonymisierung</Heading>
              <p>
                Pseudonymisierung ist die Verarbeitung personenbezogener Daten
                in einer Weise, auf welche die personenbezogenen Daten ohne
                Hinzuziehung zusätzlicher Informationen nicht mehr einer
                spezifischen betroffenen Person zugeordnet werden können, sofern
                diese zusätzlichen Informationen gesondert aufbewahrt werden und
                technischen und organisatorischen Maßnahmen unterliegen, die
                gewährleisten, dass die personenbezogenen Daten nicht einer
                identifizierten oder identifizierbaren natürlichen Person
                zugewiesen werden.
              </p>
            </li>
            <li>
              <Heading size="md">
                g) Verantwortlicher oder für die Verarbeitung Verantwortlicher
              </Heading>
              <p>
                Verantwortlicher oder für die Verarbeitung Verantwortlicher ist
                die natürliche oder juristische Person, Behörde, Einrichtung
                oder andere Stelle, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet. Sind die Zwecke und Mittel dieser
                Verarbeitung durch das Unionsrecht oder das Recht der
                Mitgliedstaaten vorgegeben, so kann der Verantwortliche
                beziehungsweise können die bestimmten Kriterien seiner Benennung
                nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                vorgesehen werden.
              </p>
            </li>
            <li>
              <Heading size="md">h) Auftragsverarbeiter</Heading>
              <p>
                Auftragsverarbeiter ist eine natürliche oder juristische Person,
                Behörde, Einrichtung oder andere Stelle, die personenbezogene
                Daten im Auftrag des Verantwortlichen verarbeitet.
              </p>
            </li>
            <li>
              <Heading size="md">i) Empfänger</Heading>
              <p>
                Empfänger ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, der personenbezogene Daten
                offengelegt werden, unabhängig davon, ob es sich bei ihr um
                einen Dritten handelt oder nicht. Behörden, die im Rahmen eines
                bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem
                Recht der Mitgliedstaaten möglicherweise personenbezogene Daten
                erhalten, gelten jedoch nicht als Empfänger.
              </p>
            </li>
            <li>
              <Heading size="md">j) Dritter</Heading>
              <p>
                Dritter ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle außer der betroffenen Person, dem
                Verantwortlichen, dem Auftragsverarbeiter und den Personen, die
                unter der unmittelbaren Verantwortung des Verantwortlichen oder
                des Auftragsverarbeiters befugt sind, die personenbezogenen
                Daten zu verarbeiten.
              </p>
            </li>
            <li>
              <Heading size="md">k) Einwilligung</Heading>
              <p>
                Einwilligung ist jede von der betroffenen Person freiwillig für
                den bestimmten Fall in informierter Weise und unmissverständlich
                abgegebene Willensbekundung in Form einer Erklärung oder einer
                sonstigen eindeutigen bestätigenden Handlung, mit der die
                betroffene Person zu verstehen gibt, dass sie mit der
                Verarbeitung der sie betreffenden personenbezogenen Daten
                einverstanden ist.
              </p>
            </li>
          </ul>
          <Heading size="md">
            2. Name und Anschrift des für die Verarbeitung Verantwortlichen
          </Heading>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger
            in den Mitgliedstaaten der Europäischen Union geltenden
            Datenschutzgesetze und anderer Bestimmungen mit
            datenschutzrechtlichem Charakter ist die:
          </p>
          <p>Ben Siebert</p>
          <p>Im Mühlenwinkel 14</p>
          <p>45525 Hattingen</p>
          <p>Deutschland</p>
          <p>E-Mail: hello@ben-siebert.de</p>
          <p>Website: ben-siebert.de</p>
          <Heading size="md">3. Cookies</Heading>
          <p>
            Die Internetseiten der Ben Siebert verwenden Cookies. Cookies sind
            Textdateien, welche über einen Internetbrowser auf einem
            Computersystem abgelegt und gespeichert werden.
          </p>
          <p>
            Zahlreiche Internetseiten und Server verwenden Cookies. Viele
            Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine
            eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge,
            durch welche Internetseiten und Server dem konkreten Internetbrowser
            zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies
            ermöglicht es den besuchten Internetseiten und Servern, den
            individuellen Browser der betroffenen Person von anderen
            Internetbrowsern, die andere Cookies enthalten, zu unterscheiden.
            Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID
            wiedererkannt und identifiziert werden.
          </p>
          <p>
            Durch den Einsatz von Cookies kann die Ben Siebert den Nutzern
            dieser Internetseite nutzerfreundlichere Services bereitstellen, die
            ohne die Cookie-Setzung nicht möglich wären.
          </p>
          <p>
            Mittels eines Cookies können die Informationen und Angebote auf
            unserer Internetseite im Sinne des Benutzers optimiert werden.
            Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer
            Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es,
            den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der
            Benutzer einer Internetseite, die Cookies verwendet, muss
            beispielsweise nicht bei jedem Besuch der Internetseite erneut seine
            Zugangsdaten eingeben, weil dies von der Internetseite und dem auf
            dem Computersystem des Benutzers abgelegten Cookie übernommen wird.
            Ein weiteres Beispiel ist das Cookie eines Warenkorbes im
            Online-Shop. Der Online-Shop merkt sich die Artikel, die ein Kunde
            in den virtuellen Warenkorb gelegt hat, über ein Cookie.
          </p>
          <p>
            Die betroffene Person kann die Setzung von Cookies durch unsere
            Internetseite jederzeit mittels einer entsprechenden Einstellung des
            genutzten Internetbrowsers verhindern und damit der Setzung von
            Cookies dauerhaft widersprechen. Ferner können bereits gesetzte
            Cookies jederzeit über einen Internetbrowser oder andere
            Softwareprogramme gelöscht werden. Dies ist in allen gängigen
            Internetbrowsern möglich. Deaktiviert die betroffene Person die
            Setzung von Cookies in dem genutzten Internetbrowser, sind unter
            Umständen nicht alle Funktionen unserer Internetseite vollumfänglich
            nutzbar.
          </p>
          <Heading size="md">4. Erfassung von allgemeinen Daten und Informationen</Heading>
          <p>
            Die Internetseite der Ben Siebert erfasst mit jedem Aufruf der
            Internetseite durch eine betroffene Person oder ein automatisiertes
            System eine Reihe von allgemeinen Daten und Informationen. Diese
            allgemeinen Daten und Informationen werden in den Logfiles des
            Servers gespeichert. Erfasst werden können die (1) verwendeten
            Browsertypen und Versionen, (2) das vom zugreifenden System
            verwendete Betriebssystem, (3) die Internetseite, von welcher ein
            zugreifendes System auf unsere Internetseite gelangt (sogenannte
            Referrer), (4) die Unterwebseiten, welche über ein zugreifendes
            System auf unserer Internetseite angesteuert werden, (5) das Datum
            und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine
            Internet-Protokoll-Adresse (IP-Adresse), (7) der
            Internet-Service-Provider des zugreifenden Systems und (8) sonstige
            ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle
            von Angriffen auf unsere informationstechnologischen Systeme dienen.
          </p>
          <p>
            Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die
            Ben Siebert keine Rückschlüsse auf die betroffene Person. Diese
            Informationen werden vielmehr benötigt, um (1) die Inhalte unserer
            Internetseite korrekt auszuliefern, (2) die Inhalte unserer
            Internetseite sowie die Werbung für diese zu optimieren, (3) die
            dauerhafte Funktionsfähigkeit unserer informationstechnologischen
            Systeme und der Technik unserer Internetseite zu gewährleisten sowie
            (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die
            zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese
            anonym erhobenen Daten und Informationen werden durch die Ben
            Siebert daher einerseits statistisch und ferner mit dem Ziel
            ausgewertet, den Datenschutz und die Datensicherheit in unserem
            Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für
            die von uns verarbeiteten personenbezogenen Daten sicherzustellen.
            Die anonymen Daten der Server-Logfiles werden getrennt von allen
            durch eine betroffene Person angegebenen personenbezogenen Daten
            gespeichert.
          </p>
          <Heading size="md">5. Kommentarfunktion im Blog auf der Internetseite</Heading>
          <p>
            Die Ben Siebert bietet den Nutzern auf einem Blog, der sich auf der
            Internetseite des für die Verarbeitung Verantwortlichen befindet,
            die Möglichkeit, individuelle Kommentare zu einzelnen Blog-Beiträgen
            zu hinterlassen. Ein Blog ist ein auf einer Internetseite geführtes,
            in der Regel öffentlich einsehbares Portal, in welchem eine oder
            mehrere Personen, die Blogger oder Web-Blogger genannt werden,
            Artikel posten oder Gedanken in sogenannten Blogposts
            niederschreiben können. Die Blogposts können in der Regel von
            Dritten kommentiert werden.
          </p>
          <p>
            Hinterlässt eine betroffene Person einen Kommentar in dem auf dieser
            Internetseite veröffentlichten Blog, werden neben den von der
            betroffenen Person hinterlassenen Kommentaren auch Angaben zum
            Zeitpunkt der Kommentareingabe sowie zu dem von der betroffenen
            Person gewählten Nutzernamen (Pseudonym) gespeichert und
            veröffentlicht. Ferner wird die vom Internet-Service-Provider (ISP)
            der betroffenen Person vergebene IP-Adresse mitprotokolliert. Diese
            Speicherung der IP-Adresse erfolgt aus Sicherheitsgründen und für
            den Fall, dass die betroffene Person durch einen abgegebenen
            Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte
            postet. Die Speicherung dieser personenbezogenen Daten erfolgt daher
            im eigenen Interesse des für die Verarbeitung Verantwortlichen,
            damit sich dieser im Falle einer Rechtsverletzung gegebenenfalls
            exkulpieren könnte. Es erfolgt keine Weitergabe dieser erhobenen
            personenbezogenen Daten an Dritte, sofern eine solche Weitergabe
            nicht gesetzlich vorgeschrieben ist oder der Rechtsverteidigung des
            für die Verarbeitung Verantwortlichen dient.
          </p>
          <Heading size="md">
            6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
          </Heading>
          <p>
            Der für die Verarbeitung Verantwortliche verarbeitet und speichert
            personenbezogene Daten der betroffenen Person nur für den Zeitraum,
            der zur Erreichung des Speicherungszwecks erforderlich ist oder
            sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber
            oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften,
            welchen der für die Verarbeitung Verantwortliche unterliegt,
            vorgesehen wurde.
          </p>
          <p>
            Entfällt der Speicherungszweck oder läuft eine vom Europäischen
            Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
            Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
            personenbezogenen Daten routinemäßig und entsprechend den
            gesetzlichen Vorschriften gesperrt oder gelöscht.
          </p>
          <Heading size="md">7. Rechte der betroffenen Person</Heading>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Heading size="md">a) Recht auf Bestätigung</Heading>
              <p>
                Jede betroffene Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung
                Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
                betreffende personenbezogene Daten verarbeitet werden. Möchte
                eine betroffene Person dieses Bestätigungsrecht in Anspruch
                nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des
                für die Verarbeitung Verantwortlichen wenden.
              </p>
            </li>
            <li>
              <Heading size="md">b) Recht auf Auskunft</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, jederzeit von dem für die
                Verarbeitung Verantwortlichen unentgeltliche Auskunft über die
                zu seiner Person gespeicherten personenbezogenen Daten und eine
                Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische
                Richtlinien- und Verordnungsgeber der betroffenen Person
                Auskunft über folgende Informationen zugestanden:
              </p>
              <ul style={{ listStyle: 'none' }}>
                <li>die Verarbeitungszwecke</li>
                <li>
                  die Kategorien personenbezogener Daten, die verarbeitet werden
                </li>
                <li>
                  die Empfänger oder Kategorien von Empfängern, gegenüber denen
                  die personenbezogenen Daten offengelegt worden sind oder noch
                  offengelegt werden, insbesondere bei Empfängern in
                  Drittländern oder bei internationalen Organisationen
                </li>
                <li>
                  falls möglich die geplante Dauer, für die die
                  personenbezogenen Daten gespeichert werden, oder, falls dies
                  nicht möglich ist, die Kriterien für die Festlegung dieser
                  Dauer
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung der
                  sie betreffenden personenbezogenen Daten oder auf
                  Einschränkung der Verarbeitung durch den Verantwortlichen oder
                  eines Widerspruchsrechts gegen diese Verarbeitung
                </li>
                <li>
                  das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
                </li>
                <li>
                  wenn die personenbezogenen Daten nicht bei der betroffenen
                  Person erhoben werden: Alle verfügbaren Informationen über die
                  Herkunft der Daten
                </li>
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung
                  einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO
                  und — zumindest in diesen Fällen — aussagekräftige
                  Informationen über die involvierte Logik sowie die Tragweite
                  und die angestrebten Auswirkungen einer derartigen
                  Verarbeitung für die betroffene Person
                </li>
              </ul>
              <p>
                Ferner steht der betroffenen Person ein Auskunftsrecht darüber
                zu, ob personenbezogene Daten an ein Drittland oder an eine
                internationale Organisation übermittelt wurden. Sofern dies der
                Fall ist, so steht der betroffenen Person im Übrigen das Recht
                zu, Auskunft über die geeigneten Garantien im Zusammenhang mit
                der Übermittlung zu erhalten.
              </p>
              <p>
                Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch
                nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des
                für die Verarbeitung Verantwortlichen wenden.
              </p>
            </li>
            <li>
              <Heading size="md">c) Recht auf Berichtigung</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung
                sie betreffender unrichtiger personenbezogener Daten zu
                verlangen. Ferner steht der betroffenen Person das Recht zu,
                unter Berücksichtigung der Zwecke der Verarbeitung, die
                Vervollständigung unvollständiger personenbezogener Daten — auch
                mittels einer ergänzenden Erklärung — zu verlangen.
              </p>
              <p>
                Möchte eine betroffene Person dieses Berichtigungsrecht in
                Anspruch nehmen, kann sie sich hierzu jederzeit an einen
                Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
              </p>
            </li>
            <li>
              <Heading size="md">d) Recht auf Löschung (Recht auf Vergessen werden)</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu
                verlangen, dass die sie betreffenden personenbezogenen Daten
                unverzüglich gelöscht werden, sofern einer der folgenden Gründe
                zutrifft und soweit die Verarbeitung nicht erforderlich ist:
              </p>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  Die personenbezogenen Daten wurden für solche Zwecke erhoben
                  oder auf sonstige Weise verarbeitet, für welche sie nicht mehr
                  notwendig sind.
                </li>
                <li>
                  Die betroffene Person widerruft ihre Einwilligung, auf die
                  sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO
                  oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an
                  einer anderweitigen Rechtsgrundlage für die Verarbeitung.
                </li>
                <li>
                  Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO
                  Widerspruch gegen die Verarbeitung ein, und es liegen keine
                  vorrangigen berechtigten Gründe für die Verarbeitung vor, oder
                  die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
                  Widerspruch gegen die Verarbeitung ein.
                </li>
                <li>
                  Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                </li>
                <li>
                  Die Löschung der personenbezogenen Daten ist zur Erfüllung
                  einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem
                  Recht der Mitgliedstaaten erforderlich, dem der
                  Verantwortliche unterliegt.
                </li>
                <li>
                  Die personenbezogenen Daten wurden in Bezug auf angebotene
                  Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1
                  DS-GVO erhoben.
                </li>
              </ul>
              <p>
                Sofern einer der oben genannten Gründe zutrifft und eine
                betroffene Person die Löschung von personenbezogenen Daten, die
                bei der Ben Siebert gespeichert sind, veranlassen möchte, kann
                sie sich hierzu jederzeit an einen Mitarbeiter des für die
                Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Ben
                Siebert wird veranlassen, dass dem Löschverlangen unverzüglich
                nachgekommen wird.
              </p>
              <p>
                Wurden die personenbezogenen Daten von der Ben Siebert
                öffentlich gemacht und ist unser Unternehmen als
                Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der
                personenbezogenen Daten verpflichtet, so trifft die Ben Siebert
                unter Berücksichtigung der verfügbaren Technologie und der
                Implementierungskosten angemessene Maßnahmen, auch technischer
                Art, um andere für die Datenverarbeitung Verantwortliche, welche
                die veröffentlichten personenbezogenen Daten verarbeiten,
                darüber in Kenntnis zu setzen, dass die betroffene Person von
                diesen anderen für die Datenverarbeitung Verantwortlichen die
                Löschung sämtlicher Links zu diesen personenbezogenen Daten oder
                von Kopien oder Replikationen dieser personenbezogenen Daten
                verlangt hat, soweit die Verarbeitung nicht erforderlich ist.
                Der Mitarbeiter der Ben Siebert wird im Einzelfall das
                Notwendige veranlassen.
              </p>
            </li>
            <li>
              <Heading size="md">e) Recht auf Einschränkung der Verarbeitung</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, von dem Verantwortlichen die
                Einschränkung der Verarbeitung zu verlangen, wenn eine der
                folgenden Voraussetzungen gegeben ist:
              </p>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  Die Richtigkeit der personenbezogenen Daten wird von der
                  betroffenen Person bestritten, und zwar für eine Dauer, die es
                  dem Verantwortlichen ermöglicht, die Richtigkeit der
                  personenbezogenen Daten zu überprüfen.
                </li>
                <li>
                  Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt
                  die Löschung der personenbezogenen Daten ab und verlangt
                  stattdessen die Einschränkung der Nutzung der
                  personenbezogenen Daten.
                </li>
                <li>
                  Der Verantwortliche benötigt die personenbezogenen Daten für
                  die Zwecke der Verarbeitung nicht länger, die betroffene
                  Person benötigt sie jedoch zur Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen.
                </li>
                <li>
                  Die betroffene Person hat Widerspruch gegen die Verarbeitung
                  gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht
                  fest, ob die berechtigten Gründe des Verantwortlichen
                  gegenüber denen der betroffenen Person überwiegen.
                </li>
              </ul>
              <p>
                Sofern eine der oben genannten Voraussetzungen gegeben ist und
                eine betroffene Person die Einschränkung von personenbezogenen
                Daten, die bei der Ben Siebert gespeichert sind, verlangen
                möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des
                für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter
                der Ben Siebert wird die Einschränkung der Verarbeitung
                veranlassen.
              </p>
            </li>
            <li>
              <Heading size="md">f) Recht auf Datenübertragbarkeit</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, die sie betreffenden
                personenbezogenen Daten, welche durch die betroffene Person
                einem Verantwortlichen bereitgestellt wurden, in einem
                strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten. Sie hat außerdem das Recht, diese Daten einem anderen
                Verantwortlichen ohne Behinderung durch den Verantwortlichen,
                dem die personenbezogenen Daten bereitgestellt wurden, zu
                übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß
                Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a
                DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b
                DS-GVO beruht und die Verarbeitung mithilfe automatisierter
                Verfahren erfolgt, sofern die Verarbeitung nicht für die
                Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen
                Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                welche dem Verantwortlichen übertragen wurde.
              </p>
              <p>
                Ferner hat die betroffene Person bei der Ausübung ihres Rechts
                auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht,
                zu erwirken, dass die personenbezogenen Daten direkt von einem
                Verantwortlichen an einen anderen Verantwortlichen übermittelt
                werden, soweit dies technisch machbar ist und sofern hiervon
                nicht die Rechte und Freiheiten anderer Personen beeinträchtigt
                werden.
              </p>
              <p>
                Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich
                die betroffene Person jederzeit an einen Mitarbeiter der Ben
                Siebert wenden.
              </p>
            </li>
            <li>
              <Heading size="md">g) Recht auf Widerspruch</Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer
                besonderen Situation ergeben, jederzeit gegen die Verarbeitung
                sie betreffender personenbezogener Daten, die aufgrund von Art.
                6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch
                einzulegen. Dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling.
              </p>
              <p>
                Die Ben Siebert verarbeitet die personenbezogenen Daten im Falle
                des Widerspruchs nicht mehr, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen, die den
                Interessen, Rechten und Freiheiten der betroffenen Person
                überwiegen, oder die Verarbeitung dient der Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>
              <p>
                Verarbeitet die Ben Siebert personenbezogene Daten, um
                Direktwerbung zu betreiben, so hat die betroffene Person das
                Recht, jederzeit Widerspruch gegen die Verarbeitung der
                personenbezogenen Daten zum Zwecke derartiger Werbung
                einzulegen. Dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht. Widerspricht die
                betroffene Person gegenüber der Ben Siebert der Verarbeitung für
                Zwecke der Direktwerbung, so wird die Ben Siebert die
                personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
              </p>
              <p>
                Zudem hat die betroffene Person das Recht, aus Gründen, die sich
                aus ihrer besonderen Situation ergeben, gegen die sie
                betreffende Verarbeitung personenbezogener Daten, die bei der
                Ben Siebert zu wissenschaftlichen oder historischen
                Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89
                Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn,
                eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen
                Interesse liegenden Aufgabe erforderlich.
              </p>
              <p>
                Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene
                Person direkt an jeden Mitarbeiter der Ben Siebert oder einen
                anderen Mitarbeiter wenden. Der betroffenen Person steht es
                ferner frei, im Zusammenhang mit der Nutzung von Diensten der
                Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG,
                ihr Widerspruchsrecht mittels automatisierter Verfahren
                auszuüben, bei denen technische Spezifikationen verwendet
                werden.
              </p>
            </li>
            <li>
              <Heading size="md">
                h) Automatisierte Entscheidungen im Einzelfall einschließlich
                Profiling
              </Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf
                einer automatisierten Verarbeitung — einschließlich Profiling —
                beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber
                rechtliche Wirkung entfaltet oder sie in ähnlicher Weise
                erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für
                den Abschluss oder die Erfüllung eines Vertrags zwischen der
                betroffenen Person und dem Verantwortlichen erforderlich ist,
                oder (2) aufgrund von Rechtsvorschriften der Union oder der
                Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig
                ist und diese Rechtsvorschriften angemessene Maßnahmen zur
                Wahrung der Rechte und Freiheiten sowie der berechtigten
                Interessen der betroffenen Person enthalten oder (3) mit
                ausdrücklicher Einwilligung der betroffenen Person erfolgt.
              </p>
              <p>
                Ist die Entscheidung (1) für den Abschluss oder die Erfüllung
                eines Vertrags zwischen der betroffenen Person und dem
                Verantwortlichen erforderlich oder (2) erfolgt sie mit
                ausdrücklicher Einwilligung der betroffenen Person, trifft die
                Ben Siebert angemessene Maßnahmen, um die Rechte und Freiheiten
                sowie die berechtigten Interessen der betroffenen Person zu
                wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens
                einer Person seitens des Verantwortlichen, auf Darlegung des
                eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
              </p>
              <p>
                Möchte die betroffene Person Rechte mit Bezug auf automatisierte
                Entscheidungen geltend machen, kann sie sich hierzu jederzeit an
                einen Mitarbeiter des für die Verarbeitung Verantwortlichen
                wenden.
              </p>
            </li>
            <li>
              <Heading size="md">
                i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
              </Heading>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, eine Einwilligung zur
                Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
              </p>
              <p>
                Möchte die betroffene Person ihr Recht auf Widerruf einer
                Einwilligung geltend machen, kann sie sich hierzu jederzeit an
                einen Mitarbeiter des für die Verarbeitung Verantwortlichen
                wenden.
              </p>
            </li>
          </ul>
          <Heading size="md">
            8. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
            Analytics (mit Anonymisierungsfunktion)
          </Heading>
          <p>
            Der für die Verarbeitung Verantwortliche hat auf dieser
            Internetseite die Komponente Google Analytics (mit
            Anonymisierungsfunktion) integriert. Google Analytics ist ein
            Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und
            Auswertung von Daten über das Verhalten von Besuchern von
            Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten
            darüber, von welcher Internetseite eine betroffene Person auf eine
            Internetseite gekommen ist (sogenannte Referrer), auf welche
            Unterseiten der Internetseite zugegriffen oder wie oft und für
            welche Verweildauer eine Unterseite betrachtet wurde. Eine
            Web-Analyse wird überwiegend zur Optimierung einer Internetseite und
            zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.
          </p>
          <p>
            Betreibergesellschaft der Google-Analytics-Komponente ist die Google
            Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5,
            Ireland.
          </p>
          <p>
            Der für die Verarbeitung Verantwortliche verwendet für die
            Web-Analyse über Google Analytics den Zusatz &quot;_gat._anonymizeIp&quot;.
            Mittels dieses Zusatzes wird die IP-Adresse des Internetanschlusses
            der betroffenen Person von Google gekürzt und anonymisiert, wenn der
            Zugriff auf unsere Internetseiten aus einem Mitgliedstaat der
            Europäischen Union oder aus einem anderen Vertragsstaat des
            Abkommens über den Europäischen Wirtschaftsraum erfolgt.
          </p>
          <p>
            Der Zweck der Google-Analytics-Komponente ist die Analyse der
            Besucherströme auf unserer Internetseite. Google nutzt die
            gewonnenen Daten und Informationen unter anderem dazu, die Nutzung
            unserer Internetseite auszuwerten, um für uns Online-Reports, welche
            die Aktivitäten auf unseren Internetseiten aufzeigen,
            zusammenzustellen, und um weitere mit der Nutzung unserer
            Internetseite in Verbindung stehende Dienstleistungen zu erbringen.
          </p>
          <p>
            Google Analytics setzt ein Cookie auf dem
            informationstechnologischen System der betroffenen Person. Was
            Cookies sind, wurde oben bereits erläutert. Mit Setzung des Cookies
            wird Google eine Analyse der Benutzung unserer Internetseite
            ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser
            Internetseite, die durch den für die Verarbeitung Verantwortlichen
            betrieben wird und auf welcher eine Google-Analytics-Komponente
            integriert wurde, wird der Internetbrowser auf dem
            informationstechnologischen System der betroffenen Person
            automatisch durch die jeweilige Google-Analytics-Komponente
            veranlasst, Daten zum Zwecke der Online-Analyse an Google zu
            übermitteln. Im Rahmen dieses technischen Verfahrens erhält Google
            Kenntnis über personenbezogene Daten, wie der IP-Adresse der
            betroffenen Person, die Google unter anderem dazu dienen, die
            Herkunft der Besucher und Klicks nachzuvollziehen und in der Folge
            Provisionsabrechnungen zu ermöglichen.
          </p>
          <p>
            Mittels des Cookies werden personenbezogene Informationen,
            beispielsweise die Zugriffszeit, der Ort, von welchem ein Zugriff
            ausging und die Häufigkeit der Besuche unserer Internetseite durch
            die betroffene Person, gespeichert. Bei jedem Besuch unserer
            Internetseiten werden diese personenbezogenen Daten, einschließlich
            der IP-Adresse des von der betroffenen Person genutzten
            Internetanschlusses, an Google in den Vereinigten Staaten von
            Amerika übertragen. Diese personenbezogenen Daten werden durch
            Google in den Vereinigten Staaten von Amerika gespeichert. Google
            gibt diese über das technische Verfahren erhobenen personenbezogenen
            Daten unter Umständen an Dritte weiter.
          </p>
          <p>
            Die betroffene Person kann die Setzung von Cookies durch unsere
            Internetseite, wie oben bereits dargestellt, jederzeit mittels einer
            entsprechenden Einstellung des genutzten Internetbrowsers verhindern
            und damit der Setzung von Cookies dauerhaft widersprechen. Eine
            solche Einstellung des genutzten Internetbrowsers würde auch
            verhindern, dass Google ein Cookie auf dem
            informationstechnologischen System der betroffenen Person setzt.
            Zudem kann ein von Google Analytics bereits gesetzter Cookie
            jederzeit über den Internetbrowser oder andere Softwareprogramme
            gelöscht werden.
          </p>
          <p>
            Ferner besteht für die betroffene Person die Möglichkeit, einer
            Erfassung der durch Google Analytics erzeugten, auf eine Nutzung
            dieser Internetseite bezogenen Daten sowie der Verarbeitung dieser
            Daten durch Google zu widersprechen und eine solche zu verhindern.
            Hierzu muss die betroffene Person ein Browser-Add-On unter dem Link
            https://tools.google.com/dlpage/gaoptout herunterladen und
            installieren. Dieses Browser-Add-On teilt Google Analytics über
            JavaScript mit, dass keine Daten und Informationen zu den Besuchen
            von Internetseiten an Google Analytics übermittelt werden dürfen.
            Die Installation des Browser-Add-Ons wird von Google als Widerspruch
            gewertet. Wird das informationstechnologische System der betroffenen
            Person zu einem späteren Zeitpunkt gelöscht, formatiert oder neu
            installiert, muss durch die betroffene Person eine erneute
            Installation des Browser-Add-Ons erfolgen, um Google Analytics zu
            deaktivieren. Sofern das Browser-Add-On durch die betroffene Person
            oder einer anderen Person, die ihrem Machtbereich zuzurechnen ist,
            deinstalliert oder deaktiviert wird, besteht die Möglichkeit der
            Neuinstallation oder der erneuten Aktivierung des Browser-Add-Ons.
          </p>
          <p>
            Weitere Informationen und die geltenden Datenschutzbestimmungen von
            Google können unter https://www.google.de/intl/de/policies/privacy/
            und unter http://www.google.com/analytics/terms/de.html abgerufen
            werden. Google Analytics wird unter diesem Link
            https://www.google.com/intl/de_de/analytics/ genauer erläutert.
          </p>
          <Heading size="md">
            9. Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram
          </Heading>
          <p>
            Der für die Verarbeitung Verantwortliche hat auf dieser
            Internetseite Komponenten des Dienstes Instagram integriert.
            Instagram ist ein Dienst, der als audiovisuelle Plattform zu
            qualifizieren ist und den Nutzern das Teilen von Fotos und Videos
            und zudem eine Weiterverbreitung solcher Daten in anderen sozialen
            Netzwerken ermöglicht.
          </p>
          <p>
            Betreibergesellschaft der Dienste von Instagram ist die Facebook
            Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
            Ireland.
          </p>
          <p>
            Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die
            durch den für die Verarbeitung Verantwortlichen betrieben wird und
            auf welcher eine Instagram-Komponente (Insta-Button) integriert
            wurde, wird der Internetbrowser auf dem informationstechnologischen
            System der betroffenen Person automatisch durch die jeweilige
            Instagram-Komponente veranlasst, eine Darstellung der entsprechenden
            Komponente von Instagram herunterzuladen. Im Rahmen dieses
            technischen Verfahrens erhält Instagram Kenntnis darüber, welche
            konkrete Unterseite unserer Internetseite durch die betroffene
            Person besucht wird.
          </p>
          <p>
            Sofern die betroffene Person gleichzeitig bei Instagram eingeloggt
            ist, erkennt Instagram mit jedem Aufruf unserer Internetseite durch
            die betroffene Person und während der gesamten Dauer des jeweiligen
            Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite
            die betroffene Person besucht. Diese Informationen werden durch die
            Instagram-Komponente gesammelt und durch Instagram dem jeweiligen
            Instagram-Account der betroffenen Person zugeordnet. Betätigt die
            betroffene Person einen der auf unserer Internetseite integrierten
            Instagram-Buttons, werden die damit übertragenen Daten und
            Informationen dem persönlichen Instagram-Benutzerkonto der
            betroffenen Person zugeordnet und von Instagram gespeichert und
            verarbeitet.
          </p>
          <p>
            Instagram erhält über die Instagram-Komponente immer dann eine
            Information darüber, dass die betroffene Person unsere Internetseite
            besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs
            unserer Internetseite gleichzeitig bei Instagram eingeloggt ist;
            dies findet unabhängig davon statt, ob die betroffene Person die
            Instagram-Komponente anklickt oder nicht. Ist eine derartige
            Übermittlung dieser Informationen an Instagram von der betroffenen
            Person nicht gewollt, kann diese die Übermittlung dadurch
            verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus
            ihrem Instagram-Account ausloggt.
          </p>
          <p>
            Weitere Informationen und die geltenden Datenschutzbestimmungen von
            Instagram können unter https://help.instagram.com/155833707900388
            und https://www.instagram.com/about/legal/privacy/ abgerufen werden.
          </p>
          <Heading size="md">
            10. Datenschutzbestimmungen zu Einsatz und Verwendung von Twitter
          </Heading>
          <p>
            Der für die Verarbeitung Verantwortliche hat auf dieser
            Internetseite Komponenten von Twitter integriert. Twitter ist ein
            multilingualer öffentlich zugänglicher Mikroblogging-Dienst, auf
            welchem die Nutzer sogenannte Tweets, also Kurznachrichten, die auf
            280 Zeichen begrenzt sind, veröffentlichen und verbreiten können.
            Diese Kurznachrichten sind für jedermann, also auch für nicht bei
            Twitter angemeldete Personen abrufbar. Die Tweets werden aber auch
            den sogenannten Followern des jeweiligen Nutzers angezeigt. Follower
            sind andere Twitter-Nutzer, die den Tweets eines Nutzers folgen.
            Ferner ermöglicht Twitter über Hashtags, Verlinkungen oder Retweets
            die Ansprache eines breiten Publikums.
          </p>
          <p>
            Betreibergesellschaft von Twitter International Company, One
            Cumberland Place, Fenian Street Dublin 2, D02 AX07, Ireland.
          </p>
          <p>
            Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die
            durch den für die Verarbeitung Verantwortlichen betrieben wird und
            auf welcher eine Twitter-Komponente (Twitter-Button) integriert
            wurde, wird der Internetbrowser auf dem informationstechnologischen
            System der betroffenen Person automatisch durch die jeweilige
            Twitter-Komponente veranlasst, eine Darstellung der entsprechenden
            Twitter-Komponente von Twitter herunterzuladen. Weitere
            Informationen zu den Twitter-Buttons sind unter
            https://about.twitter.com/de/resources/buttons abrufbar. Im Rahmen
            dieses technischen Verfahrens erhält Twitter Kenntnis darüber,
            welche konkrete Unterseite unserer Internetseite durch die
            betroffene Person besucht wird. Zweck der Integration der
            Twitter-Komponente ist es, unseren Nutzern eine Weiterverbreitung
            der Inhalte diese Internetseite zu ermöglichen, diese Internetseite
            in der digitalen Welt bekannt zu machen und unsere Besucherzahlen zu
            erhöhen.
          </p>
          <p>
            Sofern die betroffene Person gleichzeitig bei Twitter eingeloggt
            ist, erkennt Twitter mit jedem Aufruf unserer Internetseite durch
            die betroffene Person und während der gesamten Dauer des jeweiligen
            Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite
            unserer Internetseite die betroffene Person besucht. Diese
            Informationen werden durch die Twitter-Komponente gesammelt und
            durch Twitter dem jeweiligen Twitter-Account der betroffenen Person
            zugeordnet. Betätigt die betroffene Person einen der auf unserer
            Internetseite integrierten Twitter-Buttons, werden die damit
            übertragenen Daten und Informationen dem persönlichen
            Twitter-Benutzerkonto der betroffenen Person zugeordnet und von
            Twitter gespeichert und verarbeitet.
          </p>
          <p>
            Twitter erhält über die Twitter-Komponente immer dann eine
            Information darüber, dass die betroffene Person unsere Internetseite
            besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs
            unserer Internetseite gleichzeitig bei Twitter eingeloggt ist; dies
            findet unabhängig davon statt, ob die betroffene Person die
            Twitter-Komponente anklickt oder nicht. Ist eine derartige
            Übermittlung dieser Informationen an Twitter von der betroffenen
            Person nicht gewollt, kann diese die Übermittlung dadurch
            verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus
            ihrem Twitter-Account ausloggt.
          </p>
          <p>
            Die geltenden Datenschutzbestimmungen von Twitter sind unter
            https://twitter.com/privacy?lang=de abrufbar.
          </p>
          <Heading size="md">
            11. Datenschutzbestimmungen zu Einsatz und Verwendung von YouTube
          </Heading>
          <p>
            Der für die Verarbeitung Verantwortliche hat auf dieser
            Internetseite Komponenten von YouTube integriert. YouTube ist ein
            Internet-Videoportal, dass Video-Publishern das kostenlose
            Einstellen von Videoclips und anderen Nutzern die ebenfalls
            kostenfreie Betrachtung, Bewertung und Kommentierung dieser
            ermöglicht. YouTube gestattet die Publikation aller Arten von
            Videos, weshalb sowohl komplette Film- und Fernsehsendungen, aber
            auch Musikvideos, Trailer oder von Nutzern selbst angefertigte
            Videos über das Internetportal abrufbar sind.
          </p>
          <p>
            Betreibergesellschaft von YouTube ist die Google Ireland Limited,
            Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.
          </p>
          <p>
            Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die
            durch den für die Verarbeitung Verantwortlichen betrieben wird und
            auf welcher eine YouTube-Komponente (YouTube-Video) integriert
            wurde, wird der Internetbrowser auf dem informationstechnologischen
            System der betroffenen Person automatisch durch die jeweilige
            YouTube-Komponente veranlasst, eine Darstellung der entsprechenden
            YouTube-Komponente von YouTube herunterzuladen. Weitere
            Informationen zu YouTube können unter
            https://www.youtube.com/yt/about/de/ abgerufen werden. Im Rahmen
            dieses technischen Verfahrens erhalten YouTube und Google Kenntnis
            darüber, welche konkrete Unterseite unserer Internetseite durch die
            betroffene Person besucht wird.
          </p>
          <p>
            Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt
            ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein
            YouTube-Video enthält, welche konkrete Unterseite unserer
            Internetseite die betroffene Person besucht. Diese Informationen
            werden durch YouTube und Google gesammelt und dem jeweiligen
            YouTube-Account der betroffenen Person zugeordnet.
          </p>
          <p>
            YouTube und Google erhalten über die YouTube-Komponente immer dann
            eine Information darüber, dass die betroffene Person unsere
            Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt
            des Aufrufs unserer Internetseite gleichzeitig bei YouTube
            eingeloggt ist; dies findet unabhängig davon statt, ob die
            betroffene Person ein YouTube-Video anklickt oder nicht. Ist eine
            derartige Übermittlung dieser Informationen an YouTube und Google
            von der betroffenen Person nicht gewollt, kann diese die
            Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
            unserer Internetseite aus ihrem YouTube-Account ausloggt.
          </p>
          <p>
            Die von YouTube veröffentlichten Datenschutzbestimmungen, die unter
            https://www.google.de/intl/de/policies/privacy/ abrufbar sind, geben
            Aufschluss über die Erhebung, Verarbeitung und Nutzung
            personenbezogener Daten durch YouTube und Google.
          </p>
          <Heading size="md">12. Rechtsgrundlage der Verarbeitung</Heading>
          <p>
            Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage
            für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen
            bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung
            personenbezogener Daten zur Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, erforderlich, wie dies
            beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine
            Lieferung von Waren oder die Erbringung einer sonstigen Leistung
            oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf
            Art. 6 I lit. b DS-GVO. Gleiches gilt für solche
            Verarbeitungsvorgänge die zur Durchführung vorvertraglicher
            Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren
            Produkten oder Leistungen. Unterliegt unser Unternehmen einer
            rechtlichen Verpflichtung durch welche eine Verarbeitung von
            personenbezogenen Daten erforderlich wird, wie beispielsweise zur
            Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf
            Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung
            von personenbezogenen Daten erforderlich werden, um lebenswichtige
            Interessen der betroffenen Person oder einer anderen natürlichen
            Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein
            Besucher in unserem Betrieb verletzt werden würde und daraufhin sein
            Name, sein Alter, seine Krankenkassendaten oder sonstige
            lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder
            sonstige Dritte weitergegeben werden müssten. Dann würde die
            Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten
            Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser
            Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der
            vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung
            zur Wahrung eines berechtigten Interesses unseres Unternehmens oder
            eines Dritten erforderlich ist, sofern die Interessen, Grundrechte
            und Grundfreiheiten des Betroffenen nicht überwiegen. Solche
            Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil
            sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er
            vertrat insoweit die Auffassung, dass ein berechtigtes Interesse
            anzunehmen sein könnte, wenn die betroffene Person ein Kunde des
            Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
          </p>
          <Heading size="md">
            13. Berechtigte Interessen an der Verarbeitung, die von dem
            Verantwortlichen oder einem Dritten verfolgt werden
          </Heading>
          <p>
            Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I
            lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung
            unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer
            Mitarbeiter und unserer Anteilseigner.
          </p>
          <Heading size="md">
            14. Dauer, für die die personenbezogenen Daten gespeichert werden
          </Heading>
          <p>
            Das Kriterium für die Dauer der Speicherung von personenbezogenen
            Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf
            der Frist werden die entsprechenden Daten routinemäßig gelöscht,
            sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung
            erforderlich sind.
          </p>
          <Heading size="md">
            15. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung
            der personenbezogenen Daten; Erforderlichkeit für den
            Vertragsabschluss; Verpflichtung der betroffenen Person, die
            personenbezogenen Daten bereitzustellen; mögliche Folgen der
            Nichtbereitstellung
          </Heading>
          <p>
            Wir klären Sie darüber auf, dass die Bereitstellung
            personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B.
            Steuervorschriften) oder sich auch aus vertraglichen Regelungen
            (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu
            einem Vertragsschluss erforderlich sein, dass eine betroffene Person
            uns personenbezogene Daten zur Verfügung stellt, die in der Folge
            durch uns verarbeitet werden müssen. Die betroffene Person ist
            beispielsweise verpflichtet uns personenbezogene Daten
            bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag
            abschließt. Eine Nichtbereitstellung der personenbezogenen Daten
            hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht
            geschlossen werden könnte. Vor einer Bereitstellung
            personenbezogener Daten durch den Betroffenen muss sich der
            Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter
            klärt den Betroffenen einzelfallbezogen darüber auf, ob die
            Bereitstellung der personenbezogenen Daten gesetzlich oder
            vertraglich vorgeschrieben oder für den Vertragsabschluss
            erforderlich ist, ob eine Verpflichtung besteht, die
            personenbezogenen Daten bereitzustellen, und welche Folgen die
            Nichtbereitstellung der personenbezogenen Daten hätte.
          </p>
          <Heading size="md">16. Bestehen einer automatisierten Entscheidungsfindung</Heading>
          <p>
            Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
            automatische Entscheidungsfindung oder ein Profiling.
          </p>
          <p>
            Diese Datenschutzerklärung wurde durch den
            Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für
            Datenschutz GmbH, die als&nbsp;
            <Link href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/" color="blue.300">
              Externer Datenschutzbeauftragter Augsburg
            </Link>&nbsp;
            tätig ist, in Kooperation mit dem&nbsp;
            <Link href="https://www.wbs-law.de/it-recht/datenschutzrecht/" color="blue.300">
              Kölner IT- und Datenschutz Anwalt Christian Solmecke
            </Link>&nbsp;
            erstellt.
          </p>
        </div>
      </Box>
    </>
  );
}
