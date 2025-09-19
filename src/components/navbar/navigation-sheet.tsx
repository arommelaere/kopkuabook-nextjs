import { getTranslations } from "next-intl/server";
import { ClientNavigationSheet } from "./client-navbar-actions";

type NavigationSheetProps = {
  isAuthenticated?: boolean;
  locale: string;
};

export async function NavigationSheet({ isAuthenticated = false, locale = "en" }: NavigationSheetProps) {
  const marketingT = await getTranslations({
    locale,
    namespace: 'Marketing.Navbar'
  });
  const dashboardT = await getTranslations({
    locale,
    namespace: 'DashboardLayout'
  });
  
  // Prepare translation objects to pass to client components
  const marketingNavText = {
    sign_in: marketingT('sign_in'),
    get_started: marketingT('get_started'),
    navigation_drawer: marketingT('navigation_drawer')
  };
  
  const dashboardText = {
    dashboard_link: dashboardT('dashboard_link'),
    user_profile_link: dashboardT('user_profile_link'),
    sign_out: dashboardT('sign_out')
  };
  
  return (
    <ClientNavigationSheet
      isAuthenticated={isAuthenticated}
      locale={locale}
      marketingNavText={marketingNavText}
      dashboardText={dashboardText}
    />
  );
};
