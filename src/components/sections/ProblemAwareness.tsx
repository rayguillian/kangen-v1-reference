import { Button } from "../ui/button";
import { motion } from '../../lib/motion-mock';
import { AlertTriangle, TrendingUp, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import WaterQualityMap from "../ui/water-quality-map";

export default function ProblemAwareness() {
  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Alarmerende fakta
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Danmarks vandkvalitet er i krise
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nye undersøgelser viser stigende niveauer af pesticider og andre forurenende stoffer i det danske grundvand, som truer både vores sundhed og miljøet.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Pesticidkoncentrationer</CardTitle>
                  <CardDescription>Stigende trend i danske grundvandsboringer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square relative overflow-hidden rounded-md mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-3/4 w-full">
                        <div className="h-full w-full bg-gradient-to-t from-red-500 to-yellow-400 rounded-md opacity-70"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-green-500 to-yellow-400 rounded-b-md"></div>
                        <div className="absolute inset-0 flex items-end">
                          <div className="w-1/5 h-[30%] bg-green-600 mx-1"></div>
                          <div className="w-1/5 h-[45%] bg-yellow-500 mx-1"></div>
                          <div className="w-1/5 h-[60%] bg-orange-500 mx-1"></div>
                          <div className="w-1/5 h-[75%] bg-red-500 mx-1"></div>
                          <div className="w-1/5 h-[90%] bg-red-600 mx-1 relative">
                            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                      <span>70% stigning i pesticider over de sidste 10 år</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-amber-500 mr-2 shrink-0" />
                      <span>43% af vandprøver overskrider EU's grænseværdier</span>
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                      <span>Over 400 lukkede drikkevandsboringer siden 2020</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4">Se detaljeret data</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Områder med kritisk vandkvalitet</CardTitle>
                  <CardDescription>Interaktivt kort over Danmarks grundvandsforurening</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/9] bg-muted rounded-md overflow-hidden relative">
                    <WaterQualityMap />
                    <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-md border shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-xs">Kritisk niveau</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-xs">Forøget niveau</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs">Acceptabelt niveau</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">Videnskabelig Dokumentation</h4>
                        <p className="text-sm text-muted-foreground">
                          Baseret på nyeste undersøgelser fra GEUS (Danmarks og Grønlands Geologiske Undersøgelse) og Miljøstyrelsen.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">Fra skandinaviske eksperter</h4>
                        <p className="text-sm text-muted-foreground">
                          Peer-reviewed forskning fra Københavns Universitet og Nordic Council bekræfter tendensen.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Er dit drikkevand sikkert?
              </h3>
              <p className="text-muted-foreground mb-6">
                Pesticider, mikroplast, kalk og tungmetaller er usynlige i vandet, men kan have alvorlige konsekvenser for din og din families sundhed på langt sigt.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Bestil gratis vandtest
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}