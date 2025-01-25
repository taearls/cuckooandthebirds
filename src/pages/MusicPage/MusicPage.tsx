import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import {
  AlignItemsCSSValue,
  FlexFlowCSSValue,
  MediaQueryPrefixValue,
} from "@/types/layout";
import { RELEASE_SLUG_DATA } from "@/util/constants/data/releases/data";
import { Link } from "react-router";

export default function MusicPage() {
  const sortedReleases = RELEASE_SLUG_DATA.sort((a, b) => {
    if (a.year > b.year) return -1;
    else if (a.year < b.year) return 1;
    return 0;
  });

  return (
    <main>
      <FlexContainer
        flexFlow={FlexFlowCSSValue.COLUMN}
        alignItems={AlignItemsCSSValue.CENTER}
        gapY={8}
      >
        <HeadingOne>Music</HeadingOne>
        <Paragraph>
          Click on the album artwork below to learn more about it!
        </Paragraph>
        <section>
          <FlexContainer
            flexFlow={FlexFlowCSSValue.COLUMN}
            gapX={4}
            gapY={4}
            responsive={{
              flexFlow: {
                prefix: MediaQueryPrefixValue.LG,
                value: FlexFlowCSSValue.ROW,
              },
            }}
          >
            {sortedReleases.map((release) => (
              <FlexContainer
                key={release.releaseId}
                flexFlow={FlexFlowCSSValue.COLUMN}
                alignItems={AlignItemsCSSValue.CENTER}
                gapY={2}
              >
                <Link to={`/music/${release.releaseId}`}>
                  <div className="hover:opacity-75">
                    <CloudinaryImage
                      alt={release.alt}
                      publicId={release.cldImgPath}
                    />
                  </div>
                </Link>
                <Paragraph>
                  {release.title} ({release.year})
                </Paragraph>
              </FlexContainer>
            ))}
          </FlexContainer>
        </section>
      </FlexContainer>
    </main>
  );
}
