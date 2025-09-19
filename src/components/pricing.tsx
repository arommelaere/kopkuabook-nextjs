import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { CircleCheck } from "lucide-react";

const getPlans = (t: any) => [
  {
    name: t('monthly_plus'),
    price: 349,
    description: t('monthly_plus_desc'),
    features: [
      t('monthly_plus_feature'),
    ],
    buttonText: t('subscribe_button'),
  },
  {
    name: t('monthly'),
    price: 249,
    isRecommended: true,
    description: t('monthly_desc'),
    features: [
      t('monthly_feature'),
    ],
    buttonText: t('subscribe_button'),
    isPopular: true,
  },
  {
    name: t('bimonthly'),
    price: 449,
    description: t('bimonthly_desc'),
    features: [
      t('bimonthly_feature'),
    ],
    buttonText: t('subscribe_button'),
  },
];

const Pricing = () => {
  const t = useTranslations('Marketing.Pricing');
  const plans = getPlans(t);
  return (
    <div id="pricing" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        {t('title')}
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 !rounded-xl":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                {t('most_popular')}
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{plan.price} THB</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
