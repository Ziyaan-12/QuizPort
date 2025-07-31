import LandingNavbar from '@/components/LandingNavbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}
