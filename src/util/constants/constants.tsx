import InlineAnchor from "@/components/InlineAnchor";
import { Paragraph } from "@/components/layout/Paragraph";
import { WebProjectProps } from "@/components/WebProject/WebProject";

export const WEB_PROJECTS: Array<Omit<WebProjectProps, "isLast">> = [
  {
    alt: "Image of Cuckoo and the Birds Website",
    analytics: {
      campaign: "portfolio",
      medium: "web",
      source: "portfolio",
    },
    cloudinaryId: "screenshots/v2/cuckoo-mobile",
    cursorStyle: "pointer",
    descriptions: [
      "A website I made for my band, Cuckoo and the Birds, where you can find all our info, social media links, and press.",
      "If you're interested to listen, please consider supporting our music by streaming us on Spotify or any other streaming platform.",
      "Built mobile-first with Nuxt, Tailwind, and a (mostly) healthy dose of rock 'n' roll 🤘",
    ],
    emoji: "🎵",
    href: "https://www.cuckooandthebirds.com",
    name: "Cuckoo and the Birds Website",
    tagline: "Give our music a listen!",
    imageExtension: "png",
  },
  {
    alt: "Image of Road Ranger Banner",
    analytics: undefined,
    cloudinaryId: "screenshots/v2/roadranger-desktop",
    descriptions: [
      "A navigation header that I built while freelancing for Trekk.",
      "Both the mobile and desktop versions are based on designs their web designers prepared for the client and had me implement. Built with SCSS, JavaScript, and PHP.",
    ],
    cursorStyle: "pointer",
    href: "https://www.roadrangerusa.com",
    emoji: "⛽",
    name: "Road Ranger",
    tagline: "Check it out!",
    imageExtension: "jpg",
  },
  {
    alt: "Image of Space Clones Title Screen",
    analytics: undefined,
    cloudinaryId: "screenshots/v2/space-clones-game",
    cursorStyle: "url(images/space-clones-cursor.png), pointer",
    descriptions: [
      "An original space shooting video game inspired by Space Invaders, the 1978 arcade classic. Defeat the clone army and then their mothership to advance to the next level.",
      "If you get a high enough score, you can earn extra lives. Play solo, or take turns with a friend. The galaxy is yours to save from the invading clone army! Created using HTML5, CSS3, JavaScript, and jQuery.",
    ],
    emoji: "😉",
    href: "https://space-clones.netlify.com",
    name: "Space Clones",
    tagline: "Beat my high score!",
    imageExtension: "png",
  },
];

export const PORTFOLIO_EMAIL = "tyler.a.earls@gmail.com";

export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  "gi",
);

// inline anchor class:
// class=\"text-red-600 hover:text-cyan-300 rounded-sm\"

export const homePageTextData = [
  <Paragraph key="desc-1">
    Cuckoo and the Birds is a three-piece, Midwest rock band from Chicago. Their
    songs experiment with extended harmonies, blending power pop sensibility
    with a meditative bent.
  </Paragraph>,
  <Paragraph key="desc-2">
    Historically, they have operated as a solo project from songwriter and
    guitarist Tyler Earls, but now they&apos;re a full band, featuring Dominic Glimco
    on bass and Zachary Taylor on drums.
  </Paragraph>,
  <Paragraph key="desc-3">
    Cuckoo and the Birds released their first EP,{" "}
    <InlineAnchor
      ariaLabel="Go to Cuckoo and the Birds's Release Page"
      href="./releases"
    >
      Twin Stars
    </InlineAnchor>
    , in August 2019 featuring Tyler Earls and Zachary Taylor, premiering it
    live at the Tonic Room in Chicago. In February 2020, they recruited Dominic
    Glimco on bass.
  </Paragraph>,
  <Paragraph key="desc-4">
    They&apos;ve played a handful of shows in Chicago, and are always looking for
    more!
  </Paragraph>,
  <Paragraph key="desc-5">
    For booking inquiries, please email{" "}
    <InlineAnchor
      ariaLabel="Send Cuckoo and the Birds an email"
      href="mailto:cuckooandthebirds@gmail.com"
    >
      cuckooandthebirds@gmail.com
    </InlineAnchor>
    .
  </Paragraph>,
].map(ele => ({...ele, key: ''}));
