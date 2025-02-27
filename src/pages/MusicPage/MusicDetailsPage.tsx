import { useParams } from "react-router";

import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage.tsx";
import InlineAnchor from "@/components/InlineAnchor/InlineAnchor.tsx";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer.tsx";
import HeadingOne from "@/components/layout/headings/HeadingOne.tsx";
import HeadingTwo from "@/components/layout/headings/HeadingTwo.tsx";
import Paragraph from "@/components/layout/Paragraph/Paragraph.tsx";
import RenderIf from "@/components/layout/RenderIf.tsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import {
  AlignItemsCSSValue,
  FlexFlowCSSValue,
  MediaQueryPrefixValue,
  TextAlignment,
} from "@/types/layout.ts";
import { RELEASE_DETAILS_DATA } from "@/util/constants/data/releases/data.ts";

export type ReleaseDataType = {
  imgsrc: string;
  videosrc: string | null;
  alt: string;
  artworkCredit: string;
  year: number;
  title: string;
  href: string;
  descriptions: Array<string>;
  videoCredits: Array<string>;
  performingCredits: Array<string>;
  recordingCredits: Array<string>;
};

export default function MusicDetailsPage() {
  const { releaseId } = useParams();

  const result = Object.entries(RELEASE_DETAILS_DATA).find(
    ([id]) => id === releaseId,
  );

  // if the user navigates to a /music subpath that doesn't exist, redirect them to the 404 page.
  // e.g., /music/blah
  if (!result) {
    return <NotFoundPage />;
  }

  const [_, releaseData] = result;

  return (
    <main>
      <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
        <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
          <HeadingOne>
            {releaseData.title} ({releaseData.year})
          </HeadingOne>
          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
          >
            <InlineAnchor
              ariaLabel={`Click the image and listen to ${releaseData.title}`}
              href={releaseData.href}
            >
              <CloudinaryImage
                alt={releaseData.alt}
                publicId={releaseData.imgsrc}
              />
            </InlineAnchor>
            <Paragraph italic accent alignment={TextAlignment.CENTER}>
              Artwork by {releaseData.artworkCredit}
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            alignItems={AlignItemsCSSValue.CENTER}
            gapY={4}
          >
            {releaseData.descriptions.map((description, index) => (
              <Paragraph key={`${releaseData.title}-description-${index + 1}`}>
                {description}
              </Paragraph>
            ))}
          </FlexContainer>
        </FlexContainer>

        <FlexContainer
          flexFlow={FlexFlowCSSValue.COLUMN}
          gapY={8}
          alignItems={AlignItemsCSSValue.CENTER}
        >
          <RenderIf condition={releaseData.videosrc != null}>
            <VideoPlayer
              title={`${releaseData.title} Video`}
              // we know this isn't null because of the wrapping RenderIf component's condition
              src={releaseData.videosrc!}
            />
            <Paragraph alignment={TextAlignment.CENTER}>
              Check out the official music video for {releaseData.title}!
            </Paragraph>
          </RenderIf>
        </FlexContainer>

        <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
          <HeadingTwo accent>Credits:</HeadingTwo>
          <RenderIf condition={releaseData.performingCredits.length > 0}>
            <FlexContainer
              flexFlow={FlexFlowCSSValue.COLUMN}
              alignItems={AlignItemsCSSValue.START}
              responsive={{
                alignItems: [
                  {
                    prefix: MediaQueryPrefixValue.SM,
                    value: AlignItemsCSSValue.CENTER,
                  },
                ],
              }}
            >
              {releaseData.performingCredits.map((performerCredit, index) => (
                <Paragraph
                  key={`performer-credit-${index + 1}`}
                  width="sm:w-65ch"
                >
                  {performerCredit}
                </Paragraph>
              ))}
            </FlexContainer>
          </RenderIf>
          <RenderIf condition={releaseData.videoCredits.length > 0}>
            <FlexContainer
              flexFlow={FlexFlowCSSValue.COLUMN}
              alignItems={AlignItemsCSSValue.START}
              responsive={{
                alignItems: {
                  prefix: MediaQueryPrefixValue.SM,
                  value: AlignItemsCSSValue.CENTER,
                },
              }}
            >
              {releaseData.videoCredits.map((videoCredit, index) => (
                <Paragraph key={`video-credit-${index + 1}`} width="sm:w-65ch">
                  {videoCredit}
                </Paragraph>
              ))}
            </FlexContainer>
          </RenderIf>
          <RenderIf condition={releaseData.recordingCredits.length > 0}>
            <FlexContainer
              flexFlow={FlexFlowCSSValue.COLUMN}
              alignItems={AlignItemsCSSValue.START}
              responsive={{
                alignItems: {
                  prefix: MediaQueryPrefixValue.SM,
                  value: AlignItemsCSSValue.CENTER,
                },
              }}
            >
              {releaseData.recordingCredits.map((recordingCredit, index) => (
                <Paragraph
                  key={`recording-credit-${index + 1}`}
                  width="sm:w-65ch"
                >
                  {recordingCredit}
                </Paragraph>
              ))}
            </FlexContainer>
          </RenderIf>
        </FlexContainer>
      </FlexContainer>
    </main>
  );
}
