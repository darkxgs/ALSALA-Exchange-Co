"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Phone, MapPin, Menu, Star } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "الرئيسية", action: () => window.location.href = "/" },
    { href: "#services", label: "خدماتنا", action: () => {
      const section = document.getElementById('services')
      section?.scrollIntoView({ behavior: 'smooth' })
    }},
    { href: "#branches", label: "فروعنا", action: () => {
      const section = document.getElementById('branches')
      section?.scrollIntoView({ behavior: 'smooth' })
    }},
    { href: "/about", label: "عن الشركة", action: () => window.location.href = "/about" },
    { href: "/contact", label: "تواصل معنا", action: () => window.location.href = "/contact" }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-white"></div>



      {/* Clean professional header */}
      <div className="container mx-auto px-4 md:px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="/SALA Logo_page-0001.jpg" 
                alt="شركة السلة للصرافة" 
                className="h-12 md:h-16 w-auto object-contain"
              />
              <div className="relative">
                <div className="text-xl md:text-2xl font-bold tracking-tight">
                  <span className="text-primary">السلة</span>
                  <span className="text-gray-900"> للصرافة</span>
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-600 mt-0.5 tracking-wide">ALSALA Exchange Co</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={item.action}
                  className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group py-2 text-base"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                const servicesSection = document.getElementById('services')
                servicesSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 px-6 py-3 text-base rounded-lg"
              size="lg"
            >
              خدماتنا
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden text-gray-700 hover:text-primary hover:bg-gray-100 p-3 rounded-lg transition-all duration-300 touch-manipulation">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground border-l border-primary-foreground/20">
                <SheetHeader className="text-right">
                  <SheetTitle className="flex items-center gap-4 justify-end">
                    <div className="text-2xl font-bold">
                      <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">السلة</span>
                      <span className="text-primary-foreground"> للصرافة</span>
                    </div>
                    <img 
                      src="/SALA Logo_page-0001.jpg" 
                      alt="شركة السلة للصرافة" 
                      className="h-14 w-auto object-contain drop-shadow-lg"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-8">
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    {navigationItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          setIsOpen(false)
                          setTimeout(() => item.action(), 300)
                        }}
                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 font-semibold text-lg group touch-manipulation min-h-[56px]"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <div className="border-t border-primary-foreground/20 pt-6 space-y-3">
                    <a href="tel:07738177776" className="flex items-center gap-3 p-4 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 group touch-manipulation min-h-[56px]">
                      <div className="p-2 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                        <Phone className="h-4 w-4 text-accent" />
                      </div>
                      <span className="font-bold">0773 817 7776</span>
                    </a>
                    <div className="flex items-center gap-3 p-4 rounded-xl min-h-[56px]">
                      <div className="p-2 bg-accent/20 rounded-full">
                        <MapPin className="h-4 w-4 text-accent" />
                      </div>
                      <span className="font-medium">بغداد - العرصات</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 py-4 text-lg mt-4 touch-manipulation min-h-[56px]"
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        const servicesSection = document.getElementById('services')
                        servicesSection?.scrollIntoView({ behavior: 'smooth' })
                      }, 300)
                    }}
                  >
                    خدماتنا
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header >
  )
}
