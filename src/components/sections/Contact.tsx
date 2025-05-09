import { useState } from 'react';
import { motion } from '@/lib/motion-mock';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formStep, setFormStep] = useState(1);
  const [waterConcern, setWaterConcern] = useState("");
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-background">
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
              Kontakt os
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vi er klar til at hjælpe dig
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Har du spørgsmål om Kangen Water eller vil du gerne bestille en demonstration? Kontakt os i dag.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Kontakt formular</CardTitle>
                <CardDescription>
                  {formStep === 1 && "Fortæl os om dine bekymringer omkring dit drikkevand"}
                  {formStep === 2 && "Fortæl os lidt om dig, så vi kan kontakte dig"}
                  {formStep === 3 && "Tak! Vi vil kontakte dig snarest"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Hvad bekymrer dig mest ved dit drikkevand?</h3>
                      <RadioGroup value={waterConcern} onValueChange={setWaterConcern} className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="pesticider" id="pesticider" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="pesticider" className="font-medium">Pesticider & Kemikalier</Label>
                            <p className="text-sm text-muted-foreground">
                              Bekymret over pesticider, herbicider eller andre kemikalier i dit drikkevand
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="kalk" id="kalk" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="kalk" className="font-medium">Kalk & Mineraler</Label>
                            <p className="text-sm text-muted-foreground">
                              Problemer med hårdt vand, kalkaflejringer eller ubalanceret mineralindhold
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="smag" id="smag" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="smag" className="font-medium">Smag & Kvalitet</Label>
                            <p className="text-sm text-muted-foreground">
                              Utilfreds med smag, lugt eller den generelle kvalitet af dit drikkevand
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="sundhed" id="sundhed" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="sundhed" className="font-medium">Sundhedsmæssige bekymringer</Label>
                            <p className="text-sm text-muted-foreground">
                              Bekymringer om vandets påvirkning på din og din families sundhed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="miljø" id="miljø" className="mt-1" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="miljø" className="font-medium">Miljøhensyn</Label>
                            <p className="text-sm text-muted-foreground">
                              Ønsker at reducere plastaffald fra flaskevand og skåne miljøet
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="interest" className="text-lg font-medium mb-3 block">
                        Hvad er du mest interesseret i?
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Vælg en mulighed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Mere information om Kangen Water</SelectItem>
                          <SelectItem value="demo">Gratis demonstration af Kangen-maskinen</SelectItem>
                          <SelectItem value="test">Få testet mit vand derhjemme</SelectItem>
                          <SelectItem value="purchase">Køb af Kangen-maskine</SelectItem>
                          <SelectItem value="service">Service af eksisterende maskine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-lg font-medium mb-3 block">
                        Fortæl os mere om dine behov
                      </Label>
                      <Textarea 
                        id="message" 
                        placeholder="Uddyb venligst dine bekymringer eller spørgsmål om drikkevand eller Kangen-maskiner..." 
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Fulde navn</Label>
                        <Input id="name" placeholder="Dit fulde navn" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="din@email.dk" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefonnummer</Label>
                        <Input id="phone" placeholder="+45 12 34 56 78" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">Postnummer</Label>
                        <Input id="zip" placeholder="1234" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-preference">Foretrukken kontaktmetode</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Vælg kontaktmetode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Telefon</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="marketing" />
                      <Label htmlFor="marketing" className="text-sm">
                        Ja, jeg vil gerne modtage information om produkttilbud, vandkvalitet og sundhedstips
                      </Label>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="flex flex-col items-center py-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Tak for din henvendelse!</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Vi har modtaget dine oplysninger og vil kontakte dig inden for 24 timer på din foretrukne kontaktmetode.
                    </p>
                    <div className="bg-muted p-4 rounded-lg w-full max-w-md">
                      <h4 className="font-medium mb-2">Det næste skridt:</h4>
                      <p className="text-sm text-muted-foreground">
                        En af vores vandspecialister vil kontakte dig for at arrangere en gratis vandkvalitetstest og demonstration af Kangen Water-maskinen i dit hjem.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {formStep > 1 && formStep < 3 && (
                  <Button variant="outline" onClick={() => setFormStep(formStep - 1)}>
                    Tilbage
                  </Button>
                )}
                {formStep === 3 ? (
                  <Button onClick={() => setFormStep(1)} className="ml-auto">
                    Start forfra
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setFormStep(formStep + 1)} 
                    disabled={formStep === 1 && !waterConcern}
                    className={formStep === 1 ? "ml-auto" : ""}
                  >
                    {formStep === 1 ? "Næste" : "Send besked"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Kontaktinformation</h3>
                <div className="grid gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shrink-0">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Besøg vores showroom</h4>
                      <p className="text-muted-foreground">
                        Hovedgade 123<br />
                        2100 København Ø
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shrink-0">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ring til os</h4>
                      <p className="text-muted-foreground">
                        Telefon: +45 12 34 56 78<br />
                        Support: +45 87 65 43 21
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shrink-0">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email os</h4>
                      <p className="text-muted-foreground">
                        Generelle henvendelser: info@kangendanmark.dk<br />
                        Support: support@kangendanmark.dk
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shrink-0">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Åbningstider</h4>
                      <p className="text-muted-foreground">
                        Mandag-fredag: 9:00-17:00<br />
                        Lørdag: 10:00-14:00<br />
                        Søndag: Lukket
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Find forhandlere i dit område</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="region">Vælg region</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Vælg region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hovedstaden">Hovedstaden</SelectItem>
                        <SelectItem value="sjælland">Sjælland</SelectItem>
                        <SelectItem value="syddanmark">Syddanmark</SelectItem>
                        <SelectItem value="midtjylland">Midtjylland</SelectItem>
                        <SelectItem value="nordjylland">Nordjylland</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Find nærmeste forhandler</Button>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-64 relative">
                <img 
                  src="https://images.pexels.com/photos/4668507/pexels-photo-4668507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button variant="secondary" className="bg-white/90 hover:bg-white">
                    Book showroom besøg
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}