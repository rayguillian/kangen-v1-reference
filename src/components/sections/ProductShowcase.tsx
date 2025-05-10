import { useState } from 'react';
import { motion } from '@/lib/motion-mock';
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState("k8");
  
  return (
    <section id="products" className="py-20 bg-white dark:bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Vores produkter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kangen vandmaskiner til enhver husstand
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Vælg den maskine, der passer til din families behov, og få adgang til rent, ioniseret vand hver dag.
            </p>
          </motion.div>
        </div>

        <div className="mb-12">
          <Tabs defaultValue={selectedProduct} onValueChange={setSelectedProduct} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-3">
                <TabsTrigger value="k8" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                  K8
                </TabsTrigger>
                <TabsTrigger value="sd501" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                  SD501
                </TabsTrigger>
                <TabsTrigger value="jr" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                  JR IV+
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="k8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Kangen Water K8</h3>
                      <p className="text-muted-foreground mb-4">
                        Vores topmodel, der leverer 8 forskellige typer vand til alle dine behov - fra drikkevand til rengøring.
                      </p>
                      <div className="flex items-center space-x-1 mb-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2 text-sm text-muted-foreground">(127 anmeldelser)</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">37.900 kr.</span>
                        <span className="text-muted-foreground ml-2 line-through">44.900 kr.</span>
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium py-0.5 px-2 rounded-full ml-2">
                          Spar 7.000 kr.
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
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
                        <p className="text-sm">Nyeste 8-elektrode teknologi for optimal ionisering</p>
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
                        <p className="text-sm">Kraftig filter fjerner 99,9% af skadelige stoffer</p>
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
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Køb nu
                      </Button>
                      <Button size="lg" variant="outline">
                        Se finansieringsmuligheder
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Kangen K8" 
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full transform rotate-12 shadow-lg">
                      <span className="text-sm font-bold">Bestseller</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="sd501">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Kangen Water SD501</h3>
                      <p className="text-muted-foreground mb-4">
                        Vores mest populære model, afprøvet og testet gennem årtier. Ideel til familier.
                      </p>
                      <div className="flex items-center space-x-1 mb-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2 text-sm text-muted-foreground">(254 anmeldelser)</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">29.900 kr.</span>
                        <span className="text-muted-foreground ml-2 line-through">32.900 kr.</span>
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium py-0.5 px-2 rounded-full ml-2">
                          Spar 3.000 kr.
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
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
                        <p className="text-sm">7 platin-belagte titaniumplader for effektiv ionisering</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">Patenteret vedligeholdelsesfunktion for lang levetid</p>
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
                        <p className="text-sm">LCD-skærm med dansk brugerflade</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">5 års garanti med gratis serviceeftersyn</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Køb nu
                      </Button>
                      <Button size="lg" variant="outline">
                        Se finansieringsmuligheder
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Kangen SD501" 
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full transform rotate-12 shadow-lg">
                      <span className="text-sm font-bold">Mest populær</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="jr">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Kangen JR IV+</h3>
                      <p className="text-muted-foreground mb-4">
                        Kompakt model perfekt til mindre husholdninger, små køkkener og lejligheder.
                      </p>
                      <div className="flex items-center space-x-1 mb-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2 text-sm text-muted-foreground">(98 anmeldelser)</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">19.900 kr.</span>
                        <span className="text-muted-foreground ml-2 line-through">22.900 kr.</span>
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium py-0.5 px-2 rounded-full ml-2">
                          Spar 3.000 kr.
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
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
                        <p className="text-sm">Kompakt design - passer i små køkkener</p>
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
                        <p className="text-sm">Perfekt til 1-2 personers husstand</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-sm">3 års garanti med service</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Køb nu
                      </Button>
                      <Button size="lg" variant="outline">
                        Se finansieringsmuligheder
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Kangen JR IV+" 
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full transform rotate-12 shadow-lg">
                      <span className="text-sm font-bold">Bedste værdi</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="my-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Sammenligning af vandkvalitet</h3>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Egenskaber</TableHead>
                  <TableHead className="text-center">Postevand</TableHead>
                  <TableHead className="text-center">Filtreret vand</TableHead>
                  <TableHead className="text-center">Flaskevand</TableHead>
                  <TableHead className="text-center bg-blue-50 dark:bg-blue-950/20">Kangen Vand</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Fjerner pesticider</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">🟡 Delvist</TableCell>
                  <TableCell className="text-center">🟡 Varierer</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ 99.9%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fjerner tungmetaller</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">🟡 Delvist</TableCell>
                  <TableCell className="text-center">🟡 Varierer</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ 99.9%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mikroplast</TableCell>
                  <TableCell className="text-center">❌ Indeholder</TableCell>
                  <TableCell className="text-center">🟡 Reduceret</TableCell>
                  <TableCell className="text-center">❌ Indeholder ofte</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ Fjernet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">pH-niveau</TableCell>
                  <TableCell className="text-center">7.0-7.5</TableCell>
                  <TableCell className="text-center">7.0-7.5</TableCell>
                  <TableCell className="text-center">6.5-7.5</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">Justerbar 2.5-11.5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Klor</TableCell>
                  <TableCell className="text-center">❌ Indeholder</TableCell>
                  <TableCell className="text-center">🟡 Reduceret</TableCell>
                  <TableCell className="text-center">🟡 Varierer</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ 100% fjernet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Molekylært hydrogen</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ Høj koncentration</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Miljøvenlig</TableCell>
                  <TableCell className="text-center">✅</TableCell>
                  <TableCell className="text-center">🟡 Filterskift</TableCell>
                  <TableCell className="text-center">❌ Plastikaffald</TableCell>
                  <TableCell className="text-center bg-blue-50 dark:bg-blue-950/20">✅ Ingen plastikaffald</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Gratis vandtest og demonstration
                </h3>
                <p className="text-blue-100 mb-6">
                  Ikke sikker på, hvilken model der passer til dit behov? Book en gratis demonstration, hvor vi tester dit drikkevand og viser forskellen med Kangen.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Book demonstration <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500 rounded-full opacity-50"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500 rounded-full opacity-50"></div>
              <div className="relative h-full flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/7479527/pexels-photo-7479527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Water testing" 
                  className="h-auto w-full max-h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}