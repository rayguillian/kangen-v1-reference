import { motion } from '../../lib/motion-mock';
import { AlertTriangle, ThumbsUp, Crop as Drop, FlaskRound as Flask, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export default function EducationalContent() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-blue-50/50 dark:to-blue-950/20">
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
              Uddannelse
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Forstå vandforbrug i Danmark
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Bliv informeret om de skjulte risici i dit drikkevand og hvordan Kangen's ioniseringsteknologi kan gøre en forskel for din sundhed.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="contaminants" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl">
              <TabsTrigger value="contaminants" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                <Drop className="h-4 w-4 mr-2" />
                Forureningsstoffer
              </TabsTrigger>
              <TabsTrigger value="health" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                <Heart className="h-4 w-4 mr-2" />
                Sundhedspåvirkninger
              </TabsTrigger>
              <TabsTrigger value="technology" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                <Flask className="h-4 w-4 mr-2" />
                Kangen Teknologi
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="contaminants">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      Pesticider
                    </CardTitle>
                    <CardDescription>Stigende problem i danske grundvandsboringer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img 
                        src="https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Pesticide spraying" 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <p className="text-sm text-muted-foreground">
                        Danmarks intensive landbrug har medført pesticidforurening i grundvandet. GEUS rapporterer at over 43% af vandprøver indeholder pesticider eller nedbrydningsprodukter.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium text-sm mb-2">Almindelige pesticider:</h4>
                        <ul className="text-xs space-y-1.5 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Desphenyl-chloridazon: Fundet i 25% af alle prøver</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>1,2,4-triazol: Nedbrydningsprodukt fra svampemidler</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>DMS: Detekteret i 1/3 af alle drikkevandsboringer</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                      </div>
                      Kalk og Tungmetaller
                    </CardTitle>
                    <CardDescription>Naturlige og industrielt relaterede stoffer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img 
                        src="https://images.pexels.com/photos/2707870/pexels-photo-2707870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Limescale buildup" 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <p className="text-sm text-muted-foreground">
                        Danmark har naturligt kalkholdigt vand, især i østlige regioner. Samtidig viser nye undersøgelser forekomst af tungmetaller fra ældre rørinstallationer og industriudledninger.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium text-sm mb-2">Almindelige forekomster:</h4>
                        <ul className="text-xs space-y-1.5 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Kalk (calcium): 200-300 mg/l i østdanske kommuner</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Bly og kobber: Fra ældre vandrør og installationer</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>PFAS: Stigende problem i industriområder</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                        <AlertTriangle className="h-5 w-5 text-blue-500" />
                      </div>
                      Mikroplast og Medicinrester
                    </CardTitle>
                    <CardDescription>Moderne forureningsproblemer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img 
                        src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Microplastics" 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <p className="text-sm text-muted-foreground">
                        Nyere forskning fra Aarhus Universitet har påvist mikroplast i grundvandet, og GEUS har dokumenteret medicinrester fra både human- og veterinærmedicin.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium text-sm mb-2">Nyeste opdagelser:</h4>
                        <ul className="text-xs space-y-1.5 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Mikroplast: Partikler fundet i 17% af vandprøver</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Medicinrester: Antibiotika, hormoner og smertestillende</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-xs mr-2 shrink-0">!</span>
                            <span>Ingen regulær testning for disse stoffer i Danmark</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="health">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mt-1 mr-4">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sundhedsrisici ved forurenet vand</h3>
                      <p className="text-muted-foreground">
                        Forskere fra Københavns Universitet og Rigshospitalet har dokumenteret sammenhænge mellem eksponering for vandforurening og sundhedsproblemer:
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-14">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Hormonforstyrrelser</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Pesticider og PFAS kan forstyrre hormonsystemet og påvirke fertilitet, stofskifte og udvikling.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Kronisk inflammation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Mikroplast og kemikalier kan fremkalde lavgradig inflammation i kroppen, hvilket er forbundet med mange kroniske sygdomme.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Tarmfloraforstyrrelser</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Klor, pesticider og mikroplast kan forstyrre tarmens mikrobielle balance og reducere immunfunktionen.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Øget kræftrisiko</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Langvarig eksponering for visse pesticider og PFAS er kædet sammen med øget risiko for visse kræftformer.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="pl-14">
                    <Card className="bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="bg-amber-200 dark:bg-amber-800/50 p-2 rounded-full mr-3 shrink-0">
                            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Særlig risiko for udsatte grupper</h4>
                            <p className="text-sm text-muted-foreground">
                              Børn, gravide, ældre og personer med kroniske sygdomme er særligt påvirkelige overfor forureningsstoffer i drikkevand, selv i små koncentrationer.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mt-1 mr-4">
                      <ThumbsUp className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fordelene ved rent, ioniseret vand</h3>
                      <p className="text-muted-foreground">
                        Kliniske studier fra skandinaviske og internationale forskningsinstitutioner peger på flere fordele ved at drikke rent, ioniseret vand:
                      </p>
                    </div>
                  </div>

                  <div className="pl-14 space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Forbedret hydreringsevne</h4>
                        <p className="text-sm text-muted-foreground">
                          Molekylært hydrogen i ioniseret vand optages hurtigere i cellerne og giver bedre hydrering.
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-600 dark:text-blue-400">2</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Antioxidantegenskaber</h4>
                        <p className="text-sm text-muted-foreground">
                          Ioniseret, alkalisk vand kan neutralisere frie radikaler og modvirke oxidativt stress i kroppen.
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-600 dark:text-blue-400">3</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">pH-balancering</h4>
                        <p className="text-sm text-muted-foreground">
                          Alkalisk vand kan hjælpe med at modvirke syre-ubalancer fra moderne kost og livsstil.
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-600 dark:text-blue-400">4</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Ingen skadelige kemikalier</h4>
                        <p className="text-sm text-muted-foreground">
                          Kangen fjerner pesticider, klor, tungmetaller og andre skadelige stoffer fra dit drikkevand.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pl-14 mt-4">
                    <Card className="bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800">
                      <CardContent className="p-4">
                        <blockquote className="italic text-sm mb-3">
                          "Vores studier viser, at regelmæssigt indtag af rent, ioniseret vand kan have en positiv indvirkning på kroppens væskebalance og generelt velvære."
                        </blockquote>
                        <div className="flex items-center">
                          <img 
                            src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Dr. Jensen" 
                            className="h-10 w-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <h4 className="text-sm font-medium">Dr. Mette Jensen</h4>
                            <p className="text-xs text-muted-foreground">Sundhedsforsker, Københavns Universitet</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="technology">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img 
                    src="https://images.pexels.com/photos/2480382/pexels-photo-2480382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Kangen Water Technology" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Patenteret Ioniseringsteknologi</h3>
                    <p className="text-sm">
                      Kangens elektriske vandseparationssystem bruger platinbelagte titaniumplader og avanceret elektrolyse til at skabe forskellige typer funktionelt vand.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <h3 className="text-2xl font-bold mb-6">Sådan fungerer Kangen-teknologien</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">1</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Avanceret filtrering</h4>
                      <p className="text-sm text-muted-foreground">
                        Vandet passerer først gennem et multi-lags filtreringssystem, der fjerner klor, pesticider, tungmetaller, mikroplast og andre skadelige stoffer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">2</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Elektrolyse</h4>
                      <p className="text-sm text-muted-foreground">
                        Det filtrerede vand går gennem en ioniseringskammer med patenterede titaniumplader belagt med platin, hvor elektrolyse adskiller vandet i alkalisk og sur fraktion.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">3</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">pH-justering</h4>
                      <p className="text-sm text-muted-foreground">
                        Systemet giver dig mulighed for at vælge mellem forskellige pH-niveauer (fra 2.5 til 11.5) til forskellige formål – fra drikkevand til madlavning og rengøring.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">4</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Molekylært hydrogen</h4>
                      <p className="text-sm text-muted-foreground">
                        Under elektrolysen tilføres molekylært hydrogen til det alkaliske vand, hvilket giver antioxidantegenskaber og øger vandets evne til at hydrate cellerne.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Flask className="h-5 w-5 mr-2 text-blue-500" />
                    Videnskabelig validering
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Elektrolyseret, ioniseret vand har været genstand for omfattende forskning ved internationale og skandinaviske universiteter, med lovende resultater for sundhedsmæssige fordele og effektiv fjernelse af forureningsstoffer.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">De 8 typer vand fra Kangen maskinen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-600 dark:text-blue-400">Stærkt Alkalisk Vand (pH 11.5)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Perfekt til at fjerne pesticider fra frugt og grønt, affedtning og rengøring uden kemikalier.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-600 dark:text-blue-400">Alkalisk Drikkevand (pH 8.5-9.5)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ideel til dagligt drikkevand, madlavning og kaffebryg. Neutraliserer syre og hydrerer effektivt.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50/30 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-600 dark:text-blue-400">Neutralt Vand (pH 7.0)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Rent vand uden klor og forurening, perfekt til medicinindtag og tilberedning af babymad.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-amber-600 dark:text-amber-400">Let Surt Vand (pH 5.5-6.5)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ansigts- og kropspleje, hårvask og pleje af kæledyr. Svarer til hudens naturlige pH.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}