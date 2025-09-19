import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const getFeatures = (t: any) => [
  {
    icon: Goal,
    title: t('family_collaboration'),
    description: t('family_collaboration_desc'),
  },
  {
    icon: BookCheck,
    title: t('beautiful_layout'),
    description: t('beautiful_layout_desc'),
  },
  {
    icon: ChartPie,
    title: t('delivered_monthly'),
    description: t('delivered_monthly_desc'),
  },
  {
    icon: Users,
    title: t('personal_touch'),
    description: t('personal_touch_desc'),
  },
  {
    icon: FolderSync,
    title: t('precious_memories'),
    description: t('precious_memories_desc'),
  },
  {
    icon: Zap,
    title: t('easy_to_add_photo'),
    description: t('easy_to_add_photo_desc'),
  },
];

const Features = () => {
  const t = useTranslations('Marketing.Features');
  const features = getFeatures(t);
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        {t('title')}
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon />
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
