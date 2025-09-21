import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Shield, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="h-4 w-4" />
            الشركة الرائدة في الصرافة
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-gray-900 mb-6">
            شركة السلة للصرافة
            <span className="block text-primary">خدمات مالية احترافية</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            نقدم أفضل الخدمات المالية في العراق مع ضمان الأمان والثقة منذ أكثر من 15 عاماً. 
            فروعنا منتشرة في جميع أنحاء العراق لخدمتكم على مدار الساعة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex-1 min-h-[56px]"
            >
              استكشف خدماتنا
              <ArrowLeft className="mr-3 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4 transition-all duration-300 rounded-lg flex-1 min-h-[56px]"
            >
              تواصل معنا
            </Button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/ads/خدمة صرف الدولار.jpg" 
              alt="شركة السلة للصرافة - خدمات مالية احترافية"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <img 
                  src="/SALA Logo_page-0001.jpg" 
                  alt="شركة السلة للصرافة" 
                  className="h-8 w-auto object-contain"
                />
                <div className="text-right">
                  <div className="font-bold text-primary text-base">السلة للصرافة</div>
                  <div className="text-sm text-gray-600">ثقة وأمان</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-gray-200 mt-16">
          {[
            { icon: TrendingUp, title: "أفضل الأسعار", desc: "أسعار تنافسية يومياً", color: "bg-blue-50 text-blue-600" },
            { icon: Shield, title: "أمان وثقة", desc: "معاملات آمنة 100%", color: "bg-green-50 text-green-600" },
            { icon: Clock, title: "خدمة سريعة", desc: "معاملات فورية", color: "bg-purple-50 text-purple-600" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                <item.icon className="h-8 w-8" />
              </div>
              <div className="text-lg font-semibold mb-2 text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}