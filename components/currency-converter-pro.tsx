"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calculator, TrendingUp, RefreshCw, Zap, Shield, Clock } from "lucide-react"
import { useExchangeRates } from "@/hooks/use-exchange-rates"
import { convertCurrency, formatRate, getCurrencySymbol } from "@/lib/exchange-rates"

export function CurrencyConverterPro() {
  const [fromAmount, setFromAmount] = useState("1000")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("IQD")
  const [result, setResult] = useState("")
  const [mounted, setMounted] = useState(false)
  
  const { rates, isLoading: ratesLoading, lastUpdated, error, refreshRates } = useExchangeRates()

  useEffect(() => {
    if (mounted && rates) {
      const amount = Number.parseFloat(fromAmount) || 0
      const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency, rates)
      
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
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        </div>

        <div className="relative z-10">
          <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary p-8 text-white">
            <CardTitle className="text-3xl md:text-4xl font-black flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Calculator className="h-10 w-10 text-accent" />
                </div>
              </div>
              محول العملات الاحترافي
            </CardTitle>
            <p className="text-white/95 text-lg md:text-xl font-semibold mt-4 leading-relaxed max-w-2xl mx-auto">
              أسعار صرف دقيقة ومحدثة لحظياً لجميع العملات الرئيسية مع ضمان أفضل الأسعار
              {error && (
                <span className="text-red-200 block text-base mt-3 bg-red-500/20 px-4 py-2 rounded-full border border-red-300/30">
                  خطأ في التحديث: {error}
                </span>
              )}
            </p>
          </CardHeader>
        </div>

        <CardContent className="p-8 md:p-10 relative z-10 bg-gradient-to-b from-white/80 to-white/95 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xl font-black text-primary flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    المبلغ المحول
                  </label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={refreshRates}
                    disabled={ratesLoading}
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-3 rounded-xl transition-all duration-300 touch-manipulation border-2 border-primary/20 hover:border-primary/40"
                  >
                    <RefreshCw className={`h-5 w-5 ${ratesLoading ? "animate-spin" : ""}`} />
                  </Button>
                </div>

                <div className="space-y-4">
                  <Input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="bg-white border-2 border-primary/30 text-primary placeholder:text-primary/50 text-2xl font-black h-16 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 px-6 shadow-xl touch-manipulation hover:shadow-2xl hover:scale-[1.02]"
                    placeholder="ادخل المبلغ"
                    dir="rtl"
                  />

                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger className="flex items-center justify-between gap-4 px-6 py-4 w-full bg-white border-2 border-primary/30 text-primary font-bold text-lg h-16 rounded-2xl shadow-xl transition-all duration-300 hover:bg-primary/5 hover:border-primary/50 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 touch-manipulation">
                      <SelectValue>
                        <div className="flex items-center gap-4">
                          <img
                            src={rates[fromCurrency]?.flag}
                            alt={fromCurrency}
                            className="w-10 h-7 object-cover rounded-lg shadow-md"
                          />
                          <div className="flex flex-col items-start">
                            <span className="font-black text-lg">{fromCurrency}</span>
                            <span className="text-sm text-primary/70 truncate">{rates[fromCurrency]?.name}</span>
                          </div>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl shadow-2xl border-2 border-primary/20 bg-white backdrop-blur-xl">
                      {Object.entries(rates).map(([code, info]) => (
                        <SelectItem key={code} value={code} className="text-lg py-4 px-6 hover:bg-primary/10 focus:bg-primary/10 transition-all duration-200 cursor-pointer touch-manipulation rounded-xl m-2">
                          <div className="flex items-center gap-4">
                            <img
                              src={info.flag}
                              alt={code}
                              className="w-10 h-7 object-cover rounded-lg shadow-md"
                            />
                            <div className="flex flex-col items-start">
                              <span className="font-black text-lg text-primary">{code}</span>
                              <span className="text-sm text-muted-foreground">{info.name}</span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={swapCurrencies}
                  className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-180 touch-manipulation border-2 border-accent/30"
                >
                  <ArrowUpDown className="h-6 w-6 transition-transform duration-300" />
                </Button>
              </div>

              <div className="space-y-4">
                <label className="text-xl font-black text-secondary flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  المبلغ المحول إليه
                </label>

                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      value={ratesLoading ? "جاري التحديث..." : result || "0"}
                      readOnly
                      className="bg-gradient-to-r from-green-50 to-accent/10 border-2 border-secondary/50 text-secondary text-2xl font-black h-16 rounded-2xl px-6 shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-green-500/5 rounded-2xl pointer-events-none animate-pulse"></div>
                  </div>

                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger className="flex items-center justify-between gap-4 px-6 py-4 w-full bg-white border-2 border-secondary/30 text-secondary font-bold text-lg h-16 rounded-2xl shadow-xl transition-all duration-300 hover:bg-secondary/5 hover:border-secondary/50 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 touch-manipulation">
                      <SelectValue>
                        <div className="flex items-center gap-4">
                          <img
                            src={rates[toCurrency]?.flag}
                            alt={toCurrency}
                            className="w-10 h-7 object-cover rounded-lg shadow-md"
                          />
                          <div className="flex flex-col items-start">
                            <span className="font-black text-lg">{toCurrency}</span>
                            <span className="text-sm text-secondary/70 truncate">{rates[toCurrency]?.name}</span>
                          </div>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl shadow-2xl border-2 border-secondary/20 bg-white backdrop-blur-xl">
                      {Object.entries(rates).map(([code, info]) => (
                        <SelectItem key={code} value={code} className="text-lg py-4 px-6 hover:bg-secondary/10 focus:bg-secondary/10 transition-all duration-200 cursor-pointer touch-manipulation rounded-xl m-2">
                          <div className="flex items-center gap-4">
                            <img
                              src={info.flag}
                              alt={code}
                              className="w-10 h-7 object-cover rounded-lg shadow-md"
                            />
                            <div className="flex flex-col items-start">
                              <span className="font-black text-lg text-secondary">{code}</span>
                              <span className="text-sm text-muted-foreground">{info.name}</span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-6 space-y-6 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-accent/20 to-yellow-400/20 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-black text-2xl text-primary">أسعار الصرف المباشرة</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                      <div className="font-black text-primary text-xl mb-2">
                        1 {fromCurrency} = {formatRate(fromCurrency, toCurrency, rates)} {toCurrency}
                      </div>
                      <div className="font-semibold text-secondary text-lg">
                        1 {toCurrency} = {formatRate(toCurrency, fromCurrency, rates)} {fromCurrency}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/80 px-4 py-3 rounded-xl border border-primary/20 shadow-md">
                      <div className="flex items-center gap-2 text-sm text-primary/70 mb-1">
                        <Clock className="h-4 w-4" />
                        آخر تحديث
                      </div>
                      <div className="font-bold text-primary">
                        {mounted && lastUpdated ? lastUpdated.toLocaleTimeString("ar-IQ") : "--:--:--"}
                      </div>
                    </div>
                    <div className={`px-4 py-3 rounded-xl font-semibold shadow-md border ${ratesLoading ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        {ratesLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Shield className="h-4 w-4" />}
                        حالة الأسعار
                      </div>
                      <div className="font-bold">
                        {ratesLoading ? 'جاري التحديث...' : 'أسعار مباشرة'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">تحديث فوري</div>
                      <div className="text-sm text-muted-foreground">أسعار محدثة كل ثانية</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-secondary/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary">دقة عالية</div>
                      <div className="text-sm text-muted-foreground">أسعار موثوقة ومضمونة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={refreshRates}
              disabled={ratesLoading}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 font-black py-4 px-8 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl touch-manipulation border-2 border-primary/30"
              size="lg"
            >
              {ratesLoading ? (
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-6 w-6 animate-spin" />
                  جاري تحديث الأسعار...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-6 w-6" />
                  تحديث الأسعار الآن
                </div>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}