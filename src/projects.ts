export type Project = {
  name: string;
  collab: string;
  year: string;
  slug: string;
  href: string;
  monogram: string;
  type?: string;
  isNew?: boolean;
};

export const projects: Project[] = [
  {
    name: "Tiny Bits",
    collab: "w/tiny bits",
    year: "2025",
    slug: "tiny-bits",
    href: "https://tinybitsoflove.com/",
    monogram: "TB",
    type: "Brand & Web",
    isNew: true,
  },
  {
    name: "HOTCOIN",
    collab: "w/sabeer bhatia",
    year: "2025",
    slug: "hotcoin",
    href: "https://hotcoin.com/",
    monogram: "HC",
    type: "Web3 Platform",
    isNew: true,
  },
  {
    name: "FLEXSHFT",
    collab: "w/j.berry",
    year: "2025",
    slug: "flexshft",
    href: "/flexshft",
    monogram: "FS",
    type: "Staffing Ecosystem",
    isNew: true,
  },
  {
    name: "FTG Connect",
    collab: "w/balky studio",
    year: "2026",
    slug: "ftg-connect",
    href: "https://ftgconnect.com/",
    monogram: "FT",
    type: "Digital Experience",
    isNew: true,
  },
];
