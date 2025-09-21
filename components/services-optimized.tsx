"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, CreditCard, Building, ArrowLeft, ArrowRight } from "lucide-react"

export function ServicesOptimized() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const services = [
    {
      icon: DollarSign,
      title: "صرافة العملات",
      description: "أفضل أسعار الصرف في السوق العراقي مع ضمان الجودة والأمان",
      image: "/ads/خدمة صرف الدولار.jpg",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      title: "دولار المسافرين",
      description: "بيع دولار المسافرين بأسعار تنافسية في جميع فروعنا",
      image: "/ads/بيع الدولار للمسافرين.jpg",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Building,
      title: "الحوالات الداخلية",
      description: "حوالات سريعة وآمنة داخل العراق من الباب إلى الباب",
      image: "/ads/حوالات داخلية.jpg",
      gradient: "from-purple-500 to-purple-600"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا الرئيسية</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم أفضل الخدمات المالية بأعلى معايير الجودة والأمان
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative h-64">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Single Card Display */}
        <div className="md:hidden">
          <Card className="overflow-hidden shadow-lg border-0 bg-white">
            <div className="relative h-64">
              <img 
                src={services[currentSlide].image}
                alt={services[currentSlide].title}
                className="w-full h-full object-contain bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${services[currentSlide].gradient} rounded-xl shadow-lg`}>
                {(() => {
                  const IconComponent = services[currentSlide].icon
                  return <IconComponent className="h-6 w-6 text-white" />
                })()}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[currentSlide].title}</h3>
              <p className="text-gray-600 leading-relaxed">{services[currentSlide].description}</p>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="rounded-full p-4 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-4 rounded-full transition-all duration-300 shadow-sm ${
                    index === currentSlide ? 'bg-primary w-10' : 'bg-gray-300 w-4 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="rounded-full p-4 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const currencySection = document.getElementById('currency-converter')
              currencySection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            جرب محول العملات
            <ArrowLeft className="mr-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}