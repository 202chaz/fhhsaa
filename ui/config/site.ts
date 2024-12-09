export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FAIRMONT HEIGHTS HIGH SCHOOL ALUMNI ASSOCIATION, INC.",
  description: "HONORING THE PAST…BUILDING A LEGACY FOR THE FUTURE!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our History",
      href: "/history",
    },
    {
      label: "Meetings",
      href: "/meetings",
    },
    {
      label: "Events",
      href: "events",
    },
    {
      label: "Reunions",
      href: "/reunions",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
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
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
