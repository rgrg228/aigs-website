import type { Dictionary } from "./types";
import type { Locale } from "./config";
import en from "./dictionaries/en";
import zh from "./dictionaries/zh";

const DICTS: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return DICTS[locale] ?? DICTS.en;
}
