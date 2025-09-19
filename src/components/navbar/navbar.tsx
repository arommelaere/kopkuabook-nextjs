import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { LocaleSwitcher } from "../LocaleSwitcher";

type NavbarProps = {
  locale: string;
};

export default function Navbar({ locale = "en" }: NavbarProps) {
  const t = useTranslations('Marketing.Navbar');
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href={`/${locale}/sign-in`}>{t('sign_in')}</Link>
          </Button>
          <Button className="hidden xs:inline-flex">{t('get_started')}</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
