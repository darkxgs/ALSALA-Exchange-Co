import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-accent/20 to-yellow-400/20 text-accent px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm border border-accent/30">
              <Phone className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
              تواصل معنا
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance tracking-tight">
              <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent drop-shadow-2xl">نحن</span> هنا
              <br />
              <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">لخدمتكم</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed max-w-3xl mx-auto font-medium">
              فريق خدمة العملاء متاح على مدار الساعة للإجابة على استفساراتكم وتقديم أفضل الخدمات المالية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-12 md:pt-16 border-t border-primary-foreground/30">
            {[
              { icon: Phone, title: "اتصل بنا", desc: "0773 817 7776", color: "from-blue-400 to-blue-600" },
              { icon: Mail, title: "راسلنا", desc: "info@alsala.iq", color: "from-green-400 to-green-600" },
              { icon: MapPin, title: "زورنا", desc: "بغداد - العرصات", color: "from-purple-400 to-purple-600" },
              { icon: Clock, title: "أوقات العمل", desc: "8:00 ص - 6:00 م", color: "from-orange-400 to-orange-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <item.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-accent transition-colors">{item.title}</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}