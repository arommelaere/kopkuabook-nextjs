import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Family Collaboration",
    description:
      "Invite family members to contribute photos, stories, and memories to create together.",
  },
  {
    icon: BookCheck,
    title: "Beautiful Layout",
    description:
      "Professional newspaper layout that make your family moments look stunning in print.",
  },
  {
    icon: ChartPie,
    title: "Delivered Monthly",
    description:
      "Receive beautifully printed newspapers delivered directly to your loved ones' doorstep.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description:
      "Customize every aspect with personal messages, family recipes, and special announcements.",
  },
  {
    icon: FolderSync,
    title: "Precious Memories",
    description:
      "Preserve and share your family's most treasured moments in a tangible, lasting format.",
  },
  {
    icon: Zap,
    title: "Easy to add Photo",
    description:
      "Fast photo upload or drag-and-drop makes it easy for everyone in the family to contribute.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
      Why Families Love Kopkuabook?
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
