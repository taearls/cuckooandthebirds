import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import RandomCloudinaryImage from "@/components/RandomCloudinaryImage/RandomCloudinaryImage";
import { TextAlignment } from "@/types/layout";
import {
  SHUFFLED_IMAGE_GROUPS,
  WEBSITE_EMAIL,
} from "@/util/constants/constants";

export default function HomePage() {
  return (
    <main>
      <HeadingOne align={TextAlignment.CENTER}>Our Story</HeadingOne>
      <Paragraph>
        Cuckoo and the Birds is a three-piece, Midwest rock band from Chicago.
        Their songs experiment with extended harmonies, blending power pop
        sensibility with a meditative bent.
      </Paragraph>

      <RandomCloudinaryImage
        imageGroups={SHUFFLED_IMAGE_GROUPS}
        groupNumber={1}
      />

      <Paragraph>
        Historically, they have operated as a solo project from songwriter and
        guitarist Tyler Earls, but now they&apos;re a full band, featuring
        Dominic Glimco on bass and Zachary Taylor on drums.
      </Paragraph>

      <RandomCloudinaryImage
        imageGroups={SHUFFLED_IMAGE_GROUPS}
        groupNumber={2}
      />

      <Paragraph>
        Cuckoo and the Birds released their first EP,{" "}
        <InlineAnchor
          ariaLabel="Go to Cuckoo and the Birds's Release Page"
          href="./releases"
        >
          Twin Stars
        </InlineAnchor>
        , in August 2019 featuring Tyler Earls and Zachary Taylor, premiering it
        live at the Tonic Room in Chicago. In February 2020, they recruited
        Dominic Glimco on bass.
      </Paragraph>

      <RandomCloudinaryImage
        imageGroups={SHUFFLED_IMAGE_GROUPS}
        groupNumber={3}
      />

      <Paragraph>
        They&apos;ve played a handful of shows in Chicago, and are always
        looking for more!
      </Paragraph>

      <Paragraph>
        For booking inquiries, please email{" "}
        <InlineAnchor
          ariaLabel="Send Cuckoo and the Birds an email"
          href={`mailto:${WEBSITE_EMAIL}`}
        >
          {WEBSITE_EMAIL}
        </InlineAnchor>
        .
      </Paragraph>
    </main>
  );
}
