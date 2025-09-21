import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

export function Branches() {
  const branches = [
    {
      name: "الفرع الرئيسي",
      address: "بغداد – العرصات – شارع نادي الهندية",
      phones: ["0773 817 7776", "0783 816 7777"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      name: "فرع حي الجامعة",
      address: "بغداد – شارع الربيع – مقابل مصرف سومر التجاري",
      phones: ["0776 661 9991", "0782 001 1007"],
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      name: "فرع المنصور",
      address: "بغداد – شارع 14 رمضان – مقابل مطعم الجنودل",
      phones: ["0776 662 9992", "0782 200 1008"],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      name: "فرع العمارة",
      address: "ميسان – شارع دجلة – مجاور السوق الكبير",
      phones: ["0775 295 9444", "0780 562 8828"],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
    },
    {
      name: "فرع حافظ القاضي",
      address: "بغداد – شارع الرشيد – ساحة حافظ القاضي",
      phones: ["0776 663 9996", "0782 200 1009"],
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
    },
  ]

  return (
    <section id="branches" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">فروعنا</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            شركة السلة للصرافة تخدمكم من خلال فروعها المنتشرة في بغداد والمحافظات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/20 overflow-hidden bg-white">
              <CardHeader className="pb-4 p-6">
                <CardTitle className="flex items-center gap-4 text-lg text-gray-900">
                  <div className={`p-3 bg-gradient-to-br ${branch.gradient} rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold group-hover:text-primary transition-colors">{branch.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <p className="text-gray-600 leading-relaxed text-base">{branch.address}</p>
                <div className="space-y-3">
                  {branch.phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center gap-3 group/phone">
                      <div className="p-2 bg-accent/10 rounded-lg group-hover/phone:bg-accent/20 transition-colors">
                        <Phone className="h-4 w-4 text-accent" />
                      </div>
                      <a 
                        href={`tel:${phone}`} 
                        className="hover:text-primary transition-colors font-semibold text-base touch-manipulation min-h-[44px] flex items-center"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}