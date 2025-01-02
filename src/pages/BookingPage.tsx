import InlineAnchor from "@/components/InlineAnchor/InlineAnchor";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { WEBSITE_EMAIL } from "@/util/constants/constants";

export default function BookingPage() {
  return (
    <main>
      <HeadingOne>{"Booking"}</HeadingOne>
      <Paragraph>
        {
          "If you're interested in hiring me for coding work, my music, or just want to say hello—I'd love to hear from you. I'm a voracious learner, and nothing is too nerdy or niche for my taste."
        }
      </Paragraph>
      <Paragraph>
        {"The best way to reach me is via email at "}
        <InlineAnchor
          href={`mailto:${WEBSITE_EMAIL}`}
          ariaLabel="Send an email to Tyler Earls"
        >
          {WEBSITE_EMAIL}
        </InlineAnchor>
        {"."}
      </Paragraph>
      {/* <ContactForm /> */}
    </main>
  );
}
