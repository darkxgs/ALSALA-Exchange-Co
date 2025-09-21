"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowLeft, ArrowRight } from "lucide-react"

export function BranchesCompact() {
  const [showAll, setShowAll] = useState(false)
  
  const branches = [
    {
      name: "الفرع الرئيسي",
      address: "بغداد – العرصات – شارع نادي الهندية",
      phone: "0773 817 7776",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "فرع حي الجامعة",
      address: "بغداد – شارع الربيع – مقابل مصرف سومر",
      phone: "0776 661 9991",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "فرع المنصور",
      address: "بغداد – شارع 14 رمضان – مقابل مطعم الجنودل",
      phone: "0776 662 9992",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "فرع العمارة",
      address: "ميسان – شارع دجلة – مجاور السوق الكبير",
      phone: "0775 295 9444",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      name: "فرع حافظ القاضي",
      address: "بغداد – شارع الرشيد – ساحة حافظ القاضي",
      phone: "0776 663 9996",
      gradient: "from-red-500 to-red-600"
    }
  ]

  const displayedBranches = showAll ? branches : branches.slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">فروعنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            شبكة واسعة من الفروع في بغداد والمحافظات لخدمتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedBranches.map((branch, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${branch.gradient} rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{branch.address}</p>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-accent/10 rounded-lg">
                        <Phone className="h-4 w-4 text-accent" />
                      </div>
                      <a 
                        href={`tel:${branch.phone}`} 
                        className="hover:text-primary transition-colors font-semibold text-sm"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
          >
            {showAll ? (
              <>
                عرض أقل
                <ArrowRight className="mr-2 h-5 w-5" />
              </>
            ) : (
              <>
                عرض جميع الفروع
                <ArrowLeft className="mr-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}