export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Animes",
  description: "Animes do Hugo",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Animes",
      href: "/animes",
    },
    {
      label: "Mangas",
      href: "/mangas",
    },
    {
      label: "Personagens",
      href: "/personagens",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/hugo-loiola12/animes",
  },
};
