import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import HeadingTwo from "@/components/layout/headings/HeadingTwo";
import { TextAlignment } from "@/types/layout";

export type PressData = {
  text: string;
  year: number;
  ariaLabel: string;
  month: string;
  href: string;
};
export const INTERVIEW_DATA: Array<PressData> = [
  {
    text: "Kill the Music",
    ariaLabel:
      "Read the Cuckoo and the Birds interview with Kill the Music from September 2019",
    year: 2019,
    month: "September",
    href: "https://www.killthemusic.net/blog/unsigned-spotlight-cuckoo-and-the-birds",
  },
];

export const REVIEW_DATA: Array<PressData> = [
  {
    text: "V13 Media",
    year: 2021,
    ariaLabel:
      "Read the Cuckoo and the Birds review with V13 Media from April 2021",
    month: "April",
    href: "https://v13.net/2021/04/cuckoo-and-the-birds-go-retro-with-their-video-game-themed-show-me-the-dark-music-video-premiere",
  },
  {
    text: "Vents Magazine",
    year: 2019,
    ariaLabel:
      "Read the Cuckoo and the Birds review with Vents Magazine from August 2019",
    month: "August",
    href: "https://ventsmagazine.com/2019/08/30/premiere-cuckoo-and-the-birds-streams-new-album-twin-stars",
  },
];

export default function PressPage() {
  return (
    <main>
      <HeadingOne>Press</HeadingOne>

      <div className="flex flex-col gap-y-4">
        <div>
          <HeadingTwo align={TextAlignment.LEFT}>Reviews</HeadingTwo>

          {REVIEW_DATA.map((review) => {
            const displayedText = `${review.text} (${review.month} ${review.year.toString()})`;
            return (
              <div key={displayedText}>
                <InlineAnchor
                  isExternal
                  href={review.href}
                  ariaLabel={review.ariaLabel}
                >
                  {displayedText}
                </InlineAnchor>
              </div>
            );
          })}
        </div>

        <div>
          <HeadingTwo align={TextAlignment.LEFT}>Interviews</HeadingTwo>

          {INTERVIEW_DATA.map((interview) => {
            const displayedText = `${interview.text} (${interview.month} ${interview.year.toString()})`;
            return (
              <div key={displayedText}>
                <InlineAnchor
                  isExternal
                  href={interview.href}
                  ariaLabel={interview.ariaLabel}
                >
                  {displayedText}
                </InlineAnchor>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
