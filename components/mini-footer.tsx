import { Button } from "@/components/ui/button"
import { Phone, MapPin, ArrowLeft } from "lucide-react"

export function MiniFooter() {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Services */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <div className="space-y-2 text-white/90">
              <div>صرافة العملات</div>
              <div>دولار المسافرين</div>
              <div>الحوالات الداخلية</div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">الدعم</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0773 817 7776</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>بغداد - العرصات</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">ابدأ الآن</h3>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              تواصل معنا
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}