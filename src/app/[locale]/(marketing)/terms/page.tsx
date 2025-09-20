import Container from "@/components/container";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Terms" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function Terms({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // 20250920 https://chatgpt.com/c/68ce288a-c74c-8320-ad4b-965fa6ef6959
  let content = null;
  if (locale === 'en') {
    content = <TermsOfServiceEN />
  } else {
    content = <TermsOfServiceTH />
  }

  return (
    <Container>
      {content}
    </Container>
  );
}


function TermsOfServiceEN() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service – KopKuaBook.com</h1>
      <p className="mt-2 text-sm text-gray-600">Effective Date: 09 September 2025</p>

      <p className="mt-6">
        These Terms of Service (“Terms”) govern your access to and use of KopKuaBook.com and related printing and shipping services (“Services”).
        The Services are operated solely by Sabipa Sudwised (“Operator”, “we”, “us”, “our”).
        By subscribing, accessing, or using the Services, you agree to these Terms. If you do not agree, you may not use the Services.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1) Service Description</h2>
        <p>
          KopKuaBook is a subscription platform where a payer and invited members (“Workspace Members”) can upload photos and text (“User Content”).
          At regular intervals, the User Content is compiled, printed, and delivered to chosen recipient(s) (“Destinator(s)”).
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">2) Operator Information</h2>
        <p>
          The Services are operated by Sabipa Sudwised.  
          All legal responsibility for operating KopKuaBook lies with her as the service provider.  
          Any questions or disputes must be directed to the Operator only.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">3) Eligibility & Accounts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 18 years old or the age of majority in your jurisdiction.</li>
          <li>You are responsible for accurate account data, including payment methods and delivery addresses.</li>
          <li>Invited Workspace Members are also bound by these Terms.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">4) Subscription, Payments & Payer Transfers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subscriptions are prepaid, linked to the workspace, and auto-renew unless cancelled.</li>
          <li>The subscription payer is the “Workspace Owner.” The Workspace Owner may transfer payment responsibility to another Workspace Member,
              effective only when the new payer accepts these Terms and we confirm the change.</li>
          <li>We may refuse or delay transfers for legal, billing, or technical reasons.</li>
          <li>No refunds are provided except where required by Thai law or at our discretion.</li>
          <li>Failure to pay may lead to suspension or termination of Services and deletion or non-printing of pending content.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">5) User Content & Member Responsibility</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You retain ownership of your User Content. You grant us a worldwide, royalty-free, non-exclusive license to host, process, adapt, compile,
              print, and deliver User Content to provide the Services.</li>
          <li>You warrant that User Content complies with applicable law and does not infringe third-party rights.</li>
          <li>All Workspace Members are jointly responsible for content uploaded in the workspace.</li>
          <li>If a member uploads prohibited content, both that member and the Workspace Owner may be held responsible, unless the Workspace Owner
              shows they had no knowledge and promptly removed or reported it.</li>
          <li>Prohibited content includes illegal, defamatory, obscene, hateful, or infringing material. We may remove content at our discretion.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">6) Printing & Delivery</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Printed output may differ from on-screen previews due to paper, ink, cropping, and formatting adjustments.</li>
          <li>Minor variations in color, brightness, or pagination are normal and not defects.</li>
          <li>Delivery times are estimates. We are not responsible for delays due to carriers, customs, strikes, or force majeure events.</li>
          <li>Risk of loss passes to you upon handover to the carrier. Optional tracked or insured shipping may be offered.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">7) Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by Thai law, the Operator shall not be liable for indirect, incidental, or consequential damages,
          including loss of profits, data, or goodwill. Our total liability for any claim is limited to the lesser of:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The subscription fees you paid in the 3 months before the claim; or</li>
          <li>THB 3,000.</li>
        </ul>
        <p className="mt-2">
          This limitation does not apply to liability resulting from gross negligence, willful misconduct, or fraud, as excluded under Thai law.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">8) Indemnification</h2>
        <p>
          You (Workspace Owner and all Workspace Members) agree to indemnify and hold harmless the Operator from any claims,
          damages, or expenses arising from your User Content, use of the Services, violation of these Terms,
          or disputes among workspace members or with a Destinator.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">9) Privacy & Data Protection</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We process personal data in accordance with our Privacy Policy.</li>
          <li>You must have consent from Workspace Members and Destinators for sharing their data and content.</li>
          <li>We take reasonable measures to protect data but cannot guarantee absolute security.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">10) Governing Law & Disputes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>These Terms are governed by Thai law.</li>
          <li>Disputes must first attempt informal resolution in good faith within 30 days.</li>
          <li>Failing resolution, disputes are submitted exclusively to the courts of Bangkok, Thailand.</li>
          <li>Any claim must be filed within one year unless Thai law requires a longer period.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2">
          Operator: Sabipa Sudwised<br />
          Email: kopkuabook@gmail.com <br />
        </p>
      </section>

      <hr className="my-10" />

      <p className="text-sm text-gray-600">
        By creating or joining a workspace, you acknowledge joint responsibility for content and accept the disclaimers and liability limitations above.
      </p>
    </div>
  )
}


function TermsOfServiceTH() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold tracking-tight">ข้อกำหนดในการให้บริการ – KopKuaBook.com</h1>
      <p className="mt-2 text-sm text-gray-600">วันที่มีผลบังคับใช้: 09 September 2025</p>

      <p className="mt-6">
        ข้อกำหนดในการให้บริการ (“ข้อกำหนด”) ฉบับนี้ ใช้บังคับกับการเข้าใช้งานและการใช้เว็บไซต์ KopKuaBook.com 
        และบริการที่เกี่ยวข้อง (“บริการ”) ซึ่งให้บริการโดย Sabipa Sudwised 
        (“ผู้ให้บริการ” หรือ “เรา”) การสมัครสมาชิก เข้าถึง หรือใช้งานบริการ ถือว่าคุณตกลงตามข้อกำหนดนี้ 
        หากคุณไม่ยอมรับ โปรดหยุดการใช้บริการทันที
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1) คำอธิบายบริการ</h2>
        <p>
          KopKuaBook เป็นบริการรูปแบบสมัครสมาชิก ที่ผู้ชำระเงินและสมาชิกที่ได้รับเชิญ (“สมาชิก Workspace”) 
          สามารถอัปโหลดรูปภาพและข้อความ (“เนื้อหาของผู้ใช้”) เพื่อเก็บไว้ใน Workspace ส่วนตัว 
          จากนั้นเนื้อหาจะถูกจัดทำเป็นเล่ม พิมพ์ และจัดส่งให้ผู้รับที่กำหนด (“ผู้รับหนังสือ”)
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">2) ข้อมูลผู้ให้บริการ</h2>
        <p>
          บริการนี้ดำเนินการโดย Sabipa Sudwised 
          ความรับผิดชอบทางกฎหมายทั้งหมดเกี่ยวกับการดำเนินงาน KopKuaBook อยู่กับผู้ให้บริการเท่านั้น 
          คำถามหรือข้อพิพาทใด ๆ ต้องติดต่อโดยตรงกับผู้ให้บริการ
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">3) คุณสมบัติ & บัญชีผู้ใช้</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ผู้ใช้ต้องมีอายุอย่างน้อย 18 ปี หรือบรรลุนิติภาวะตามกฎหมายในประเทศของตน</li>
          <li>คุณต้องรับผิดชอบต่อความถูกต้องของข้อมูลบัญชี รวมถึงวิธีการชำระเงินและที่อยู่จัดส่ง</li>
          <li>สมาชิก Workspace ทุกคนอยู่ภายใต้ข้อกำหนดนี้เช่นกัน</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">4) การสมัครสมาชิก การชำระเงิน & การโอนผู้ชำระเงิน</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>การสมัครสมาชิกเป็นแบบชำระล่วงหน้า เชื่อมกับ Workspace และจะต่ออายุอัตโนมัติ เว้นแต่มีการยกเลิก</li>
          <li>ผู้ชำระเงินคือ “เจ้าของ Workspace” เจ้าของ Workspace สามารถโอนสิทธิ์การชำระเงินให้สมาชิกคนอื่นได้ 
              เมื่อสมาชิกใหม่ยอมรับข้อกำหนดนี้และเราได้ยืนยันการเปลี่ยนแปลง</li>
          <li>เราอาจปฏิเสธหรือเลื่อนการโอนได้หากมีเหตุผลทางกฎหมาย การเงิน หรือเทคนิค</li>
          <li>ไม่สามารถคืนเงินได้ เว้นแต่กฎหมายไทยกำหนด หรือขึ้นอยู่กับดุลยพินิจของเรา</li>
          <li>หากไม่ชำระเงิน บริการอาจถูกระงับหรือยกเลิก และเนื้อหาที่ค้างพิมพ์อาจถูกลบหรือไม่ถูกจัดทำ</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">5) เนื้อหาของผู้ใช้ & ความรับผิดชอบของสมาชิก</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>คุณยังคงเป็นเจ้าของเนื้อหาของคุณ แต่คุณให้สิทธิ์เราใช้เนื้อหาเพื่อจัดเก็บ ประมวลผล จัดทำเป็นเล่ม 
              พิมพ์ และส่ง เพื่อให้บริการ</li>
          <li>คุณรับรองว่าเนื้อหาของคุณถูกต้องตามกฎหมาย และไม่ละเมิดสิทธิของบุคคลที่สาม</li>
          <li>สมาชิกทุกคนใน Workspace ต้องรับผิดชอบร่วมกันต่อเนื้อหาที่อัปโหลด</li>
          <li>หากมีการอัปโหลดเนื้อหาที่ผิดกฎหมาย สมาชิกผู้โพสต์และเจ้าของ Workspace อาจต้องรับผิดชอบร่วมกัน 
              เว้นแต่เจ้าของ Workspace แสดงให้เห็นว่าไม่รู้มาก่อนและได้ลบหรือรายงานทันที</li>
          <li>เนื้อหาต้องไม่ผิดกฎหมาย ใส่ร้าย หยาบคาย ลามก อาฆาต หรือมีการละเมิดสิทธิ์ใด ๆ</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">6) การพิมพ์ & การจัดส่ง</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>หนังสือที่พิมพ์อาจมีความแตกต่างจากที่เห็นบนหน้าจอ เช่น สี แสง หรือการจัดรูปแบบ</li>
          <li>ความแตกต่างเล็กน้อยเหล่านี้ถือเป็นเรื่องปกติ ไม่ถือว่าเป็นข้อบกพร่อง</li>
          <li>เวลาจัดส่งเป็นการประมาณ เราไม่รับผิดชอบต่อความล่าช้าที่เกิดจากไปรษณีย์ ศุลกากร การนัดหยุดงาน หรือเหตุสุดวิสัย</li>
          <li>ความเสี่ยงในการสูญหายโอนให้ผู้ใช้ทันทีเมื่อส่งมอบให้บริษัทขนส่ง</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">7) ข้อจำกัดความรับผิด</h2>
        <p>
          ภายใต้ขอบเขตสูงสุดที่กฎหมายไทยอนุญาต ผู้ให้บริการจะไม่รับผิดชอบต่อความเสียหายทางอ้อม พิเศษ 
          หรือความเสียหายที่ตามมา เช่น การสูญเสียกำไร ข้อมูล หรือชื่อเสียง ความรับผิดรวมสูงสุดต่อผู้ใช้ไม่เกิน:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ค่าสมัครที่คุณชำระใน 3 เดือนก่อนเกิดเหตุ; หรือ</li>
          <li>3,000 บาท แล้วแต่ว่าจำนวนใดสูงกว่า</li>
        </ul>
        <p className="mt-2">
          ข้อยกเว้นนี้ไม่ครอบคลุมถึงความรับผิดที่เกิดจากความประมาทร้ายแรง การกระทำโดยเจตนา 
          หรือการฉ้อโกง ซึ่งกฎหมายไทยไม่อนุญาตให้ตัดสิทธิ์
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">8) การชดใช้ค่าเสียหาย</h2>
        <p>
          คุณ (ทั้งเจ้าของ Workspace และสมาชิกทั้งหมด) ตกลงที่จะชดใช้ค่าเสียหายและปกป้องผู้ให้บริการ 
          จากการเรียกร้อง ความเสียหาย หรือค่าใช้จ่ายที่เกิดจากเนื้อหาของคุณ 
          การใช้บริการ การละเมิดข้อกำหนด หรือข้อพิพาทระหว่างสมาชิกหรือกับผู้รับหนังสือ
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">9) กฎหมายที่ใช้บังคับ & ข้อพิพาท</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ข้อกำหนดนี้อยู่ภายใต้กฎหมายของประเทศไทย</li>
          <li>หากมีข้อพิพาท ทั้งสองฝ่ายต้องพยายามแก้ไขโดยไม่เป็นทางการภายใน 30 วันก่อน</li>
          <li>หากไม่สำเร็จ ข้อพิพาทต้องยื่นต่อศาลในกรุงเทพมหานครเท่านั้น</li>
          <li>การเรียกร้องต้องยื่นภายใน 1 ปี นับจากวันที่เกิดเหตุ เว้นแต่กฎหมายไทยกำหนดระยะเวลาที่นานกว่า</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">ข้อมูลการติดต่อ</h2>
        <p className="mt-2">
          ผู้ให้บริการ: Sabipa Sudwised<br />
          อีเมล: kopkuabook@gmail.com <br />
        </p>
      </section>

      <hr className="my-10" />

      <p className="text-sm text-gray-600">
        เมื่อคุณสร้างหรือเข้าร่วม Workspace คุณยอมรับความรับผิดชอบร่วมกันต่อเนื้อหาที่เผยแพร่ 
        และยอมรับข้อจำกัดความรับผิดและเงื่อนไขทั้งหมดที่ระบุไว้ในข้อกำหนดนี้
      </p>
    </div>
  )
}