"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Award, Users } from "lucide-react"

export function AboutCompact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              نبذة عن شركة السلة للصرافة
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p className="text-lg">
                شركة السلة للصرافة هي إحدى الشركات الرائدة في مجال الخدمات المالية في العراق، 
                تأسست بهدف تقديم خدمات صرافة متميزة وموثوقة للعملاء.
              </p>
              
              <p>
                منذ تأسيسها، التزمت الشركة بتقديم أفضل الخدمات المالية وفقاً لأعلى معايير الجودة والأمان، 
                مع شبكة واسعة من الفروع المنتشرة في المحافظات العراقية.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = '/about'
                }}
                className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl"
              >
                اعرف المزيد
                <ArrowLeft className="mr-2 h-5 w-5" />
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
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-xl"
              >
                تواصل معنا
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, title: "أمان وثقة", color: "text-green-600" },
                { icon: Award, title: "جودة عالية", color: "text-blue-600" },
                { icon: Users, title: "خدمة ممتازة", color: "text-purple-600" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
                  <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Contact Card */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/ads/فروعنا.jpg"
                alt="فروع شركة السلة للصرافة"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <div className="text-xl font-bold mb-1">فروعنا في خدمتكم</div>
                <div className="text-sm opacity-90">في جميع أنحاء العراق</div>
              </div>
            </div>

            {/* Quick Contact */}
            <Card className="bg-gray-900 text-white border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">تواصل معنا</h3>
                <div className="space-y-3 text-center">
                  <div>
                    <div className="font-semibold">الهاتف</div>
                    <div className="text-gray-300">0773 817 7776</div>
                  </div>
                  <div>
                    <div className="font-semibold">العنوان</div>
                    <div className="text-gray-300">بغداد - العرصات</div>
                  </div>
                  <div>
                    <div className="font-semibold">ساعات العمل</div>
                    <div className="text-gray-300">السبت - الخميس: 8:00 ص - 6:00 م</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}