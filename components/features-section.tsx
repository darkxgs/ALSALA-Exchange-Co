import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Shield, Clock, Users, Building, Award } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            لماذا تختار السلة للصرافة؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات مالية متميزة بأعلى معايير الجودة والأمان في السوق العراقي
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Large Feature Card */}
          <div className="lg:col-span-2">
            <Card className="h-full overflow-hidden shadow-lg border-0">
              <div className="relative h-[400px]">
                <img 
                  src="/ads/وين ما تكون حوالتك توصل بنفس اليوم بخطوتين تسلم تستلم.jpg"
                  alt="حوالات سريعة وآمنة - وين ما تكون حوالتك توصل"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    حوالات سريعة وآمنة
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    وين ما تكون حوالتك توصل بنفس اليوم - بخطوتين بسيطتين: تسلم وتستلم
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    اكتشف المزيد
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Card */}
          <div className="space-y-8">
            <Card className="p-6 shadow-lg border-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">+15,000</div>
                <div className="text-gray-600">عميل راضٍ</div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">فرع في العراق</div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">سنة خبرة</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "/ads/خدمة صرف الدولار.jpg",
              title: "صرافة العملات",
              description: "أفضل أسعار الصرف في السوق العراقي"
            },
            {
              image: "/ads/بيع الدولار للمسافرين.jpg", 
              title: "دولار المسافرين",
              description: "خدمة بيع الدولار للمسافرين بأسعار تنافسية"
            },
            {
              image: "/ads/حوالات داخلية.jpg",
              title: "الحوالات الداخلية", 
              description: "تحويلات آمنة وسريعة داخل العراق"
            },
            {
              image: "/ads/فروعنا.jpg",
              title: "فروعنا المنتشرة",
              description: "شبكة واسعة من الفروع في جميع أنحاء العراق"
            }
          ].map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}