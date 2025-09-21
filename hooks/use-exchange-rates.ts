"use client"

import { useState, useEffect, useCallback } from 'react';
import { ExchangeRates, defaultExchangeRates, fetchExchangeRates } from '@/lib/exchange-rates';

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRates>(defaultExchangeRates);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateRates = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newRates = await fetchExchangeRates();
      setRates(newRates);
      setLastUpdated(new Date());
    } catch (err) {
      setError('فشل في تحديث أسعار الصرف');
      console.error('خطأ في تحديث أسعار الصرف:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // تحديث الأسعار عند تحميل المكون
    updateRates();
    
    // تحديث الأسعار كل 30 دقيقة
    const interval = setInterval(updateRates, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [updateRates]);

  return {
    rates,
    isLoading,
    lastUpdated,
    error,
    refreshRates: updateRates
  };
}