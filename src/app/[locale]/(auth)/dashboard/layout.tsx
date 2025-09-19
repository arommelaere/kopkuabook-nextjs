import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/navbar/navbar';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale} isAuthenticated={true} />
      <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 py-8">
        {props.children}
      </div>
    </div>
  );
}
