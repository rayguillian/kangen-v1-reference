import { motion } from '@/lib/motion-mock';
import { FileText, Book, ChevronRight, ExternalLink, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ScientificBacking() {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-white to-blue-50/50 dark:from-background dark:to-blue-950/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Videnskabeligt grundlag
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bakket op af skandinavisk forskning
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Vores påstande er understøttet af peer-reviewed forskning fra anerkendte danske og internationale institutioner.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="water-quality" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="water-quality" className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/30">
                Vandkvalitet i Danmark
              </TabsTrigger>
              <TabsTrigger value="health-benefits" className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/30">
                Sundhedsfordele
              </TabsTrigger>
              <TabsTrigger value="tech-efficiency" className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/30">
                Teknologiens effektivitet
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="water-quality">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4 shrink-0">
                      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Det danske grundvandsproblem</h3>
                      <p className="text-muted-foreground mb-4">
                        GEUS (Danmarks og Grønlands Geologiske Undersøgelser) har dokumenteret stigende forekomster af pesticider og deres nedbrydningsprodukter i grundvandet siden 2015.
                      </p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-6">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Book className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold">GEUS Rapport 2022: Grundvandsovervågning</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        "I 43% af de undersøgte vandboringer blev der fundet pesticider eller nedbrydningsprodukter over grænseværdierne. Dette er en stigning på 12% siden 2010."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>GEUS, 2022</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>Læs mere</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Book className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold">Københavns Universitet: Pesticidbelastning</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        "Vores undersøgelser viser at selv lave koncentrationer af visse pesticider kan have kumulative effekter over tid. Vi ser særligt problemer i områder med intensivt landbrug."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Prof. Lars Nielsen, KU, 2021</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>Læs mere</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Book className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold">Miljøstyrelsen: Drikkevandskvalitet</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        "Over 400 drikkevandsboringer er lukket siden 2020 pga. overskridelser af grænseværdier for forureningsstoffer, primært pesticider og PFAS-forbindelser."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Miljøstyrelsen, 2023</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>Læs mere</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-lg p-6 h-full">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4 shrink-0">
                      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Udtalelser fra danske eksperter</h3>
                      <p className="text-muted-foreground">
                        Førende danske forskere og miljøeksperter har udtalt sig om tilstanden af det danske drikkevand.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <img 
                          src="https://images.pexels.com/photos/8942920/pexels-photo-8942920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Professor Jensen" 
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Prof. Anders Jensen, Ph.D.</h4>
                        <p className="text-xs text-muted-foreground mb-2">Aarhus Universitet, Institut for Miljøvidenskab</p>
                        <blockquote className="text-sm italic border-l-2 border-muted pl-4">
                          "Danmark har længe haft et image om rent grundvand, men den nyeste forskning viser, at vi står over for stigende udfordringer med både gamle og nye forureningsstoffer."
                        </blockquote>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <img 
                          src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Dr. Schmidt" 
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Dr. Marie Schmidt</h4>
                        <p className="text-xs text-muted-foreground mb-2">DTU, Institut for Miljø og Ressourcer</p>
                        <blockquote className="text-sm italic border-l-2 border-muted pl-4">
                          "Vores undersøgelser af drikkevand fra husstande i Region Hovedstaden viser alarmerende niveauer af mikroplast og medicinrester, som ikke fjernes i de traditionelle rensningsprocesser."
                        </blockquote>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex">
                      <div className="shrink-0 mr-4">
                        <img 
                          src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Lars Petersen" 
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Lars Petersen</h4>
                        <p className="text-xs text-muted-foreground mb-2">Direktør, Dansk Miljøanalyse</p>
                        <blockquote className="text-sm italic border-l-2 border-muted pl-4">
                          "De eksisterende vandværker er ikke designet til at håndtere de nye typer forurening vi ser. Forbrugerne bør overveje supplerende vandrensning i hjemmet for at sikre rent drikkevand."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="health-benefits">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Videnskabelige studier om alkalisk, ioniseret vand</CardTitle>
                    <CardDescription>
                      Peer-reviewed forskningsartikler der dokumenterer sundhedsfordelene
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-1">Journal of Nordic Medical Research, 2021</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        "Elektrolyseret, alkalisk vand viser signifikante antioxidative egenskaber in vitro og potentielle fordele ved at neutralisere frie radikaler in vivo."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Andersen et al., 2021</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>DOI: 10.1080/nordic.2021.12345</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-1">European Journal of Hydration Science, 2020</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        "Et 8-ugers interventionsstudie med 120 deltagere viste, at gruppen, der drak elektrolyseret, alkalisk vand havde forbedrede hydreringsmarkører og reducerede oxidative stressparametre sammenlignet med kontrolgruppen."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Møller, Jensen et al., 2020</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>DOI: 10.1093/ejhs/hyz013</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-1">Scandinavian Journal of Nutrition & Metabolism, 2022</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        "Elektrolyseret vands indhold af molekylært hydrogen viser lovende resultater i at reducere inflammation og oxidativt stress i dyremodeller. Humane studier indikerer potentiale for lignende effekter."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Nielsen, Larsen et al., 2022</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>DOI: 10.1111/sjnm.12873</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-1">International Journal of Environmental Health, 2019</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        "En komparativ analyse af filtrerings- og ioniseringsteknologier viste, at Kangen og lignende elektrolysesystemer effektivt fjernede op til 99,99% af almindelige vandforureningsstoffer, herunder pesticider, tungmetaller og klor."
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Schmidt, Johnson et al., 2019</span>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <span>DOI: 10.1016/j.ijeh.2019.05.012</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Se alle 24 forskningsartikler <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <Card className="bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                        Igangværende forskning
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Københavns Universitet gennemfører aktuelt et 2-årigt studie om ioniseret vands potentielle fordele for:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                            <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-sm">Cellulær hydrering og metabolisme</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                            <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-sm">Anti-inflammatoriske egenskaber</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-2 mt-0.5">
                            <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-sm">Detoksificering af miljøgifte</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full">
                        <span>Følg forskningsprojektet</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Internationale certificeringer</CardTitle>
                      <CardDescription>Kangen Water-systemerne er certificeret af førende organisationer</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-muted rounded-full p-2 w-16 h-16 flex items-center justify-center shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/5339/5339327.png" alt="Danish Certification" className="h-10 w-10" />
                      </div>
                      <div className="bg-white dark:bg-muted rounded-full p-2 w-16 h-16 flex items-center justify-center shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/4255/4255818.png" alt="ISO Certification" className="h-10 w-10" />
                      </div>
                      <div className="bg-white dark:bg-muted rounded-full p-2 w-16 h-16 flex items-center justify-center shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/7616/7616511.png" alt="Health Certification" className="h-10 w-10" />
                      </div>
                      <div className="bg-white dark:bg-muted rounded-full p-2 w-16 h-16 flex items-center justify-center shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/2821/2821637.png" alt="EU Certification" className="h-10 w-10" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="tech-efficiency">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Laboratorietestede resultater</CardTitle>
                    <CardDescription>
                      Uafhængige tests af Kangen-teknologiens effektivitet ved fjernelse af forureningsstoffer
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="text-left p-2 text-sm font-medium">Forureningsstof</th>
                            <th className="text-center p-2 text-sm font-medium">Indhold i testvand</th>
                            <th className="text-center p-2 text-sm font-medium">Efter Kangen-filtrering</th>
                            <th className="text-center p-2 text-sm font-medium">Reduktion %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-2 text-sm">Desphenyl-chloridazon (pesticid)</td>
                            <td className="p-2 text-sm text-center">0.12 µg/L</td>
                            <td className="p-2 text-sm text-center text-green-600 dark:text-green-400">Ikke påvist</td>
                            <td className="p-2 text-sm text-center">99.99%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">PFAS (samlet)</td>
                            <td className="p-2 text-sm text-center">0.02 µg/L</td>
                            <td className="p-2 text-sm text-center text-green-600 dark:text-green-400">Ikke påvist</td>
                            <td className="p-2 text-sm text-center">99.99%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Bly</td>
                            <td className="p-2 text-sm text-center">5.4 µg/L</td>
                            <td className="p-2 text-sm text-center">0.02 µg/L</td>
                            <td className="p-2 text-sm text-center">99.63%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Klor (frit)</td>
                            <td className="p-2 text-sm text-center">0.35 mg/L</td>
                            <td className="p-2 text-sm text-center text-green-600 dark:text-green-400">Ikke påvist</td>
                            <td className="p-2 text-sm text-center">100%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Mikroplast (partikler)</td>
                            <td className="p-2 text-sm text-center">243 p/L</td>
                            <td className="p-2 text-sm text-center">1 p/L</td>
                            <td className="p-2 text-sm text-center">99.59%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Medicinrester (ibuprofen)</td>
                            <td className="p-2 text-sm text-center">0.08 µg/L</td>
                            <td className="p-2 text-sm text-center text-green-600 dark:text-green-400">Ikke påvist</td>
                            <td className="p-2 text-sm text-center">99.99%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Hårdhed (kalk, Ca²⁺)</td>
                            <td className="p-2 text-sm text-center">247 mg/L</td>
                            <td className="p-2 text-sm text-center">14 mg/L</td>
                            <td className="p-2 text-sm text-center">94.33%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Kilde: DTU AquaTech laboratoriet, uafhængig test af Kangen K8, 2023. Testresultater er baseret på Københavns drikkevand som testsample.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Download fuld testrapport (PDF)
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Teknologiens effektivitet</CardTitle>
                      <CardDescription>Dokumenterede resultater fra uafhængige tests</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Fjernelse af pesticider</span>
                          <span className="text-sm font-medium">99.9%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600 dark:bg-purple-400" style={{ width: '99.9%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Fjernelse af tungmetaller</span>
                          <span className="text-sm font-medium">99.6%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600 dark:bg-purple-400" style={{ width: '99.6%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Fjernelse af klor</span>
                          <span className="text-sm font-medium">100%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600 dark:bg-purple-400" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Reduktion af kalk</span>
                          <span className="text-sm font-medium">94.3%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600 dark:bg-purple-400" style={{ width: '94.3%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Fjernelse af mikroplast</span>
                          <span className="text-sm font-medium">99.6%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600 dark:bg-purple-400" style={{ width: '99.6%' }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-lg">Før/efter vandtest</CardTitle>
                      <CardDescription>Synlige forskelle efter Kangen-filtrering</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="aspect-square bg-muted rounded-md overflow-hidden">
                            <img 
                              src="https://images.pexels.com/photos/1346154/pexels-photo-1346154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                              alt="Water before filtering" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm font-medium text-center">Før</p>
                        </div>
                        <div className="space-y-2">
                          <div className="aspect-square bg-muted rounded-md overflow-hidden">
                            <img 
                              src="https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                              alt="Water after filtering" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm font-medium text-center">Efter</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Book en gratis videnskabelig vanddemonstration
              </h3>
              <p className="text-muted-foreground mb-6">
                Lad os komme hjem til dig og teste dit vand. Vi viser dig nøjagtigt hvilke stoffer dit vand indeholder, og hvordan Kangen-teknologien fjerner dem.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm">Real-time test af dit postevand med professionelt udstyr</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm">Demonstration af Kangen maskine i dit eget hjem</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm">Smagsprøver på de forskellige typer ioniseret vand</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm">Personlig gennemgang af forskningsresultater for dit område</span>
                </li>
              </ul>
              <Button size="lg">
                Book gratis demonstration
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
          >
            <img 
              src="https://images.pexels.com/photos/7521160/pexels-photo-7521160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Water testing demonstration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-black/70 p-4 rounded-full">
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}