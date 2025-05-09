import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import KangenLogo from "@/components/layout/KangenLogo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <KangenLogo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-primary">Kangen Danmark</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Vi leverer førsteklasses vandfiltrering og ionisering til danske hjem og virksomheder for at imødegå den stigende vandforurening.
            </p>
            <div className="flex mt-6 space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Hurtige Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Hjem</a></li>
              <li><a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Vandkvalitet i Danmark</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Vores Produkter</a></li>
              <li><a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">Videnskabelig Forskning</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Priser & Pakker</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Populære Ressourcer</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Vandtestning Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">pH Balancens Betydning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Hvordan Vælge Vandfilter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pesticider i Grundvandet</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Installation & Vedligeholdelse</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt Os</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <span>+45 12 34 56 78</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <span>info@kangendanmark.dk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <span>Hovedgade 123, 2100 København Ø</span>
              </li>
            </ul>
            <Button className="mt-6 w-full">Kontakt os i dag</Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Kangen Danmark. Alle rettigheder forbeholdes.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-foreground transition-colors">Vilkår & Betingelser</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Politik</a>
          </div>
        </div>
      </div>
    </footer>
  );
}