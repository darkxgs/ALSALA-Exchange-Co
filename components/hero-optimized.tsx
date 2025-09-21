"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Shield, Clock } from "lucide-react"

export function HeroOptimized() {
  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              الشركة الرائدة في الصرافة
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              شركة السلة للصرافة
              <span className="block text-primary text-3xl md:text-4xl lg:text-5xl mt-2">خدمات مالية احترافية</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              أفضل الخدمات المالية في العراق مع ضمان الأمان والثقة منذ أكثر من 15 عاماً
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Button
                size="lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  servicesSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl flex-1"
              >
                ابدأ الآن
                <ArrowLeft className="mr-3 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = '/contact'
                  }
                }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-4 transition-all duration-300 rounded-xl flex-1"
              >
                تواصل معنا
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/ads/خدمة صرف الدولار.jpg" 
                alt="شركة السلة للصرافة"
                className="w-full h-[280px] md:h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <img 
                    src="/SALA Logo_page-0001.jpg" 
                    alt="السلة للصرافة" 
                    className="h-6 w-auto object-contain"
                  />
                  <div className="text-right">
                    <div className="font-bold text-primary text-sm">السلة للصرافة</div>
                    <div className="text-xs text-gray-600">ثقة وأمان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
          {[
            { icon: TrendingUp, title: "أفضل الأسعار", color: "bg-blue-50 text-blue-600" },
            { icon: Shield, title: "أمان وثقة", color: "bg-green-50 text-green-600" },
            { icon: Clock, title: "خدمة سريعة", color: "bg-purple-50 text-purple-600" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300`}>
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-base font-semibold text-gray-900">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}