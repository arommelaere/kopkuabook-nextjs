# Localization Guidelines

## General Localization Setup

This application supports the following languages:
- Thai (`th`) - Default language
- English (`en`)

The expected behavior is:
- `kopkuabook.com` → Content displayed in Thai
- `kopkuabook.com/en` → Content displayed in English

## Clerk Components Localization

Clerk authentication components (SignIn, SignUp, UserProfile, etc.) follow the same localization pattern as the rest of the application. This document outlines the expected behavior and implementation details.

### Expected Behavior

1. **Default Language (Thai)**
   - All Clerk UI components should display in Thai when accessed from the Thai version of the site (`kopkuabook.com`)
   - This includes sign-in forms, sign-up forms, user profile screens, and any other Clerk-provided UI

2. **English Language**
   - All Clerk UI components should display in English when accessed from the English version of the site (`kopkuabook.com/en`)

### Implementation

The localization of Clerk components is achieved through:

1. **Global Configuration via ClerkProvider**
   - The `ClerkProvider` in `src/app/[locale]/(auth)/layout.tsx` determines the localization for most components
   - It uses the current locale to set the appropriate language (`th` → Thai, `en` → English)

   ```tsx
   // In src/app/[locale]/(auth)/layout.tsx
   const clerkLocale = ClerkLocalizations.supportedLocales[locale] ?? ClerkLocalizations.defaultLocale;
   
   return (
     <ClerkProvider
       localization={clerkLocale}
       {...otherProps}
     >
       {props.children}
     </ClerkProvider>
   );
   ```

2. **Direct Localization for Standalone Components**
   - Components like `SignIn` and `SignUp` require direct localization prop due to how they're rendered in the Next.js App Router
   - They explicitly set localization based on the current locale:

   ```tsx
   // In sign-in and sign-up pages
   const localization = locale === 'th' ? thTH : enUS;

   return (
     <SignIn 
       localization={localization} 
       {...otherProps}
     />
   );
   ```

3. **Localization Resources**
   - Thai localization is provided by `thTH` from `@clerk/localizations`
   - English localization is provided by `enUS` from `@clerk/localizations`
   - These are configured in `src/utils/AppConfig.ts`

### Maintenance Guidelines

When adding new Clerk components to the application:

1. **For components within the auth layout**
   - Most components will inherit localization from the `ClerkProvider`
   - No additional localization setup is needed

2. **For standalone components/pages**
   - Import localization resources: `import { thTH, enUS } from '@clerk/localizations';`
   - Set localization based on current locale: `const localization = locale === 'th' ? thTH : enUS;`
   - Pass to the component: `<ClerkComponent localization={localization} />`

3. **When adding new languages**
   - Update `AppConfig.ts` to include the new locale
   - Import appropriate localization from `@clerk/localizations` (if available)
   - Add the locale to the `supportedLocales` object

### Testing Localization

Always test the following scenarios when modifying localization-related code:

1. Access the Thai version of the site and verify all Clerk components display in Thai
2. Access the English version of the site and verify all Clerk components display in English
3. Test the sign-in, sign-up, and user profile flows in both languages

## Related Files

- `src/utils/AppConfig.ts` - Main localization configuration
- `src/app/[locale]/(auth)/layout.tsx` - ClerkProvider configuration
- `src/app/[locale]/(auth)/(center)/sign-in/[[...sign-in]]/page.tsx` - SignIn component
- `src/app/[locale]/(auth)/(center)/sign-up/[[...sign-up]]/page.tsx` - SignUp component
- `src/app/[locale]/(auth)/dashboard/user-profile/[[...user-profile]]/page.tsx` - UserProfile component
