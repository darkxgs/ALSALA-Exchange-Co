import { Header } from "@/components/header"
import { HeroOptimized } from "@/components/hero-optimized"
import { ServicesOptimized } from "@/components/services-optimized"
import { CurrencyConverterCompact } from "@/components/currency-converter-compact"
import { AboutCompact } from "@/components/about-compact"
import { BranchesCompact } from "@/components/branches-compact"
import { Footer } from "@/components/footer"

export default function HomeOptimized() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroOptimized />
      
      {/* Compact Stats Section - Inline with Hero */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-black text-primary mb-1">15+</div>
              <div className="text-sm text-gray-600">سنة خبرة</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-primary mb-1">20+</div>
              <div className="text-sm text-gray-600">فرع</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-primary mb-1">50K+</div>
              <div className="text-sm text-gray-600">عميل</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-primary mb-1">24/7</div>
              <div className="text-sm text-gray-600">خدمة</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOptimized />
      <CurrencyConverterCompact />
      <AboutCompact />
      <BranchesCompact />
      <Footer />
    </main>
  )
}