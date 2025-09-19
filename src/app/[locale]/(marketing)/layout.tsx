import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

export default async function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = props.params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar locale={locale} />
      <div>
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}
