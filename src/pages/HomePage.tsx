import HeadingOne from "@/components/layout/headings/HeadingOne";
import RandomCloudinaryImage from "@/components/RandomCloudinaryImage/RandomCloudinaryImage";
import { TextAlignment } from "@/types/layout";
import { homePageTextData } from "@/util/constants/constants";

export default function HomePage() {
  return (
    <main>
      <HeadingOne align={TextAlignment.CENTER}>Our Story</HeadingOne>

      {homePageTextData}

      <RandomCloudinaryImage />
    </main>
  );
}
