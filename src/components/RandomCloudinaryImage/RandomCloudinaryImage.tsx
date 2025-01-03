import { IMAGE_GROUPS } from "@/util/constants/constants";
import { capitalizeText } from "@/util/styling/styling.utils";
import { getRandomNumberInRange } from "@/util/utils";

import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";

// TODO: implement cache
// const PHOTO_GROUP_CACHE = Object.entries(IMAGE_GROUPS).map(
//   ([groupName, count]) => {
//     return {
//       [groupName]: {
//         usedCount: 0,
//         max: count,
//       },
//     };
//   },
// );

let PHOTO_GROUP_CACHE: Record<string, number> = Object.assign(
  {},
  ...Object.keys(IMAGE_GROUPS).map((groupName) => ({
    [groupName]: 0,
  })),
);

const getOneOfLowestGroup = () => {
  const values = Object.values(PHOTO_GROUP_CACHE);
  const lowestCount = Math.min(...values);

  const [result] = Object.entries(PHOTO_GROUP_CACHE).find(
    ([groupName, count]) => {
      const max = IMAGE_GROUPS[groupName];
      console.log({ groupName, count, max });

      return count === lowestCount && count < max;
    },
  );

  console.log("boom");

  console.log({ obj: PHOTO_GROUP_CACHE, result });

  PHOTO_GROUP_CACHE = { ...PHOTO_GROUP_CACHE, [result]: lowestCount + 1 };

  // PHOTO_GROUP_CACHE[result]++;

  return result;
};

export default function RandomCloudinaryImage() {
  // this is not working as expected.
  const imageGroup = getOneOfLowestGroup();

  const photoId = getRandomNumberInRange({ max: IMAGE_GROUPS[imageGroup] });

  const publicId = `Sanjana Quarantine Photoshoot/${imageGroup}/${photoId}`;

  console.log({ imageGroup, publicId, photoId, PHOTO_GROUP_CACHE });

  return (
    <CloudinaryImage
      publicId={publicId}
      alt={`${capitalizeText(imageGroup)} Photo from Sanjana Quarantine Photoshoot`}
    />
  );
}
