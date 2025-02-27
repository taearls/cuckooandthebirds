export const cloneDeep = <T extends object>(item: T): T =>
  JSON.parse(JSON.stringify(item));

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

/**
 * Helper function to safely convert a type T into an Array<T>
 * @param item - the item to convert into an array
 * @returns - an array of type Array<T>
 */
export const intoArray = <T>(item: T | Array<T> | undefined): Array<T> => {
  if (!item) {
    return [] as Array<T>;
  }

  return Array.isArray(item) ? item : [item];
};
