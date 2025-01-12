import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import HeadingTwo from "@/components/layout/headings/HeadingTwo";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import RenderIf from "@/components/layout/RenderIf";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { TextAlignment } from "@/types/layout";
import { RELEASE_DETAILS_DATA } from "@/util/constants/data/releases/data";
import { useParams } from "react-router";

import NotFoundPage from "../NotFoundPage";

export type ReleaseDataType = {
  imgsrc: string;
  videosrc: string | null;
  alt: string;
  artworkCredit: string;
  year: number;
  title: string;
  href: string;
  descriptions: string[];
  videoCredits: string[];
  performingCredits: string[];
  recordingCredits: string[];
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
      <FlexContainer flexFlow="column" gapY={8}>
        <FlexContainer flexFlow="column" gapY={8}>
          <HeadingOne>
            {releaseData.title} ({releaseData.year})
          </HeadingOne>
          <FlexContainer flexFlow="column" alignItems="center">
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
          <FlexContainer flexFlow="column" alignItems="center" gapY={4}>
            {releaseData.descriptions.map((description, index) => (
              <Paragraph key={`${releaseData.title}-description-${index + 1}`}>
                {description}
              </Paragraph>
            ))}
          </FlexContainer>
        </FlexContainer>

        <FlexContainer flexFlow={"column"} gapY={8} alignItems="center">
          <RenderIf condition={releaseData.videosrc != null}>
            <VideoPlayer
              title={`${releaseData.title} Video`}
              src={releaseData.videosrc}
            />
            <Paragraph alignment={TextAlignment.CENTER}>
              Check out the official music video for {releaseData.title}!
            </Paragraph>
          </RenderIf>
        </FlexContainer>

        <FlexContainer flexFlow="column" gapY={8}>
          <HeadingTwo accent>Credits:</HeadingTwo>
          <RenderIf condition={releaseData.performingCredits.length > 0}>
            <FlexContainer
              flexFlow="column"
              alignItems="flex-start"
              responsive={{ alignItems: { prefix: "sm", value: "center" } }}
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
              flexFlow="column"
              alignItems="flex-start"
              responsive={{ alignItems: { prefix: "sm", value: "center" } }}
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
              flexFlow="column"
              alignItems="flex-start"
              responsive={{ alignItems: { prefix: "sm", value: "center" } }}
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
