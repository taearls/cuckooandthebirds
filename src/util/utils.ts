import { TextAlignment, TextAlignmentType } from "@/types/layout";
import { ReactNode } from "react";

export const cloneDeep = <T extends object>(item: T) =>
  JSON.parse(JSON.stringify(item));

export const getTextAlignmentClass = (alignment: TextAlignmentType): string => {
  switch (alignment) {
    case TextAlignment.LEFT: {
      return "text-left";
    }
    case TextAlignment.CENTER: {
      return "text-center";
    }
    case TextAlignment.RIGHT:
      return "text-right";
  }
};

export const getCloudinarySrc = (
  publicId: string,
  extension: string,
  transformations: Array<string>,
): string => {
  if (transformations.length === 0) {
    return `https://res.cloudinary.com/cuckooandthebirds/image/upload/${publicId}.${extension}`;
  }
  const transformationString = transformations.join(",");
  return `https://res.cloudinary.com/cuckooandthebirds/image/upload/${transformationString}/v1/${publicId}.${extension}`;
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const jsxOrEmptyString = (value?: ReactNode | string): typeof value => {
  if (value == null) return "";

  return value;
};

// const getRandomizedTextAndPhotoData = (shuffledPhotoGroups, textData) => {
//   const photoGroups = this.shuffledPhotoGroups;
// return textData.map((item, i) => {
//   const photoGroupName = photoGroups[i];
//   if (photoGroupName == null) return item;

//   const photoGroupLength = this.photoGroupLengths[photoGroupName];
//   const photoId = this.getRandomNumberInRange({ max: photoGroupLength });
//   const cloudinaryUrl = this.$cloudinary.image.url(
//     `Sanjana%20Quarantine%20Photoshoot/${photoGroupName}/${photoId}`,
//     {
//       width: "500",
//       height: "700",
//       crop: "fill",
//       gravity: "face",
//       quality: "60",
//       "fetch-format": "auto",
//     },
//   );
//   return {
//     ...item,
//     cloudinaryUrl,
//     imageAlt: `Sanjana Quarantine Photoshoot ${photoGroupName}-${photoId}`,
//   };
// });
// };

export const getRandomNumberInRange = ({
  max,
  min = 1,
}: {
  max: number;
  min?: number;
}): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
