import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { LocaleSwitcher } from "../LocaleSwitcher";

export const NavigationSheet = () => {
  const t = useTranslations('Marketing.Navbar');
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>{t('navigation_drawer')}</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

      

        <div className="mt-8 space-y-4">
          <Button variant="outline" className="w-full sm:hidden">
            {t('sign_in')}
          </Button>
          <Button className="w-full xs:hidden">{t('get_started')}</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
