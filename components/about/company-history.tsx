import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"

export function CompanyHistory() {
  const milestones = [
    {
      year: "2008",
      title: "تأسيس الشركة",
      description: "بدأت شركة السلة للصرافة أعمالها في بغداد كشركة متخصصة في صرافة العملات",
      icon: Calendar,
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2012",
      title: "التوسع الأول",
      description: "افتتاح أول فروع خارج بغداد وبداية الانتشار في المحافظات العراقية",
      icon: MapPin,
      color: "from-green-500 to-green-600"
    },
    {
      year: "2016",
      title: "الحصول على التراخيص",
      description: "الحصول على كافة التراخيص والموافقات من البنك المركزي العراقي",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2020",
      title: "الريادة في السوق",
      description: "أصبحت الشركة من أكبر شركات الصرافة في العراق مع أكثر من 15 فرع",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground">تاريخ الشركة</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            رحلة نجاح مستمرة منذ أكثر من 15 عاماً في خدمة العملاء وتقديم أفضل الخدمات المالية
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-0 overflow-hidden">
              <div className={`bg-gradient-to-r ${milestone.color.replace('to-', 'to-').replace('from-', 'from-').replace('-500', '-50').replace('-600', '-100')} p-1 rounded-2xl`}>
                <div className="bg-card rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 md:p-5 bg-gradient-to-br ${milestone.color} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                          <milestone.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                        </div>
                        <div className="text-4xl md:text-5xl font-black text-primary group-hover:text-secondary transition-colors">
                          {milestone.year}
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg font-medium group-hover:text-foreground transition-colors">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
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