import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, thTH } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['th', 'en'],
  defaultLocale: 'th',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  th: thTH,
};

export const ClerkLocalizations = {
  defaultLocale: thTH,
  supportedLocales,
};
