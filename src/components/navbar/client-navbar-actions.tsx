"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

// Client NavigationSheet component
type ClientNavigationSheetProps = {
  isAuthenticated: boolean;
  locale: string;
  marketingNavText: {
    sign_in: string;
    get_started: string;
    navigation_drawer: string;
  };
  dashboardText: {
    dashboard_link: string;
    user_profile_link: string;
    sign_out: string;
  };
};

export const ClientNavigationSheet = ({
  isAuthenticated,
  locale,
  marketingNavText,
  dashboardText,
}: ClientNavigationSheetProps) => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>{marketingNavText.navigation_drawer}</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        
        {isAuthenticated ? (
          <div className="mt-12 space-y-4">
            <Link
              href={`/${locale}/dashboard`}
              className="block border-none text-gray-700 hover:text-gray-900 py-2"
            >
              {dashboardText.dashboard_link}
            </Link>
            <Link
              href={`/${locale}/dashboard/user-profile`}
              className="block border-none text-gray-700 hover:text-gray-900 py-2"
            >
              {dashboardText.user_profile_link}
            </Link>
          </div>
        ) : (
          <NavMenu orientation="vertical" className="mt-12" />
        )}

        <div className="mt-8 space-y-4">
          {isAuthenticated ? (
            <SignOutButton>
              <button className="block w-full text-left border-none text-gray-700 hover:text-gray-900 py-2" type="button">
                {dashboardText.sign_out}
              </button>
            </SignOutButton>
          ) : (
            <>
              <Button variant="outline" className="w-full sm:hidden" asChild>
                <Link href={`/${locale}/sign-in`}>{marketingNavText.sign_in}</Link>
              </Button>
              <Button className="w-full xs:hidden">{marketingNavText.get_started}</Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
