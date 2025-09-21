import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Users, Building, TrendingUp } from "lucide-react"

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-accent/20 to-yellow-400/20 text-accent px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm border border-accent/30">
              <Building className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
              عن شركة السلة للصرافة
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance tracking-tight">
              <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent drop-shadow-2xl">رحلة</span> النجاح
              <br />
              منذ <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">2008</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed max-w-3xl mx-auto font-medium">
              بدأت شركة السلة للصرافة رحلتها في عام 2008 كشركة رائدة في مجال الصرافة والخدمات المالية في العراق، 
              وأصبحت اليوم من أكبر الشركات المتخصصة في هذا المجال
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              خدماتنا
              <ArrowLeft className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 md:border-3 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 bg-transparent/10 backdrop-blur-sm font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover:border-accent hover:text-accent transition-all duration-300 rounded-2xl"
            >
              تواصل معنا
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-10 pt-12 md:pt-16 border-t border-primary-foreground/30">
            {[
              { icon: Award, title: "15+", desc: "سنة خبرة", color: "from-blue-400 to-blue-600" },
              { icon: Users, title: "10,000+", desc: "عميل راضي", color: "from-green-400 to-green-600" },
              { icon: Building, title: "15+", desc: "فرع ووكيل", color: "from-purple-400 to-purple-600" },
              { icon: TrendingUp, title: "100%", desc: "معاملات آمنة", color: "from-orange-400 to-orange-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <item.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:text-accent transition-colors">{item.title}</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}