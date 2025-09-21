import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6 text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src="/SALA Logo_page-0001.jpg" 
                alt="شركة السلة للصرافة" 
                className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg"
              />
              <div>
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="text-accent">السلة</span>
                  <span className="text-white"> للصرافة</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal mt-3">
                  شركة متخصصة بتقديم الخدمات المالية وفق تعليمات البنك المركزي العراقي
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-black text-accent">صفحات رئيسية</h3>
            <ul className="space-y-2 md:space-y-3 text-white/90">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/about", label: "عن الشركة" },
                { href: "/#services", label: "خدماتنا" },
                { href: "/#branches", label: "فروعنا وكلاؤنا" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-accent transition-all duration-300 font-semibold text-base md:text-lg hover:translate-x-2 inline-block touch-manipulation min-h-[44px] flex items-center justify-center md:justify-start">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-black text-accent">صفحات فرعية</h3>
            <ul className="space-y-2 md:space-y-3 text-white/90">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/contact", label: "تواصل معنا" },
                { href: "/#branches", label: "فروعنا وكلاؤنا" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-accent transition-all duration-300 font-semibold text-base md:text-lg hover:translate-x-2 inline-block touch-manipulation min-h-[44px] flex items-center justify-center md:justify-start">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-black text-accent">تعاملاتنا</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { icon: Clock, text: "السبت - الخميس: 8:00 ص - 6:00 م" },
                { icon: Phone, text: "0773 817 7776" },
                { icon: MapPin, text: "بغداد - العرصات" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 group cursor-pointer justify-center md:justify-start touch-manipulation">
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg md:rounded-xl group-hover:bg-white/30 transition-colors">
                    <item.icon className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                  </div>
                  <span className="font-semibold text-sm md:text-base lg:text-lg group-hover:text-accent transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/30 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-white/90 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
            © 2025 جميع الحقوق محفوظة | شركة السلة للصرافة | أرقم وتصميم وإدارة من قبل فريق الريان |
            <span className="text-accent font-bold"> ALSALA Exchange Co</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
