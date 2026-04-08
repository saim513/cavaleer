"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { dictionaries, type Locale } from "@/lib/site-data";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: (typeof dictionaries)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "cavaleer-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;

    if (stored === "en" || stored === "nl") {
      setLocaleState(stored);
      return;
    }

    const browserLocale = navigator.language.toLowerCase();
    if (browserLocale.startsWith("nl")) {
      setLocaleState("nl");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      dictionary: dictionaries[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
