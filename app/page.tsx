import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Benefits } from "@/components/sections/benefits";
import { CaseStudies } from "@/components/sections/case-studies";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { InspirationGallery } from "@/components/sections/inspiration-gallery";
import { ProblemSection } from "@/components/sections/problem-section";
import { Process } from "@/components/sections/process";
import { ProductGrid } from "@/components/sections/product-grid";
import { SocialProof } from "@/components/sections/social-proof";
import { SolutionSection } from "@/components/sections/solution-section";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProductGrid />
        <SocialProof />
        <CaseStudies />
        <InspirationGallery />
        <Testimonials />
        <Process />
        <Benefits />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
