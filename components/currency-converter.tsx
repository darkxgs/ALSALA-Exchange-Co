"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calculator, TrendingUp, RefreshCw } from "lucide-react"
import { useExchangeRates } from "@/hooks/use-exchange-rates"
import { convertCurrency, formatRate, getCurrencySymbol } from "@/lib/exchange-rates"

export function CurrencyConverter() {
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
    <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10">
        <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <CardTitle className="text-2xl md:text-3xl font-black flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Calculator className="h-8 w-8 text-accent" />
              </div>
            </div>
            محول العملات الاحترافي
          </CardTitle>
          <p className="text-white/95 text-base md:text-lg font-semibold mt-3 leading-relaxed">
            أسعار صرف دقيقة ومحدثة لحظياً لجميع العملات
            {error && <span className="text-red-200 block text-sm mt-2 bg-red-500/20 px-3 py-1 rounded-full">خطأ في التحديث: {error}</span>}
          </p>
        </CardHeader>
      </div>

      <CardContent className="space-y-6 p-6 md:p-8 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="space-y-6">
          {/* From Currency Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-lg font-bold text-primary flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                المبلغ المحول
              </label>
              <Button
                variant="ghost"
                size="sm"
                onClick={refreshRates}
                disabled={ratesLoading}
                className="text-primary hover:text-primary/80 hover:bg-primary/10 p-2 rounded-xl transition-all duration-300 touch-manipulation border border-primary/20"
              >
                <RefreshCw className={`h-5 w-5 ${ratesLoading ? "animate-spin" : ""}`} />
              </Button>
            </div>

            <div className="space-y-3">
              <Input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="bg-white border-2 border-primary/20 text-primary placeholder:text-primary/50 text-xl font-bold h-14 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 px-4 shadow-lg touch-manipulation hover:shadow-xl"
                placeholder="ادخل المبلغ"
                dir="rtl"
              />

              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="flex items-center justify-between gap-3 px-4 py-3 w-full bg-white border-2 border-primary/20 text-primary font-bold text-base h-14 rounded-xl shadow-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 touch-manipulation">
                  <SelectValue>
                    <div className="flex items-center gap-3">
                      <img
                        src={rates[fromCurrency]?.flag}
                        alt={fromCurrency}
                        className="w-8 h-6 object-cover rounded-md shadow-sm"
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-base">{fromCurrency}</span>
                        <span className="text-sm text-primary/70 truncate">{rates[fromCurrency]?.name}</span>
                      </div>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="rounded-lg shadow-xl border-2 border-primary-foreground/20 bg-card/95 backdrop-blur-xl">
                  {Object.entries(rates).map(([code, info]) => (
                    <SelectItem key={code} value={code} className="text-sm md:text-base py-2 px-3 hover:bg-accent/10 focus:bg-accent/10 transition-all duration-200 cursor-pointer touch-manipulation">
                      <div className="flex items-center gap-2">
                        <img
                          src={info.flag}
                          alt={code}
                          className="w-6 h-4 object-cover rounded-sm shadow-sm"
                        />
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-sm md:text-base">{code}</span>
                          <span className="text-xs text-muted-foreground">{info.name}</span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={swapCurrencies}
              className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-180 touch-manipulation"
            >
              <ArrowUpDown className="h-4 w-4 transition-transform duration-300" />
            </Button>
          </div>

          {/* To Currency Section */}
          <div className="space-y-3">
            <label className="text-base font-bold text-primary-foreground/95">المبلغ المحول إليه</label>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="text"
                  value={ratesLoading ? "جاري التحديث..." : result || "0"}
                  readOnly
                  className="bg-gradient-to-r from-green-500/20 to-accent/20 border-2 border-accent/50 text-primary-foreground text-base md:text-lg font-black h-10 md:h-12 rounded-lg backdrop-blur-sm px-3 md:px-4 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-green-500/10 rounded-lg pointer-events-none animate-pulse"></div>
              </div>

              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="flex items-center justify-between gap-3 px-3 md:px-4 py-2 w-full bg-primary-foreground/20 border-2 border-primary-foreground/30 text-primary-foreground font-bold text-sm md:text-base h-10 md:h-12 rounded-lg backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-primary-foreground/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 touch-manipulation">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <img
                        src={rates[toCurrency]?.flag}
                        alt={toCurrency}
                        className="w-6 h-4 md:w-8 md:h-5 object-cover rounded-sm"
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-sm md:text-base">{toCurrency}</span>
                        <span className="text-xs text-primary-foreground/70 truncate">{rates[toCurrency]?.name}</span>
                      </div>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="rounded-lg shadow-xl border-2 border-primary-foreground/20 bg-card/95 backdrop-blur-xl">
                  {Object.entries(rates).map(([code, info]) => (
                    <SelectItem key={code} value={code} className="text-sm md:text-base py-2 px-3 hover:bg-accent/10 focus:bg-accent/10 transition-all duration-200 cursor-pointer touch-manipulation">
                      <div className="flex items-center gap-2">
                        <img
                          src={info.flag}
                          alt={code}
                          className="w-6 h-4 object-cover rounded-sm shadow-sm"
                        />
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-sm md:text-base">{code}</span>
                          <span className="text-xs text-muted-foreground">{info.name}</span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <Button
          onClick={refreshRates}
          disabled={ratesLoading}
          className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-black py-2 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg touch-manipulation"
          size="sm"
        >
          {ratesLoading ? (
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" />
              جاري التحديث...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              تحديث الأسعار
            </div>
          )}
        </Button>

        {/* Enhanced Exchange Rate Display */}
        <div className="bg-gradient-to-r from-primary-foreground/15 to-primary-foreground/10 rounded-lg p-4 space-y-4 backdrop-blur-sm border border-primary-foreground/20">
          <div className="text-center text-primary-foreground/90">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-accent/20 to-yellow-400/20 rounded-lg">
                <TrendingUp className="h-4 w-4 text-accent" />
              </div>
              <span className="font-bold text-lg">أسعار الصرف الحالية</span>
            </div>

            {/* Exchange Rate Display */}
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <div className="font-black text-accent text-base md:text-lg">
                    1 {fromCurrency} = {formatRate(fromCurrency, toCurrency, rates)} {toCurrency}
                  </div>
                </div>
                <div className="text-center p-3 bg-primary-foreground/10 rounded-lg">
                  <div className="font-semibold text-primary-foreground/80 text-base md:text-lg">
                    1 {toCurrency} = {formatRate(toCurrency, fromCurrency, rates)} {fromCurrency}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-primary-foreground/70 mt-4">
              <div className="bg-primary-foreground/10 px-4 py-2 rounded-full">
                آخر تحديث: {mounted && lastUpdated ? lastUpdated.toLocaleTimeString("ar-IQ") : "--:--:--"}
              </div>
              <div className={`px-4 py-2 rounded-full font-semibold ${ratesLoading ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'}`}>
                {ratesLoading ? 'جاري التحديث...' : 'أسعار مباشرة'}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}