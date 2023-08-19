import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://atiquzzaman.github.io",
  author: "Atiquzzaman",
  desc: "Personal thoughts about tech and nontech topics",
  title: "Personal profile of Atiquzzaman",
  ogImage: "/assets/profile.webp",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/atiquzzaman",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/atiquzzaman-nayeem",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:atiquzzaman@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801713185050",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: true,
  },
];
