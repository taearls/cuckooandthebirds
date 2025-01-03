import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { Cloudinary } from "@cloudinary/url-gen";

export const WEBSITE_EMAIL = "cuckooandthebirds@gmail.com";

export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  "gi",
);

export const IMAGE_GROUPS = {
  // harmonica: 2,
  joy: 5,
  martin: 11,
  profile: 7,
  rickenbacker: 6,
  telecaster: 2,
} as const;

export const SHUFFLED_IMAGE_GROUPS = Object.keys(IMAGE_GROUPS).sort(
  () => 0.5 - Math.random(),
);

// TODO: refactor this.
export const homePageTextData = [
  <Paragraph key="desc-1">
    Cuckoo and the Birds is a three-piece, Midwest rock band from Chicago. Their
    songs experiment with extended harmonies, blending power pop sensibility
    with a meditative bent.
  </Paragraph>,
  <Paragraph key="desc-2">
    Historically, they have operated as a solo project from songwriter and
    guitarist Tyler Earls, but now they&apos;re a full band, featuring Dominic
    Glimco on bass and Zachary Taylor on drums.
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
    They&apos;ve played a handful of shows in Chicago, and are always looking
    for more!
  </Paragraph>,
  <Paragraph key="desc-5">
    For booking inquiries, please email{" "}
    <InlineAnchor
      ariaLabel="Send Cuckoo and the Birds an email"
      href={`mailto:${WEBSITE_EMAIL}`}
    >
      {WEBSITE_EMAIL}
    </InlineAnchor>
    .
  </Paragraph>,
].map((ele) => ({ ...ele, key: "" }));

export const CLOUDINARY_INSTANCE = new Cloudinary({
  cloud: {
    cloudName: "cuckooandthebirds",
  },
});
