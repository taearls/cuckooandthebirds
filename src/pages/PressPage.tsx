import InlineAnchor from "@/components/InlineAnchor/InlineAnchor.tsx";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer.tsx";
import HeadingOne from "@/components/layout/headings/HeadingOne.tsx";
import HeadingTwo from "@/components/layout/headings/HeadingTwo.tsx";
import { FlexFlowCSSValue, TextAlignment } from "@/types/layout.ts";
import {
  INTERVIEW_DATA,
  REVIEW_DATA,
} from "@/util/constants/data/press/data.ts";

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
      <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={8}>
        <HeadingOne>Press</HeadingOne>

        <div>
          <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={4}>
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
          <FlexContainer flexFlow={FlexFlowCSSValue.COLUMN} gapY={4}>
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
