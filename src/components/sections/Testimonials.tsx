import { motion } from '../../lib/motion-mock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Testimonials() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sofie Andersen",
      location: "København",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5,
      text: "Efter at have installeret Kangen-vandmaskinen, bemærkede jeg en tydelig forskel i min families sundhed. Min søn har haft færre allergiske reaktioner, og min mand og jeg føler os mere energiske.",
      product: "Kangen K8",
      date: "14. maj 2023"
    },
    {
      id: 2,
      name: "Lars Jensen",
      location: "Aarhus",
      image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5,
      text: "Som læge var jeg skeptisk i starten, men efter at have læst forskningen og testet vandet selv, er jeg overbevist. Min familie drikker nu Kangen-vand hver dag, og vi bruger det også til madlavning.",
      product: "SD501",
      date: "3. februar 2023"
    },
    {
      id: 3,
      name: "Mette Nielsen",
      location: "Odense",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5,
      text: "Vi bor i et område med hårdt vand, og efter installation af Kangen har vi ikke bare sundere drikkevand, men også mindre kalk i vores husholdningsapparater. En fantastisk investering for vores familie.",
      product: "Kangen K8",
      date: "27. marts 2023"
    },
    {
      id: 4,
      name: "Anders Christensen",
      location: "Aalborg",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 4,
      text: "Installationen var enkel og kundeservice har været fremragende. Det eneste jeg ville have ønsket anderledes var, at jeg havde købt den større model til vores store familie.",
      product: "JR IV+",
      date: "9. juni 2023"
    },
    {
      id: 5,
      name: "Hanne Schmidt",
      location: "Esbjerg",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5,
      text: "Som holistisk sundhedsrådgiver har jeg anbefalet Kangen-vand til mine klienter i årevis. Nu har jeg endelig købt min egen, og jeg kan mærke forskellen i min fordøjelse og energiniveau.",
      product: "SD501",
      date: "18. april 2023"
    },
    {
      id: 6,
      name: "Peter Møller",
      location: "Roskilde",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5,
      text: "Vi har brugt vores Kangen i over et år nu, og det er en af de bedste investeringer, vi har foretaget for vores families sundhed. Min kone bruger også det sure vand til hudpleje med fantastiske resultater.",
      product: "Kangen K8",
      date: "22. oktober 2022"
    }
  ];

  return (
    <section className="py-20 bg-blue-50/50 dark:bg-blue-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hvad vores kunder siger
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hør fra tilfredse danske kunder, der har oplevet fordelene ved Kangen Water i deres dagligdag.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.stars
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between text-xs text-muted-foreground">
                  <span>Produkt: {testimonial.product}</span>
                  <span>{testimonial.date}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Er du klar til at opleve forskellen selv?</h3>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Se alle 278 anmeldelser
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}