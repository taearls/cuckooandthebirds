import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { WEBSITE_EMAIL } from "@/util/constants/constants";

export default function BookingPage() {
  return (
    <main>
      <FlexContainer flexFlow="column" alignItems="center" gapY={8}>
        <HeadingOne>Booking</HeadingOne>
        <Paragraph width="sm:w-65ch">
          Cuckoo and the Birds is fully vaxxed and ready to rock!
        </Paragraph>
        <Paragraph width="sm:w-65ch">
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
