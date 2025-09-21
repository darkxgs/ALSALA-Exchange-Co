import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Branches } from "@/components/branches"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <div className="bg-gradient-to-br from-muted/20 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Branches />
      <Footer />
    </main>
  )
}