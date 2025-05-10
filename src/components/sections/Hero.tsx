import { Button } from '../ui/button';
import { motion } from '../../lib/motion-mock';
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Water background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                Drikker du forurenet vand fra din vandhane?
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
                Nyt dansk forskning viser alarmerende niveauer af pesticider og andre skadelige stoffer i vores grundvand. Kangen Water giver dig renere, sundere vand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium">
                  Få rent vand i dag
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Test din vandkvalitet gratis
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start">
                <div className="flex items-center text-blue-100 text-sm font-medium">
                  <span className="mr-2">Certificeret af</span>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full p-1">
                      <img src="https://cdn-icons-png.flaticon.com/512/5339/5339327.png" alt="Danish Certification" className="h-8 w-8" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <img src="https://cdn-icons-png.flaticon.com/512/4255/4255818.png" alt="Water Quality Certification" className="h-8 w-8" />
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <img src="https://cdn-icons-png.flaticon.com/512/7616/7616511.png" alt="Health Certification" className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-700/20 z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kangen Water Machine" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Kangen Water System K8</h3>
                  <p className="text-sm text-blue-100">8 forskellige vandtyper til alle dine behov</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-full transform rotate-12 shadow-lg">
                <span className="text-xl font-bold">Spar 15%</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white rounded-full animate-bounce"
            onClick={scrollToNextSection}
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  );
}