import Container from "@/components/container";
import { Metadata } from "next";
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
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function Privacy({
  params: { locale },
}: {
  params: { locale: string };
}) {

  let content = null;
  // Conditional logic based on locale
  if (locale === "en") {
    content = <PrivacyPolicyEN />
    // Add any English-specific logic or components here
  } else {
    content = <PrivacyPolicyTH />
    // Add any Thai-specific logic or components here
  }

  return (
    <Container>
      {content}
    </Container>
  );
}


function PrivacyPolicyEN() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 text-gray-900">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy – KopKuaBook.com</h1>
        <p className="mt-2 text-sm text-gray-600">Effective Date: 09 September 2025</p>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">1) Who We Are</h2>
          <p>
            KopKuaBook is operated by Sabipa Sudwised (“Operator”, “we”, “us”).  
            We collect and manage data you provide or which arises from your use of the service.
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">2) What Information We Collect</h2>
          <p>
            We collect information including your name, contact details (like email), content you upload, and technical or usage data to run the service.
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">3) Why We Use Your Information</h2>
          <p>
            We use your data to provide, maintain, and improve the service; to communicate with you; handle payments; and for security and legal compliance.
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">4) Your Rights</h2>
          <p>
            You have rights to access, correct, or delete your information; to withdraw any consent; and to complain if you think your privacy has been violated.
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">5) Security</h2>
          <p>
            We take reasonable steps to protect your data from loss, misuse, unauthorized access, or alteration. But no system is perfect, and we cannot guarantee absolute security.
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">6) Changes & Contact</h2>
          <p>
            We may update this policy from time to time. If you have questions or want to exercise your privacy rights, you can contact us at:  
          </p>
          <p className="mt-2">
            Operator: Sabipa Sudwised <br />
            Email: kopkuabook@gmail.com
          </p>
        </section>
      </div>
    )
  }
  
function PrivacyPolicyTH() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 text-gray-900">
        <h1 className="text-3xl font-bold tracking-tight">นโยบายความเป็นส่วนตัว – KopKuaBook.com</h1>
        <p className="mt-2 text-sm text-gray-600">วันที่มีผลบังคับใช้: 09 September 2025</p>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">1) ผู้ให้บริการ</h2>
          <p>
            KopKuaBook ดำเนินการโดย Sabipa Sudwised (“ผู้ให้บริการ” หรือ “เรา”)  
            เราเก็บและใช้ข้อมูลส่วนบุคคลที่คุณให้ หรือที่เกิดขึ้นจากการใช้งานบริการ
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">2) ข้อมูลที่เราเก็บ</h2>
          <p>
            เราอาจเก็บข้อมูล เช่น ชื่อ อีเมล ข้อมูลติดต่อ เนื้อหาที่คุณอัปโหลด (เช่น รูปภาพ ข้อความ)  
            รวมถึงข้อมูลทางเทคนิคหรือการใช้งานที่จำเป็นต่อการให้บริการ
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">3) วัตถุประสงค์ในการใช้ข้อมูล</h2>
          <p>
            เราใช้ข้อมูลเพื่อให้บริการ ดูแลและปรับปรุงระบบ ติดต่อสื่อสารกับคุณ จัดการการชำระเงิน  
            และเพื่อความปลอดภัยหรือการปฏิบัติตามกฎหมาย
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">4) สิทธิของผู้ใช้</h2>
          <p>
            คุณมีสิทธิในการเข้าถึง แก้ไข หรือลบข้อมูลของคุณ  
            มีสิทธิถอนความยินยอมเมื่อใดก็ได้ และมีสิทธิร้องเรียนหากเห็นว่าความเป็นส่วนตัวถูกละเมิด
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">5) การรักษาความปลอดภัย</h2>
          <p>
            เราดำเนินมาตรการที่สมเหตุสมผลเพื่อป้องกันการสูญหาย การเข้าถึงโดยไม่ได้รับอนุญาต  
            หรือการนำข้อมูลไปใช้ในทางที่ผิด แต่ไม่สามารถรับประกันความปลอดภัยได้ 100%
          </p>
        </section>
  
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">6) การเปลี่ยนแปลง & การติดต่อ</h2>
          <p>
            เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว หากคุณมีคำถามหรือประสงค์จะใช้สิทธิของคุณ  
            โปรดติดต่อได้ที่:
          </p>
          <p className="mt-2">
            ผู้ให้บริการ: Sabipa Sudwised<br />
            อีเมล: kopkuabook@gmail.com
          </p>
        </section>
      </div>
    )
  }
  