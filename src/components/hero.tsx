import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations('Marketing.Hero');
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">
            {t('beta_version')}
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            {t('description')}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              {t('get_started')} <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> {t('watch_demo')}
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          {/* 20250920 prompt chatgpt 5: 
          generate old lovely cultural thai couple person in their heaven wood old house with big smile showing a magic gazette (newspaper with family photos in it) open with its content pointed to the camera (I will replace with my own content)
          https://chatgpt.com/c/68ce8a5c-2594-832a-a21c-2ff69a39944e
          */}
          <Image
            src="/showcases/kopkuabook-showcase-2.png"
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
