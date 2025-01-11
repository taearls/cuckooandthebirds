import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import HeadingTwo from "@/components/layout/headings/HeadingTwo";
import { TextAlignment } from "@/types/layout";
import { INTERVIEW_DATA, REVIEW_DATA } from "@/util/constants/data/press/data";

export type PressData = {
  text: string;
  year: number;
  ariaLabel: string;
  month: string;
  href: string;
};

export default function PressPage() {
  return (
    <main>
      <FlexContainer flexFlow="column" gapY={8}>
        <HeadingOne>Press</HeadingOne>

        <div>
          <FlexContainer flexFlow="column" gapY={4}>
            <HeadingTwo align={TextAlignment.LEFT}>Reviews</HeadingTwo>

            <>
              {REVIEW_DATA.map((review) => {
                const displayedText = `${review.text} (${review.month} ${review.year.toString()})`;
                return (
                  <InlineAnchor
                    key={displayedText}
                    isExternal
                    href={review.href}
                    ariaLabel={review.ariaLabel}
                  >
                    {displayedText}
                  </InlineAnchor>
                );
              })}
            </>
          </FlexContainer>
        </div>

        <div>
          <FlexContainer flexFlow="column" gapY={4}>
            <HeadingTwo align={TextAlignment.LEFT}>Interviews</HeadingTwo>

            <>
              {INTERVIEW_DATA.map((interview) => {
                const displayedText = `${interview.text} (${interview.month} ${interview.year.toString()})`;
                return (
                  <InlineAnchor
                    key={displayedText}
                    isExternal
                    href={interview.href}
                    ariaLabel={interview.ariaLabel}
                  >
                    {displayedText}
                  </InlineAnchor>
                );
              })}
            </>
          </FlexContainer>
        </div>
      </FlexContainer>
    </main>
  );
}
