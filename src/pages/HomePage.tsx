// import InlineAnchor from "@/components/InlineAnchor";
// import { Paragraph } from "@/components/layout/Paragraph";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import { TextAlignment } from "@/types/layout";
import { homePageTextData } from "@/util/constants/constants";

export default function HomePage() {
  return (
    <main>
      <HeadingOne align={TextAlignment.CENTER}>Our Story</HeadingOne>

      {homePageTextData}
    </main>
  );
}
