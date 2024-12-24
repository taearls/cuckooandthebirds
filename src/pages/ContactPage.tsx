import InlineAnchor from "@/components/InlineAnchor";
import { HeadingOne } from "@/components/layout/headings";
import { Paragraph } from "@/components/layout/Paragraph";
import { PORTFOLIO_EMAIL } from "@/util/constants/constants";

export default function Contact() {
  return (
    <main>
      <HeadingOne>{"Contact Tyler Earls"}</HeadingOne>
      <Paragraph>
        {
          "If you're interested in hiring me for coding work, my music, or just want to say hello—I'd love to hear from you. I'm a voracious learner, and nothing is too nerdy or niche for my taste."
        }
      </Paragraph>
      <Paragraph>
        {"The best way to reach me is via email at "}
        <InlineAnchor
          href={`mailto:${PORTFOLIO_EMAIL}`}
          ariaLabel="Send an email to Tyler Earls"
        >
          {PORTFOLIO_EMAIL}
        </InlineAnchor>
        {"."}
      </Paragraph>
      {/* <ContactForm /> */}
    </main>
  );
}
