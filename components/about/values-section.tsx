import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Target, Users, Award, Zap } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "الأمان والثقة",
      description: "نضمن أعلى مستويات الأمان في جميع معاملاتنا المالية مع الالتزام الكامل بالمعايير الدولية",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: "خدمة العملاء",
      description: "نضع عملاءنا في المقدمة ونسعى دائماً لتقديم أفضل خدمة وتجربة مميزة لكل عميل",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      icon: Target,
      title: "الدقة والشفافية",
      description: "نلتزم بالدقة في جميع عملياتنا والشفافية الكاملة في التعامل مع عملائنا",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "نؤمن بقوة العمل الجماعي وأهمية التعاون لتحقيق أفضل النتائج لعملائنا",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Award,
      title: "التميز والجودة",
      description: "نسعى للتميز في كل ما نقوم به ونلتزم بأعلى معايير الجودة في خدماتنا",
      gradient: "from-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-50 to-yellow-100"
    },
    {
      icon: Zap,
      title: "السرعة والكفاءة",
      description: "نقدم خدماتنا بأقصى سرعة وكفاءة ممكنة لتوفير الوقت والجهد على عملائنا",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground">قيمنا ومبادئنا</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            القيم والمبادئ التي نؤمن بها وتوجه عملنا في تقديم أفضل الخدمات المالية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-0 overflow-hidden">
              <div className={`bg-gradient-to-r ${value.bgGradient} p-1 rounded-2xl`}>
                <div className="bg-card rounded-2xl h-full">
                  <CardHeader className="pb-4 md:pb-6 pt-6 md:pt-8 px-6 md:px-8">
                    <CardTitle className="flex flex-col items-center gap-4 text-xl md:text-2xl text-center">
                      <div className={`p-4 md:p-5 bg-gradient-to-br ${value.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                        <value.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      </div>
                      <span className="font-black group-hover:text-primary transition-colors duration-300">{value.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium group-hover:text-foreground transition-colors duration-300 text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}