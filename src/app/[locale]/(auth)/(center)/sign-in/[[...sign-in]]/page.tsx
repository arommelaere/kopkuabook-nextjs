import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';
import { thTH, enUS } from '@clerk/localizations';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  
  // Use Thai localization for 'th' locale, otherwise use English
  const localization = locale === 'th' ? thTH : enUS;

  return (
    <SignIn 
      path={getI18nPath('/sign-in', locale)} 
      localization={localization} 
    />
  );
};
