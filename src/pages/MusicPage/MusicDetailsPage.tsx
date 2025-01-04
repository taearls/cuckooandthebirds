import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import HeadingTwo from "@/components/layout/headings/HeadingTwo";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import RenderIf from "@/components/layout/RenderIf";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
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

export const RELEASE_DETAILS_DATA: Record<string, ReleaseDataType> = {
  "twin-stars": {
    imgsrc: "Twin Stars/twin-stars-album-art.jpg",
    videosrc: null,
    alt: "Album Artwork for Twin Stars",
    artworkCredit: "Breanda Fedie",
    year: 2019,
    title: "Twin Stars",
    href: "https://cuckooandthebirds.bandcamp.com/album/twin-stars",
    descriptions: [
      "Twin Stars is a project born in the aftermath of Tyler’s previous band breaking up. It explores the stages of coping with losing someone so close that a part of yourself seems lost, too.",
      "These songs encapsulate a newfound sense of agency after a toxic friendship ends with finality, and the necessary re-framing of identity that follows.",
      "In a similar sense, because these are the first five songs Tyler has written since high school, when the Cuckoo and the Birds moniker was created, they can be viewed as a thought experiment to test how far this reinvigorated expression can go.",
      "They were tracked, mixed, and mastered by Zachary Taylor, whose recording prowess and drumming wizardry take the songs to new heights. They were recorded DIY style over several nights in the comfort of Zach’s basement.",
      "Featuring only two musicians, the raw, understated texture becomes a distinguishing character of Twin Stars.",
    ],
    videoCredits: [],
    performingCredits: [
      "Vocals, Guitars, Bass - Tyler Earls",
      "Drums, Percussion - Zachary Taylor",
    ],
    recordingCredits: [
      "Songs written by Tyler Earls",
      "Tracked, Mixed, and Mastered by Zachary Taylor",
    ],
  },
  "show-me-the-dark": {
    imgsrc: "Show Me The Dark/show-me-the-dark-artwork.jpg",
    videosrc: "https://www.youtube.com/embed/W9NnCvO9xac",
    alt: "Album Artwork for Show Me The Dark",
    artworkCredit: "Mikal Bae and Alcides Diaz",
    year: 2021,
    title: "Show Me The Dark",
    href: "https://cuckooandthebirds.bandcamp.com/track/show-me-the-dark",
    descriptions: [
      "Show Me The Dark was originally recorded in the winter of 2019 with the intention to include it in a future release with the new band. When the pandemic happened, we stopped rehearsals before we had a chance to learn all the songs together and record them.",
      "As a result, this track is a bit of an outlier, and to me that’s fitting because the arrangement features a lot of elements I haven’t had before: violins, electric drums, synthesizers, a poem I wrote the night before tracking.",
      "The first iteration of this song was written during a time of high functioning anxiety for me. As I reflected then on my life at the elder age of 25, I identified many fond memories from my younger adulthood with details that had become fuzzy or forgotten over time.",
      "Show Me The Dark was born out of a desperation to regain access to those obscured memories and the self inhabiting them which felt so far that it seemed like a past life.",
    ],
    videoCredits: [
      "Video by DigitalAlchemists (Mikal Bae and Alcides Diaz)",
      "Directed by Mikal Bae",
      "Assets by Mikal Bae and Alcides Diaz",
    ],
    performingCredits: [
      "Vocals, Guitars, Bass - Tyler Earls",
      "Guitars, Synths, Drum Machine, Backing Vocals - Jake Pearson",
      "Violin - Rachel Gonzalez",
      "Backing Vocals - Daniel Rausch",
    ],
    recordingCredits: [
      "Songs written by Tyler Earls",
      "Produced by Jake Pearson",
      "Tracked by Jake Pearson",
      "Mixed and Mastered by Mark Gustafson",
    ],
  },
} as const;

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
      <HeadingOne>
        {releaseData.title} ({releaseData.year})
      </HeadingOne>
      <div>
        <InlineAnchor
          ariaLabel={`Click the image and listen to ${releaseData.title}`}
          href={releaseData.href}
        >
          <CloudinaryImage
            alt={releaseData.alt}
            publicId={releaseData.imgsrc}
          />
        </InlineAnchor>
        <Paragraph italic accent>
          Artwork by {releaseData.artworkCredit}
        </Paragraph>
      </div>
      <div>
        {releaseData.descriptions.map((description, index) => (
          <Paragraph key={`${releaseData.title}-description-${index + 1}`}>
            {description}
          </Paragraph>
        ))}
      </div>

      <RenderIf condition={releaseData.videosrc != null}>
        <div className="flex flex-col gap-y-8 mb-8">
          <Paragraph>
            Check out the official music video for {releaseData.title}!
          </Paragraph>
          <VideoPlayer
            title={`${releaseData.title} Video`}
            src={releaseData.videosrc}
          />
        </div>
      </RenderIf>
      <div>
        <HeadingTwo accent>Credits:</HeadingTwo>
        <div className="my-4">
          {releaseData.performingCredits.map((performerCredit, index) => (
            <Paragraph key={`performer-credit-${index + 1}`}>
              {performerCredit}
            </Paragraph>
          ))}
        </div>
        <div v-if="release.videoCredits.length > 0" className="my-4">
          {releaseData.videoCredits.map((videoCredit, index) => (
            <Paragraph key={`video-credit-${index + 1}`}>
              {videoCredit}
            </Paragraph>
          ))}
        </div>
        <div className="my-4">
          {releaseData.recordingCredits.map((recordingCredit, index) => (
            <Paragraph key={`recordng-credit-${index + 1}`}>
              {recordingCredit}
            </Paragraph>
          ))}
        </div>
      </div>
    </main>
  );
}
