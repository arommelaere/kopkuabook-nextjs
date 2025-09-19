import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';
import { thTH, enUS } from '@clerk/localizations';

type ISignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignUpPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignUpPage(props: ISignUpPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  
  // Use Thai localization for 'th' locale, otherwise use English
  const localization = locale === 'th' ? thTH : enUS;

  return (
    <SignUp 
      path={getI18nPath('/sign-up', locale)} 
      localization={localization}
    />
  );
};
