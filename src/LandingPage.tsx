import Hero from './components/Hero'
import Marquee from './components/Marquee'
import StackedCards from './components/StackedCards'
import BenefitsGrid from './components/BenefitsGrid'
import MarketProblems from './components/MarketProblems'
import Portfolio from './components/Portfolio'
import BeforeAfter from './components/BeforeAfter'
import PerformancePremium from './components/PerformancePremium'
import Testimonials from './components/Testimonials'
import ProcessAdvanced from './components/ProcessAdvanced'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import About from './components/About'
import CtaFinal from './components/CtaFinal'
import FAQ from './components/FAQ'
import PartnersStrip from './components/PartnersStrip'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Marquee />
      <MarketProblems />
      <BenefitsGrid />
      <StackedCards />

      <Portfolio />
      <BeforeAfter />
      <PerformancePremium />
      <Testimonials />
      <ProcessAdvanced />
      <Pricing />
      <Guarantee />
      <About />
      <CtaFinal />
      <FAQ />
      <PartnersStrip />
    </>
  )
}
