export const Logo = ({ iconClassNames }: { iconClassNames?: string }) => (
  <div className="flex items-center gap-2">
  <img
    src="/favicon/web-app-manifest-192x192.png"
    alt="KopKuaBook Logo"
    width={64}
    height={32}
    style={{ objectFit: 'contain' }}
    className={iconClassNames}
  />
  <span className="text-2xl font-bold select-none">KopKuaBook</span>
  </div>
);
