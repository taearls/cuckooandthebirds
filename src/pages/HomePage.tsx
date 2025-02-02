import InlineAnchor from "@/components/InlineAnchor/InlineAnchor.tsx";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer.tsx";
import HeadingOne from "@/components/layout/headings/HeadingOne.tsx";
import HeadingTwo from "@/components/layout/headings/HeadingTwo.tsx";
import Paragraph from "@/components/layout/Paragraph/Paragraph.tsx";
import RandomCloudinaryImage from "@/components/RandomCloudinaryImage/RandomCloudinaryImage.tsx";
import {
  AlignItemsCSSValue,
  FlexFlowCSSValue,
  TextAlignment,
} from "@/types/layout.ts";
import {
  SHUFFLED_IMAGE_GROUPS,
  WEBSITE_EMAIL,
} from "@/util/constants/constants.ts";

export default function HomePage() {
  return (
    <main>
      <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
        <HeadingOne align={TextAlignment.CENTER}>Our Story</HeadingOne>
        <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
            gapY={4}
          >
            <Paragraph>
              Cuckoo and the Birds is a three-piece, Midwest rock band from
              Chicago. Their songs experiment with extended harmonies, blending
              power pop sensibility with a meditative bent.
            </Paragraph>

            <RandomCloudinaryImage
              imageGroups={SHUFFLED_IMAGE_GROUPS}
              groupNumber={1}
            />
          </FlexContainer>

          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
            gapY={4}
          >
            <Paragraph>
              Historically, they have operated as a solo project from songwriter
              and guitarist Tyler Earls, but now they&apos;re a full band,
              featuring Dominic Glimco on bass and Zachary Taylor on drums.
            </Paragraph>

            <RandomCloudinaryImage
              imageGroups={SHUFFLED_IMAGE_GROUPS}
              groupNumber={4}
            />
          </FlexContainer>

          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
            gapY={4}
          >
            <Paragraph>
              Cuckoo and the Birds released their first EP,{" "}
              <InlineAnchor
                ariaLabel="Go to Cuckoo and the Birds's Release Page"
                accent
                href="./releases"
              >
                Twin Stars
              </InlineAnchor>
              , in August 2019 featuring Tyler Earls and Zachary Taylor,
              premiering it live at the Tonic Room in Chicago. In February 2020,
              they recruited Dominic Glimco on bass.
            </Paragraph>

            <RandomCloudinaryImage
              imageGroups={SHUFFLED_IMAGE_GROUPS}
              groupNumber={3}
            />
          </FlexContainer>

          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
            gapY={4}
          >
            <HeadingTwo>Booking</HeadingTwo>
            <Paragraph>
              Cuckoo and the Birds have played a handful of shows in Chicago,
              and are always looking for more! For booking inquiries, please
              email{" "}
              <InlineAnchor
                ariaLabel="Send Cuckoo and the Birds an email"
                accent
                href={`mailto:${WEBSITE_EMAIL}`}
              >
                {WEBSITE_EMAIL}
              </InlineAnchor>
              .
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </main>
  );
}
