import { motion } from '../../lib/motion-mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-blue-50/50 dark:bg-blue-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Få svar på de mest almindelige spørgsmål om Kangen-vandmaskiner og teknologien bag.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="general" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl md:grid-cols-4">
              <TabsTrigger value="general" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                Generelt
              </TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                Teknisk
              </TabsTrigger>
              <TabsTrigger value="installation" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                Installation
              </TabsTrigger>
              <TabsTrigger value="health" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                Sundhed
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="general">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hvad er Kangen Water?</AccordionTrigger>
                  <AccordionContent>
                    Kangen Water er ioniseret, alkalisk vand produceret af en Kangen-vandmaskine. Maskinen bruger elektrolyse til at adskille almindeligt postevand i alkalisk vand (med højere pH-værdi) og surt vand (med lavere pH-værdi). Det alkaliske vand bruges primært til at drikke og er rig på mineraler og antioxidanter, mens det sure vand har andre anvendelsesmuligheder såsom rengøring og hudpleje.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Hvad er fordelene ved Kangen Water?</AccordionTrigger>
                  <AccordionContent>
                    <p>Kangen Water tilbyder adskillige fordele:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Fjerner effektivt skadelige stoffer fra dit drikkevand (pesticider, tungmetaller, klor, mikroplast)</li>
                      <li>Det alkaliske vand neutraliserer syre i kroppen og hjælper med at opretholde en sund pH-balance</li>
                      <li>Ioniseringsprocessen skaber mindre vandmolekyler, som optages lettere af kroppen og giver bedre hydrering</li>
                      <li>Indeholder antioxidanter i form af molekylært hydrogen, der kan hjælpe med at bekæmpe frie radikaler</li>
                      <li>Forskellige typer vand til forskellige formål (drikke, madlavning, rengøring, hudpleje)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Hvor mange typer vand kan Kangen-maskinen producere?</AccordionTrigger>
                  <AccordionContent>
                    Afhængigt af modellen kan en Kangen-vandmaskine producere 4-8 forskellige typer vand med varierende pH-værdier:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Stærkt alkalisk vand (pH 11.5): Til rengøring, fjernelse af pesticidrester fra fødevarer</li>
                      <li>Alkalisk drikkevand (pH 8.5-9.5): Til almindelig indtagelse, madlavning, kaffebrygning</li>
                      <li>Neutralt vand (pH 7.0): Til medicinindtag, babymad</li>
                      <li>Let surt vand (pH 5.5-6.5): Til hudpleje, hårpleje</li>
                      <li>Stærkt surt vand (pH 2.5): Til desinfektion, rengøring</li>
                    </ul>
                    Topmodellerne som K8 tilbyder flere varianter og finere justeringsmuligheder.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Hvordan adskiller Kangen sig fra almindelige vandfiltre?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-maskiner adskiller sig fra almindelige vandfiltre på flere måder:
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>De kombinerer filtrering med elektrolyse - så vandet ikke bare filtreres, men også ioniseres</li>
                      <li>De kan producere vand med forskellige pH-værdier til forskellige formål</li>
                      <li>De tilfører vandet molekylært hydrogen, som har antioxidative egenskaber</li>
                      <li>De giver vandet en mindre molekylær struktur, som er lettere for kroppen at optage</li>
                      <li>De kan justere mineralindholdet i vandet, hvor mange filtre blot fjerner urenheder</li>
                    </ol>
                    Almindelige filtre fjerner typisk kun urenheder, mens Kangen-maskiner transformerer vandets egenskaber.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Hvad koster det at bruge en Kangen-maskine i det daglige?</AccordionTrigger>
                  <AccordionContent>
                    De løbende driftsomkostninger for en Kangen-maskine er minimale. Primært skal du regne med:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Elektricitet: Ca. 10-15 kr. pr. måned ved almindelig brug</li>
                      <li>Filterudskiftning: Ca. 600-800 kr. pr. filter, som typisk holder 6-12 måneder afhængigt af vandkvalitet og forbrug</li>
                      <li>Vedligeholdelse: Maskinen har et selvrensende program, men en årlig afkalkning anbefales (kalkfilter koster ca. 200 kr.)</li>
                    </ul>
                    Sammenlignet med køb af flaskevand eller brug af filterkander, hvor filtre skal udskiftes ofte, er Kangen typisk en økonomisk løsning på længere sigt.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="technical">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hvordan fungerer elektrolyse i Kangen-maskinen?</AccordionTrigger>
                  <AccordionContent>
                    Elektrolyse i Kangen-maskinen fungerer ved at lede elektrisk strøm gennem vand via titaniumplader belagt med platin. Når strømmen passerer gennem vandet, sker der en separation:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Ved den negative elektrode (katode) dannes alkalisk vand, som indeholder mere hydrogen og flere negativt ladede ioner (hydroksider)</li>
                      <li>Ved den positive elektrode (anode) dannes surt vand, som indeholder mere oxygen og flere positivt ladede ioner (H+)</li>
                    </ul>
                    En membran i maskinen adskiller de to vandtyper. Antallet af plader og deres overfladeareal påvirker effektiviteten af elektrolysen - derfor har de dyrere modeller flere og større plader.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Hvor effektivt fjerner Kangen-maskinen forurening fra vandet?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-maskiner anvender et multi-trins filtreringssystem før elektrolysen, som er meget effektivt til at fjerne mange typer forurening:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Klor: 99-100% fjernelse</li>
                      <li>Pesticider og herbicider: 95-99,9% fjernelse (afhængig af type)</li>
                      <li>Tungmetaller (bly, kviksølv, cadmium): 90-99% fjernelse</li>
                      <li>Mikroplast: Over 99% fjernelse</li>
                      <li>Bakterier og patogener: 99,99% fjernelse</li>
                      <li>Kalk/mineraler: Kan justeres, men typisk beholdes de gavnlige mineraler</li>
                    </ul>
                    Uafhængige laboratorietests har dokumenteret disse resultater. Det er dog vigtigt at notere, at filtret skal udskiftes regelmæssigt for at opretholde denne effektivitet.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Hvor længe holder en Kangen-maskine?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-vandmaskiner er kendt for deres holdbarhed og lange levetid:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Den gennemsnitlige levetid er 15-20 år ved korrekt vedligeholdelse</li>
                      <li>Mange maskiner fra de tidlige 2000'ere fungerer stadig perfekt</li>
                      <li>De patenterede selvrensningsmekansimer og de høje materialevalg bidrager til den lange levetid</li>
                      <li>Titanium-elektroderne er ekstremt slidstærke</li>
                    </ul>
                    Faktorer, der kan påvirke levetiden, inkluderer vandkvalitet (meget hårdt vand kan reducere levetiden), brug (hyppig brug af stærkt sure/alkaliske indstillinger) og vedligeholdelse (regelmæssig afkalkning).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Hvor meget vand kan en Kangen-maskine producere?</AccordionTrigger>
                  <AccordionContent>
                    Produktionskapaciteten varierer afhængigt af modellen:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>JR IV+: Ca. 4-5 liter pr. minut</li>
                      <li>SD501: Ca. 7-8 liter pr. minut</li>
                      <li>K8: Op til 8-9 liter pr. minut</li>
                    </ul>
                    Dette er for almindeligt alkalisk drikkevand. Ved produktion af stærkt alkalisk eller stærkt surt vand er flowraten typisk lavere for at sikre den rette elektrolyseproces. Maskinerne kan køre kontinuerligt i op til 30-40 minutter, hvorefter de har brug for en kort pause for at undgå overophedning. Dette er rigeligt til at producere vand til en typisk families daglige behov.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Hvilke vedligeholdelseskrav har Kangen-maskinen?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-maskiner kræver minimal vedligeholdelse:
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Daglig automatisk selvrensning: Maskinen har et indbygget renseprogram, der kører automatisk efter brug</li>
                      <li>Filterudskiftning: Afhængigt af vandets kvalitet og forbrug anbefales udskiftning hver 6-12 måneder</li>
                      <li>Afkalkning: I områder med hårdt vand anbefales afkalkning hver 6. måned med Kangen's eget afkalkningsmiddel</li>
                      <li>Grundig rengøring: En årlig dybderensning anbefales, hvilket kan gøres hjemme eller ved vores servicetekniker</li>
                      <li>E-cleaning: Ved hjælp af specialudviklet E-cleaning pulver som renser elektrodepladerne (en gang årligt eller efter 100 timers brug)</li>
                    </ol>
                    Vores servicetekniker vil give en grundig demonstration af vedligeholdelsesprocedurerne ved installation, og de er også beskrevet i den danske brugermanual.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="installation">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hvordan installeres en Kangen-maskine?</AccordionTrigger>
                  <AccordionContent>
                    Installation af en Kangen-maskine er enkel og kræver minimal plads:
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Placering: Maskinen kan stå på køkkenbordet eller monteres under vasken med en specialholder</li>
                      <li>Tilslutning til vandhane: Maskinen tilsluttes via en adapter til din eksisterende vandhane eller via en separat hane (vi leverer adaptere til alle almindelige danske vandhanetyper)</li>
                      <li>Strømforsyning: Tilslut maskinen til en almindelig stikkontakt</li>
                      <li>Afløb: Der følger en afløbsslange med, som kan føres ned i vasken</li>
                    </ol>
                    Ved køb er professionel installation inkluderet i prisen. Vores tekniker sørger for alt det praktiske, demonstrerer maskinens brug og gennemgår vedligeholdelsesprocedurer. Installationen tager typisk 30-45 minutter og kræver ingen ændringer i din eksisterende VVS-installation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Kan jeg selv installere min Kangen-maskine?</AccordionTrigger>
                  <AccordionContent>
                    Ja, du kan selv installere din Kangen-maskine, selvom vi anbefaler professionel installation, som er inkluderet i prisen:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Maskinen leveres med en detaljeret installationsvejledning på dansk</li>
                      <li>Der medfølger diverse adaptere til de fleste danske vandhaner</li>
                      <li>Installationen kræver ingen specialværktøj</li>
                      <li>Der er adgang til instruktionsvideoer på vores hjemmeside</li>
                    </ul>
                    Hvis du vælger selv at installere, kan du altid kontakte vores kundeservice for telefonisk vejledning. Bemærk at selvinstallation ikke påvirker din garanti, så længe installationen er udført korrekt ifølge vejledningen.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Hvor meget plads kræver Kangen-maskinen?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-maskiner er designet til at passe ind i et almindeligt dansk køkken:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>JR IV+ (kompakt model): 22 cm (B) x 31 cm (H) x 14 cm (D)</li>
                      <li>SD501 (standard model): 28 cm (B) x 33 cm (H) x 15 cm (D)</li>
                      <li>K8 (topmodel): 32 cm (B) x 38 cm (H) x 16 cm (D)</li>
                    </ul>
                    Ud over selve maskinen skal der være plads til vandslangen, som er ca. 1-1,5 meter lang, og afløbsslangen. De fleste placerer maskinen direkte på køkkenbordet ved siden af vasken, men den kan også monteres under vasken med en separat vandhane, hvilket sparer bordplads. Ved underbordsmontage skal der påregnes plads til montagebeslaget.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Kan Kangen-maskinen installeres i alle typer køkkener?</AccordionTrigger>
                  <AccordionContent>
                    Kangen-vandmaskiner er designet til at kunne installeres i næsten alle typer køkkener:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Danske standardvandhaner: Vi leverer adaptere der passer til 95% af alle danske vandhaner</li>
                      <li>Specialhaner (f.eks. udtræksslange): Der findes specialløsninger til disse</li>
                      <li>Lejligheder/andelsboliger: Installationen kræver ingen permanente ændringer</li>
                      <li>Sommerhuse: Så længe der er standard vandtryk og strøm</li>
                    </ul>
                    I sjældne tilfælde med meget specielle hanetyper eller hvor pladsen er ekstremt begrænset, kan vores tekniker tilbyde alternative løsninger som f.eks. installation af en separat vandhane udelukkende til Kangen-maskinen. Dette kan medføre en mindre ekstraomkostning, men vil blive diskuteret og aftalt på forhånd.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Hvad gør jeg hvis min installation er usædvanlig?</AccordionTrigger>
                  <AccordionContent>
                    For usædvanlige installationssituationer tilbyder vi disse løsninger:
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Gratis forhåndskonsultation: Vores tekniker kan besøge dig (eller du kan sende billeder) for at vurdere dine specifikke forhold</li>
                      <li>Specialadaptere: Vi har adgang til et bredt udvalg af specialadaptere til unikke vandhanetyper</li>
                      <li>Separat vandhane: Vi kan installere en dedikeret hane til Kangen-vand (typisk en mindre ekstraomkostning)</li>
                      <li>Under-vask montering: Pladsbesparende løsning hvor kun en lille hane er synlig på bordpladen</li>
                      <li>Vandtilslutning direkte til vandforsyningen: Muligt hvis standard hanetilslutning ikke er praktisk</li>
                    </ol>
                    Vores erfarne teknikere har installeret Kangen-maskiner i alt fra små bylejligheder til store villaer og sommerhuse, så vi finder altid en løsning der virker for dig. Eventuelle ekstra materialer eller arbejde vil altid blive diskuteret og godkendt, før der påløber omkostninger.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="health">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hvilke sundhedsmæssige fordele har alkalisk vand?</AccordionTrigger>
                  <AccordionContent>
                    Alkalisk ioniseret vand er forbundet med flere potentielle sundhedsmæssige fordele, som er undersøgt i videnskabelige studier:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Forbedret hydrering: Mindre vandmolekyler optages lettere af cellerne</li>
                      <li>Antioxidant-effekt: Molekylært hydrogen kan neutralisere frie radikaler</li>
                      <li>Syre-base balance: Kan hjælpe med at modvirke overaciditet fra moderne kost</li>
                      <li>Fordøjelsessundhed: Mange brugere rapporterer forbedret fordøjelse</li>
                      <li>Energiniveau: Forbedret cellulær funktion kan øge energiniveauet</li>
                    </ul>
                    Det er vigtigt at bemærke, at selvom mange undersøgelser viser lovende resultater, er forskningen stadig igangværende. Kangen Water er ikke et medicinsk produkt og skal ikke erstatte lægeordineret behandling.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Er det sikkert for alle at drikke alkalisk vand?</AccordionTrigger>
                  <AccordionContent>
                    Alkalisk ioniseret vand er generelt sikkert for de fleste mennesker at drikke, men der er nogle overvejelser:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>For raske individer: Alkalisk vand med pH 8.5-9.5 anses for sikkert ved daglig indtagelse</li>
                      <li>Børn: Generelt sikkert, men start med lavere pH-værdier (8.0-8.5)</li>
                      <li>Ældre: Ofte nyder godt af forbedret hydrering, men bør starte gradvist</li>
                      <li>Personer med visse medicinske tilstande bør konsultere læge først, især ved:</li>
                      <ul className="list-disc pl-6 mt-1 text-muted-foreground">
                        <li>Nyresygdomme eller nedsat nyrefunktion</li>
                        <li>Personer der tager medicin, hvor pH kan påvirke optagelsen</li>
                        <li>Visse mavesygdomme, hvor mavesyreproduktionen allerede er kompromitteret</li>
                      </ul>
                    </ul>
                    Vi anbefaler altid at starte gradvist med at drikke alkalisk vand og give kroppen tid til at vænne sig til det. Ved medicinske bekymringer er det altid bedst at konsultere din læge.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Hvordan påvirker alkalisk vand kroppens pH-balance?</AccordionTrigger>
                  <AccordionContent>
                    Kroppens pH-balance er et komplekst system som alkalisk vand kan påvirke på flere måder:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Blodet: Kroppen regulerer nøje blodets pH omkring 7.4 og tillader meget små udsving</li>
                      <li>Fordøjelsessystemet: Alkalisk vand kan neutralisere overskydende syre i tarmen og maven efter måltider</li>
                      <li>Urin og sved: Disse er kroppens primære måder at udskille overskydende syre på, og alkalisk vand kan understøtte denne proces</li>
                      <li>Cellulært niveau: Ioniseret vand kan hjælpe med at fjerne ophobede affaldsstoffer fra cellerne</li>
                    </ul>
                    Moderne kost og livsstil (højt indhold af forarbejdede fødevarer, kød, sukker, stress) kan føre til øget syrebelastning. Mens kroppen er designet til at håndtere dette, kan alkalisk vand understøtte dens naturlige reguleringsmekanismer. Det er ikke et spørgsmål om at ændre blodets pH men om at lette kroppens arbejde med at opretholde optimal pH-balance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Hvor meget alkalisk vand bør jeg drikke dagligt?</AccordionTrigger>
                  <AccordionContent>
                    De optimale mængder af alkalisk vand varierer afhængigt af individuelle faktorer:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>For nybegyndere: Start med 1-2 glas dagligt og øg gradvist over 1-2 uger</li>
                      <li>Generel anbefaling for voksne: 1-1,5 liter dagligt (ca. 6-8 glas)</li>
                      <li>Ved aktiv livsstil/træning: Op til 2-3 liter dagligt</li>
                      <li>Tidspunkt: Bedst at drikke mellem måltider eller 30 minutter før måltider</li>
                    </ul>
                    For optimal hydrering anbefaler vi at drikke den første portion om morgenen på tom mave. Bemærk at disse anbefalinger er baseret på alkalisk vand med pH 8.5-9.5. Stærkere alkalisk vand (pH 10+) bør bruges med større forsigtighed og primært til madlavning eller særlige formål. Lyt til din krop og juster dit indtag efter behov.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Kan ioniseret vand hjælpe med vægttab eller forbedre huden?</AccordionTrigger>
                  <AccordionContent>
                    Mens Kangen Water ikke markedsføres som et vægttabs- eller skønhedsprodukt, rapporterer mange brugere positive effekter:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Vægthåndtering:</li>
                      <ul className="list-disc pl-6 mt-1 text-muted-foreground">
                        <li>Forbedret hydrering kan hjælpe med at reducere falsk sult</li>
                        <li>Bedre fordøjelse og stofskifte kan understøtte kroppens naturlige processer</li>
                        <li>Neutralisering af syreophobning kan optimere cellefunktion</li>
                      </ul>
                      <li>Hudsundhed:</li>
                      <ul className="list-disc pl-6 mt-1 text-muted-foreground">
                        <li>Let sur Kangen-vand (pH 5.5-6.0) til udvortes brug matcher hudens naturlige pH</li>
                        <li>Forbedret indre hydrering kan give en "indefra og ud" effekt på huden</li>
                        <li>Antioxidant-egenskaber kan modvirke hudens ældning</li>
                        <li>Mange brugere rapporterer forbedret hudtilstand ved eksem og psoriasis</li>
                      </ul>
                    </ul>
                    Disse virkninger varierer fra person til person. For de bedste resultater anbefaler vi at kombinere Kangen Water med sund kost og livsstil. Som ved alle sundhedsfremmende produkter, er konsistens nøglen til at opnå og fastholde resultater.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Har du stadig spørgsmål?</h3>
            <p className="text-muted-foreground mb-6">
              Vi er her for at hjælpe. Kontakt vores kundeservice, og vi besvarer alle dine spørgsmål om Kangen Water og vandkvalitet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button>
                Ring til os
              </Button>
              <Button variant="outline">
                Send en e-mail
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}