import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type LanguageCode, type Translations } from "@/lib/translations";

const STORAGE_KEY = "bonanza-language";

function readStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") return "fr";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (translations as Record<string, unknown>)[stored]) return stored as LanguageCode;
  } catch {
    // ignore
  }
  return "fr";
}

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("fr");
  useEffect(() => {
    setLanguageState(readStoredLanguage());
  }, []);
  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
