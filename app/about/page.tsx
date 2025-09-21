import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyHistory } from "@/components/about/company-history"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <AboutHero />
            <CompanyHistory />
            <ValuesSection />
            <TeamSection />
            <Footer />
        </main>
    )
}