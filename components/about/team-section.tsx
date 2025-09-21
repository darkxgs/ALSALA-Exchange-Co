import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, TrendingUp } from "lucide-react"

export function TeamSection() {
  const teamStats = [
    {
      icon: Users,
      number: "50+",
      title: "موظف متخصص",
      description: "فريق عمل محترف ومتخصص في مجال الصرافة والخدمات المالية",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      number: "15+",
      title: "سنة خبرة متراكمة",
      description: "خبرة واسعة في السوق العراقي ومعرفة عميقة بمتطلبات العملاء",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      number: "24/7",
      title: "خدمة مستمرة",
      description: "فريق دعم متاح على مدار الساعة لخدمة عملائنا الكرام",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      number: "100%",
      title: "التزام بالجودة",
      description: "التزام كامل بتقديم أعلى مستويات الجودة والخدمة المتميزة",
      gradient: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground">فريق العمل</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            فريق متخصص ومحترف يعمل بجد لتقديم أفضل الخدمات المالية وضمان رضا العملاء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-0 overflow-hidden bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6 md:p-8 text-center">
                <div className={`p-4 md:p-5 bg-gradient-to-br ${stat.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl mx-auto mb-6 w-fit`}>
                  <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                
                <div className="space-y-4">
                  <div className="text-4xl md:text-5xl font-black text-primary group-hover:text-secondary transition-colors">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                    {stat.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-medium group-hover:text-foreground transition-colors">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary/20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-6">
              انضم إلى فريق العمل
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا المحترف
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                الوظائف المتاحة
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                أرسل سيرتك الذاتية
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}