"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calculator, RefreshCw } from "lucide-react"
import { useExchangeRates } from "@/hooks/use-exchange-rates"
import { convertCurrency, formatRate, getCurrencySymbol } from "@/lib/exchange-rates"

export function CurrencyConverterCompact() {
  const [fromAmount, setFromAmount] = useState("1000")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("IQD")
  const [result, setResult] = useState("")
  const [mounted, setMounted] = useState(false)
  
  // استخدام hook أسعار الصرف الجديد
  const { rates, isLoading: ratesLoading, lastUpdated, error, refreshRates } = useExchangeRates()

  // تحديث النتيجة عند تغيير المدخلات أو الأسعار
  useEffect(() => {
    if (mounted && rates) {
      const amount = Number.parseFloat(fromAmount) || 0
      const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency, rates)
      
      // تحديد عدد الخانات العشرية
      const shouldShowDecimals = toCurrency !== "IQD" || convertedAmount < 100
      const formattedResult = convertedAmount.toLocaleString("en-US", {
        minimumFractionDigits: shouldShowDecimals ? 2 : 0,
        maximumFractionDigits: shouldShowDecimals ? 6 : 0,
      })
      
      const currencySymbol = getCurrencySymbol(toCurrency, rates)
      setResult(`${formattedResult} ${currencySymbol}`)
    }
  }, [fromAmount, fromCurrency, toCurrency, rates, mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  const swapCurrencies = () => {
    const tempCurrency = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(tempCurrency)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">محول العملات</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            أسعار صرف محدثة لحظياً لجميع العملات الرئيسية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
              <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-3">
                <Calculator className="h-6 w-6" />
                محول العملات المباشر
              </CardTitle>
              {error && (
                <p className="text-red-600 text-sm mt-2">خطأ في التحديث: {error}</p>
              )}
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* From Currency */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-primary">المبلغ المحول</label>
                  <Input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="text-xl font-bold h-12 rounded-xl border-2 border-primary/20 focus:border-primary"
                    placeholder="ادخل المبلغ"
                    dir="rtl"
                  />
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger className="h-12 rounded-xl border-2 border-primary/20">
                      <SelectValue>
                        {rates[fromCurrency] && (
                          <div className="flex items-center gap-3">
                            <img
                              src={rates[fromCurrency]?.flag}
                              alt={fromCurrency}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-bold">{fromCurrency}</span>
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {rates && Object.entries(rates).map(([code, info]) => (
                        <SelectItem key={code} value={code}>
                          <div className="flex items-center gap-3">
                            <img
                              src={info.flag}
                              alt={code}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-bold">{code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Swap Button */}
                <div className="flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-10">
                  <Button
                    onClick={swapCurrencies}
                    className="bg-accent hover:bg-accent/90 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <ArrowUpDown className="h-5 w-5" />
                  </Button>
                </div>

                {/* To Currency */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-secondary">المبلغ المحول إليه</label>
                  <Input
                    type="text"
                    value={ratesLoading ? "جاري التحديث..." : result || "0"}
                    readOnly
                    className="text-xl font-bold h-12 rounded-xl border-2 border-secondary/20 bg-secondary/5"
                  />
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger className="h-12 rounded-xl border-2 border-secondary/20">
                      <SelectValue>
                        {rates[toCurrency] && (
                          <div className="flex items-center gap-3">
                            <img
                              src={rates[toCurrency]?.flag}
                              alt={toCurrency}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-bold">{toCurrency}</span>
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {rates && Object.entries(rates).map(([code, info]) => (
                        <SelectItem key={code} value={code}>
                          <div className="flex items-center gap-3">
                            <img
                              src={info.flag}
                              alt={code}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-bold">{code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Exchange Rate Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-2">
                    1 {fromCurrency} = {rates ? formatRate(fromCurrency, toCurrency, rates) : "..."} {toCurrency}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>آخر تحديث: {mounted && lastUpdated ? lastUpdated.toLocaleTimeString("ar-IQ") : "--:--:--"}</span>
                    <Button
                      onClick={refreshRates}
                      disabled={ratesLoading}
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80"
                    >
                      <RefreshCw className={`h-4 w-4 ${ratesLoading ? "animate-spin" : ""}`} />
                      تحديث
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}