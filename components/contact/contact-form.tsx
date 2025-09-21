"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      // Reset form or show success message
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
        <CardTitle className="text-2xl md:text-3xl font-black flex items-center justify-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
          أرسل رسالة
        </CardTitle>
        <p className="text-muted-foreground font-medium mt-2">سنتواصل معك في أقرب وقت ممكن</p>
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                الاسم الكامل
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                placeholder="example@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              رقم الهاتف
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              placeholder="07XX XXX XXXX"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">موضوع الرسالة</label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300">
                <SelectValue placeholder="اختر موضوع الرسالة" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="exchange">استفسار عن أسعار الصرف</SelectItem>
                <SelectItem value="services">استفسار عن الخدمات</SelectItem>
                <SelectItem value="branches">استفسار عن الفروع</SelectItem>
                <SelectItem value="complaint">شكوى أو اقتراح</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">الرسالة</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="min-h-32 rounded-xl border-2 focus:border-primary transition-all duration-300 resize-none"
              placeholder="اكتب رسالتك هنا..."
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                جاري الإرسال...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                إرسال الرسالة
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}