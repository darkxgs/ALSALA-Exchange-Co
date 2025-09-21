import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Building, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: DollarSign,
      title: "صرافة العملات",
      description: "نقوم بصرف العملات الأجنبية بأفضل الأسعار في السوق مع ضمان الجودة والأمان",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: CreditCard,
      title: "بيع دولار المسافرين",
      description: "خدمة بيع دولار المسافرين للمسافرين من قبل البنك المركزي العراقي في كافة فروع الشركة",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      icon: Building,
      title: "حوالات داخلية",
      description: "خدمة الحوالات الداخلية السريعة والآمنة داخل العراق وتوصيلها من الباب إلى الباب",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: Users,
      title: "صرف الرواتب",
      description: "خدمة صرف رواتب الموظفين والمتقاعدين من الشركات والمؤسسات الحكومية",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">خدماتنا المتميزة</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          نقدم مجموعة شاملة من الخدمات المالية والمصرفية بأعلى معايير الجودة والأمان
        </p>
      </div>

      <div className="grid gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden cursor-pointer bg-white">
            <CardHeader className="pb-4 pt-6 px-6">
              <CardTitle className="flex items-center gap-4 text-xl">
                <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-lg group-hover:scale-105 transition-all duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{service.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
