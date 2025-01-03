import { SHUFFLED_IMAGE_GROUPS } from "@/util/constants/constants";
import { getRandomNumberInRange } from "@/util/utils";

import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";

// TODO: implement cache
// const PHOTO_GROUP_CACHE = SHUFFLED_IMAGE_GROUPS.map((group) => {
//   return {
//     [group]: {},
//   };
// });

// https://cloudinary.com/documentation/javascript_quick_start#3_transform_and_deliver_the_image

export default function RandomCloudinaryImage() {
  const imageGroup =
    SHUFFLED_IMAGE_GROUPS[
      getRandomNumberInRange({ max: SHUFFLED_IMAGE_GROUPS.length - 1, min: 0 })
    ];

  const photoId = getRandomNumberInRange({ max: SHUFFLED_IMAGE_GROUPS.length });

  const publicId = `Sanjana Quarantine Photoshoot/${imageGroup}/${photoId}`;

  return <CloudinaryImage publicId={publicId} alt="image" />;
}
