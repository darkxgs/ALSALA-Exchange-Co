import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["0773 817 7776", "0783 816 7777"],
      description: "متاح على مدار الساعة",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@alsala.iq", "support@alsala.iq"],
      description: "سنرد خلال 24 ساعة",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: MapPin,
      title: "العنوان الرئيسي",
      details: ["بغداد - العرصات", "شارع نادي الهندية"],
      description: "الفرع الرئيسي",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["السبت - الخميس", "8:00 ص - 6:00 م"],
      description: "عطلة يوم الجمعة",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ]

  const socialLinks = [
    {
      icon: MessageCircle,
      title: "واتساب",
      link: "https://wa.me/9647738177776",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "الموقع الإلكتروني",
      link: "https://alsala.iq",
      color: "from-blue-500 to-blue-600"
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl overflow-hidden">
        <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
          <CardTitle className="text-2xl md:text-3xl font-black flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            معلومات التواصل
          </CardTitle>
          <p className="text-muted-foreground font-medium mt-2">طرق متعددة للتواصل معنا</p>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-gradient-to-r ${method.bgColor} p-1 rounded-2xl`}>
              <div className="bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${method.color} rounded-xl shadow-lg`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                    <div className="space-y-1 mb-2">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground font-semibold">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl overflow-hidden">
        <CardHeader className="text-center bg-gradient-to-r from-accent/10 to-yellow-400/10 border-b border-accent/20">
          <CardTitle className="text-xl md:text-2xl font-black flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-to-br from-accent to-yellow-400 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            تواصل سريع
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          <div className="grid gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{social.title}</h4>
                  <p className="text-sm text-muted-foreground">انقر للتواصل المباشر</p>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-primary/20">
        <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 text-center">
          نصائح للتواصل السريع
        </h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>للاستفسارات العاجلة، يفضل الاتصال المباشر</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>للاستفسارات التفصيلية، استخدم نموذج الاتصال</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>واتساب متاح للتواصل السريع والمباشر</span>
          </li>
        </ul>
      </div>
    </div>
  )
}