import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { AlignItemsCSSValue, FlexFlowCSSValue } from "@/types/layout";
import { WEBSITE_EMAIL } from "@/util/constants/constants";

export default function BookingPage() {
  return (
    <main>
      <FlexContainer
        flexFlow={FlexFlowCSSValue.COLUMN}
        alignItems={AlignItemsCSSValue.CENTER}
        gapY={8}
      >
        <HeadingOne>Booking</HeadingOne>
        <Paragraph>
          Cuckoo and the Birds is fully vaxxed and ready to rock!
        </Paragraph>
        <Paragraph>
          {"The best way to contact us is via email at "}
          <InlineAnchor
            href={`mailto:${WEBSITE_EMAIL}`}
            ariaLabel="Send an email to Cuckoo and the Birds"
            accent
          >
            {WEBSITE_EMAIL}
          </InlineAnchor>
          {"."}
        </Paragraph>
      </FlexContainer>
      {/* TODO: add Contact Form */}
      {/* <ContactForm /> */}
    </main>
  );
}
