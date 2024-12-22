// import InlineAnchor from "@/components/InlineAnchor";
// import { Paragraph } from "@/components/layout/Paragraph";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import { homePageTextData } from "@/util/constants/constants";

export default function Home() {
  return (
    <main>
      <HeadingOne align="center">
        {/* <h1 class="text-center font-default text-4xl font-bold mb-8"> */}
        Our Story
        {/* </h1>{" "} */}
      </HeadingOne>

      {homePageTextData}
    </main>
  );
}
