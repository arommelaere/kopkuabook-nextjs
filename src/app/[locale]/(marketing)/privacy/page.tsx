import Container from "@/components/container";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Privacy" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Privacy() {
  const t = useTranslations("Privacy");

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">{t("last_updated")}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("section1_title")}</h2>
          <p>{t("section1_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("section2_title")}</h2>
          <p>{t("section2_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("section3_title")}</h2>
          <p>{t("section3_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("section4_title")}</h2>
          <p>{t("section4_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("data_title")}</h2>
          <p>{t("data_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("cookies_title")}</h2>
          <p>{t("cookies_content")}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("contact_title")}</h2>
          <p>{t("contact_content")}</p>
        </section>
      </div>
    </Container>
  );
}
