import { useState } from 'react';
import { motion } from '../../lib/motion-mock';
import { Check, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Pricing() {
  const [paymentType, setPaymentType] = useState("monthly");
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50/50 dark:from-background dark:to-blue-950/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Priser og pakker
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fleksible betalingsmuligheder
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Vi tilbyder forskellige købs- og finansieringsmuligheder, så alle kan få glæde af rent, ioniseret vand.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs 
            defaultValue={paymentType} 
            onValueChange={setPaymentType}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/30">
                Månedlig betaling
              </TabsTrigger>
              <TabsTrigger value="onetime" className="data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/30">
                Engangsbetaling
              </TabsTrigger>
            </TabsList>

            <TabsContent value={paymentType} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle>JR IV+</CardTitle>
                      <CardDescription>Ideel til små husstande og lejligheder</CardDescription>
                      <div className="mt-4 mb-2">
                        {paymentType === "monthly" ? (
                          <>
                            <span className="text-3xl font-bold">399 kr.</span>
                            <span className="text-muted-foreground ml-1">/md.</span>
                            <p className="text-xs text-muted-foreground mt-1">ved 60 mdrs. finansiering</p>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-bold">19.900 kr.</span>
                            <span className="text-muted-foreground ml-1">inkl. moms</span>
                            <span className="block mt-1 text-sm text-red-600 dark:text-red-400">Spar 3.000 kr.</span>
                          </>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">4 forskellige typer vand (pH 4.0 til pH 10.0)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">4 platin-belagte titaniumplader</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Kompakt design - perfekt til mindre køkkener</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Enkel betjening med trykknapper</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">3 års garanti</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Køb nu</Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden h-full border-green-200 dark:border-green-800">
                    <div className="absolute top-0 right-0 left-0 bg-green-600 text-white py-1 px-3 text-center text-sm font-medium">
                      Mest populære
                    </div>
                    <CardHeader className="pt-10">
                      <CardTitle>SD501</CardTitle>
                      <CardDescription>Vores klassiske model for familier</CardDescription>
                      <div className="mt-4 mb-2">
                        {paymentType === "monthly" ? (
                          <>
                            <span className="text-3xl font-bold">599 kr.</span>
                            <span className="text-muted-foreground ml-1">/md.</span>
                            <p className="text-xs text-muted-foreground mt-1">ved 60 mdrs. finansiering</p>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-bold">29.900 kr.</span>
                            <span className="text-muted-foreground ml-1">inkl. moms</span>
                            <span className="block mt-1 text-sm text-red-600 dark:text-red-400">Spar 3.000 kr.</span>
                          </>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">7 forskellige typer vand (pH 2.5 til pH 11.5)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">7 platin-belagte titaniumplader</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">LCD-skærm med dansk brugerflade</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Høj flowrate på 7,6 liter/minut</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">5 års garanti med gratis serviceeftersyn</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Gratis installation og opsætning</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Køb nu</Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle>K8</CardTitle>
                      <CardDescription>Vores topmodel med alle funktioner</CardDescription>
                      <div className="mt-4 mb-2">
                        {paymentType === "monthly" ? (
                          <>
                            <span className="text-3xl font-bold">799 kr.</span>
                            <span className="text-muted-foreground ml-1">/md.</span>
                            <p className="text-xs text-muted-foreground mt-1">ved 60 mdrs. finansiering</p>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-bold">37.900 kr.</span>
                            <span className="text-muted-foreground ml-1">inkl. moms</span>
                            <span className="block mt-1 text-sm text-red-600 dark:text-red-400">Spar 7.000 kr.</span>
                          </>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">8 forskellige typer vand (pH 2.5 til pH 11.5)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">8-elektrode teknologi for optimal ionisering</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Større plader (230 cm²) giver højere hydrogen-niveau</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">LCD-farveskærm og stemmebesked på dansk</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">5 års garanti med gratis serviceeftersyn</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">VIP-service og prioriteret teknisk support</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Køb nu</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fleksible finansieringsmuligheder</h3>
                    <p className="text-muted-foreground">Flere måder at betale på, der passer til dit budget</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Rentefri finansiering
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Betal over 12 måneder uden renter. Kræver godkendelse af kreditvurdering.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>12 måneders rentefri betaling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Ingen oprettelsesgebyr</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Kræver kreditgodkendelse</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Lån over 60 måneder
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Fast lav månedlig ydelse med mulighed for førtidig indfrielse uden ekstra omkostninger.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Lav fast månedlig ydelse</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Variabel rente fra 4,95% ÅOP</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Ingen straf ved førtidig indfrielse</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Firmakøb og leasing
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Særlige fordele for virksomheder med mulighed for skattefradrag. Kontakt os for en skræddersyet løsning.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Skattemæssige fordele</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Fuld serviceaftale inkluderet</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Skræddersyede løsninger til virksomheder</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h5 className="font-medium text-sm">Prisgaranti</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Vi matcher enhver pris fra en autoriseret Kangen-forhandler i Danmark. Har du fundet en bedre pris? Kontakt os, og vi matcher den!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Få en gratis konsultation
              </h3>
              <p className="text-green-100 mb-6 max-w-lg">
                Usikker på hvilket produkt der passer bedst til dine behov? Book en gratis konsultation, hvor vi gennemgår dine muligheder og laver en skræddersyet løsning.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Book gratis konsultation
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="shrink-0"
            >
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Alle køb inkluderer:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-500 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Gratis levering i hele Danmark</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Installation af autoriseret tekniker</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Omfattende produktgaranti</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>30 dages tilfredsheds-garanti</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}