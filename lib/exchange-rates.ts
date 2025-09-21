// مركز إدارة أسعار الصرف
export interface ExchangeRate {
    rate: number;
    symbol: string;
    flag: string;
    name: string;
}

export interface ExchangeRates {
    [key: string]: ExchangeRate;
}

// الأسعار الافتراضية (fallback) - مقابل الدولار الأمريكي (USD) بتاريخ 21 سبتمبر 2025
export const defaultExchangeRates: ExchangeRates = {
    USD: { rate: 1, symbol: "$", flag: "/flags/USD - US Dollar.svg", name: "دولار أمريكي" },
    EUR: { rate: 0.92, symbol: "€", flag: "/flags/EUR - Euro.svg", name: "يورو" },
    GBP: { rate: 0.79, symbol: "£", flag: "/flags/GBP - British Pound.svg", name: "جنيه إسترليني" },
    SAR: { rate: 3.75, symbol: "﷼", flag: "/flags/SAR - Saudi Arabian Riyal.svg", name: "ريال سعودي" },
    AED: { rate: 3.67, symbol: "د.إ", flag: "/flags/AED - Emirati Dirham.svg", name: "درهم إماراتي" },
    KWD: { rate: 0.31, symbol: "د.ك", flag: "/flags/KWD - Kuwaiti Dinar.svg", name: "دينار كويتي" },
    IQD: { rate: 1310, symbol: "د.ع", flag: "/flags/IQD - Iraqi Dinar.svg", name: "دينار عراقي" },
    AUD: { rate: 1.50, symbol: "A$", flag: "/flags/AUD - Australian Dollar.svg", name: "دولار أسترالي" },
    CAD: { rate: 1.36, symbol: "C$", flag: "/flags/CAD - Canadian Dollar.svg", name: "دولار كندي" },
    BHD: { rate: 0.38, symbol: ".د.ب", flag: "/flags/BHD - Bahraini Dinar.svg", name: "دينار بحريني" },
    JOD: { rate: 0.71, symbol: "د.أ", flag: "/flags/JOD - Jordanian Dinar.svg", name: "دينار أردني" },
    OMR: { rate: 0.38, symbol: "ر.ع.", flag: "/flags/OMR - Omani Rial.svg", name: "ريال عماني" },
    QAR: { rate: 3.64, symbol: "ر.ق", flag: "/flags/QAR - Qatari Riyal.svg", name: "ريال قطري" },
};

// جلب أسعار الصرف من API (USD كأساس)
export async function fetchExchangeRates(): Promise<ExchangeRates> {
    try {
        const response = await fetch("https://api.exchangerate.host/latest?base=USD", {
            next: { revalidate: 3600 }, // تحديث كل ساعة
        });

        if (!response.ok) {
            throw new Error("فشل في جلب أسعار الصرف");
        }

        const data = await response.json();
        const updatedRates: ExchangeRates = { ...defaultExchangeRates };

        // تحديث الأسعار من الـ API
        Object.keys(defaultExchangeRates).forEach((currency) => {
            if (currency === "IQD") {
                // نضبطه يدويًا لأنه مش دقيق في الـ APIs
                updatedRates[currency].rate = 1310;
            } else if (data.rates[currency]) {
                updatedRates[currency].rate = parseFloat(data.rates[currency].toFixed(4));
            }
        });

        return updatedRates;
    } catch (error) {
        console.warn("فشل في جلب أسعار الصرف، استخدام الأسعار الافتراضية:", error);
        return defaultExchangeRates;
    }
}

// تحويل العملات
export function convertCurrency(
    amount: number,
    from: string,
    to: string,
    rates: ExchangeRates
): number {
    const fromRate = rates[from]?.rate || 1;
    const toRate = rates[to]?.rate || 1;
    return (amount / fromRate) * toRate;
}

// تنسيق الأسعار للعرض
export function formatRate(from: string, to: string, rates: ExchangeRates): string {
    return convertCurrency(1, from, to, rates).toFixed(6);
}

// الحصول على رمز العملة
export function getCurrencySymbol(currency: string, rates: ExchangeRates): string {
    return rates[currency]?.symbol || "";
}