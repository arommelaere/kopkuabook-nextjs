import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { ClientSignOutButton } from "./client-navbar-actions";
import ThemeToggle from "../theme-toggle";
import { SignOutButton } from "@clerk/nextjs";

type NavbarProps = {
  locale: string;
  isAuthenticated?: boolean;
};

export default async function Navbar({ locale = "en", isAuthenticated = false }: NavbarProps) {
  const marketingT = await getTranslations({
    locale,
    namespace: 'Marketing.Navbar'
  });
  const dashboardT = await getTranslations({
    locale,
    namespace: 'DashboardLayout'
  });
  
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        {isAuthenticated ? (
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={`/${locale}/dashboard`}
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {dashboardT('dashboard_link')}
            </Link>
            <Link
              href={`/${locale}/dashboard/user-profile`}
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {dashboardT('user_profile_link')}
            </Link>
          </div>
        ) : (
          <NavMenu className="hidden md:block" />
        )}

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          
          {isAuthenticated ? (
            <SignOutButton>
            <button className="border-none text-gray-700 hover:text-gray-900" type="button">
              {dashboardT('sign_out')}
            </button>
          </SignOutButton>
          ) : (
            <>
              <Button variant="outline" className="hidden sm:inline-flex" asChild>
                <Link href={`/${locale}/sign-in`}>{marketingT('sign_in')}</Link>
              </Button>
              <Button className="hidden xs:inline-flex">{marketingT('get_started')}</Button>
            </>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet isAuthenticated={isAuthenticated} locale={locale} />
          </div>
        </div>
      </div>
    </nav>
  );
};
