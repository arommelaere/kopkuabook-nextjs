import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { useTranslations } from "next-intl";
import { PlusIcon } from "lucide-react";

const getFAQ = (t: any) => [
  {
    question: t('return_policy_q'),
    answer: t('return_policy_a'),
  },
  {
    question: t('track_order_q'),
    answer: t('track_order_a'),
  },
  {
    question: t('shipping_q'),
    answer: t('shipping_a'),
  },
  {
    question: t('payment_q'),
    answer: t('payment_a'),
  },
  {
    question: t('damaged_item_q'),
    answer: t('damaged_item_a'),
  },
  {
    question: t('support_q'),
    answer: t('support_a'),
  },
];

const FAQ = () => {
  const t = useTranslations('Marketing.FAQ');
  const faq = getFAQ(t);
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        {t('title')}
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        {t('subtitle')}
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
