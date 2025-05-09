import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProblemAwareness from '@/components/sections/ProblemAwareness';
import EducationalContent from '@/components/sections/EducationalContent';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ScientificBacking from '@/components/sections/ScientificBacking';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="kangen-theme">
      <Layout>
        <Hero />
        <ProblemAwareness />
        <EducationalContent />
        <ProductShowcase />
        <ScientificBacking />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;