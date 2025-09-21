import { Card, CardContent } from "@/components/ui/card"

export function ContentSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-right">
                  نبذة عن الشركة
                </h2>
                
                <div className="space-y-6 text-right leading-relaxed text-gray-700">
                  <p className="text-lg">
                    شركة السلة للصرافة هي إحدى الشركات الرائدة في مجال الخدمات المالية في العراق، 
                    تأسست الشركة بهدف تقديم خدمات صرافة متميزة وموثوقة للعملاء في جميع أنحاء البلاد.
                  </p>
                  
                  <p>
                    منذ تأسيسها، التزمت الشركة بتقديم أفضل الخدمات المالية وفقاً لأعلى معايير الجودة والأمان، 
                    وحرصت على بناء علاقات طويلة الأمد مع عملائها من خلال الثقة والشفافية في جميع المعاملات.
                  </p>
                  
                  <p>
                    تتميز شركة السلة للصرافة بشبكة واسعة من الفروع المنتشرة في المحافظات العراقية المختلفة، 
                    مما يضمن سهولة الوصول إلى خدماتها لجميع العملاء في مختلف المناطق.
                  </p>
                  
                  <p>
                    كما تحرص الشركة على مواكبة أحدث التطورات في مجال الخدمات المالية والتكنولوجيا المصرفية، 
                    لضمان تقديم خدمات عصرية وسريعة تلبي احتياجات العملاء المتنوعة.
                  </p>
                  
                  <p>
                    تعمل الشركة وفقاً لتعليمات البنك المركزي العراقي وتلتزم بجميع القوانين واللوائح المنظمة 
                    لعمل شركات الصرافة في العراق، مما يضمن الأمان والموثوقية في جميع المعاملات.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Company Stats */}
            <Card className="shadow-lg border-0 bg-primary text-white overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-center">إنجازاتنا</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">15+</div>
                      <div className="text-sm opacity-90">سنة من الخبرة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">20+</div>
                      <div className="text-sm opacity-90">فرع في العراق</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">50,000+</div>
                      <div className="text-sm opacity-90">عميل راضٍ</div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Services Quick Links */}
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">خدماتنا الرئيسية</h3>
                <div className="space-y-3">
                  {[
                    "صرافة العملات الأجنبية",
                    "بيع دولار المسافرين", 
                    "الحوالات الداخلية",
                    "صرف الرواتب",
                    "خدمات مصرفية متنوعة"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-0 bg-gray-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-right">تواصل معنا</h3>
                <div className="space-y-4">
                  <div className="text-right">
                    <div className="font-semibold mb-1">الهاتف</div>
                    <div className="text-gray-300">0773 817 7776</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold mb-1">العنوان</div>
                    <div className="text-gray-300">بغداد - العرصات</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold mb-1">ساعات العمل</div>
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