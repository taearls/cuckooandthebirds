import { Cloudinary } from "@cloudinary/url-gen";

export const WEBSITE_EMAIL = "cuckooandthebirds@gmail.com";

export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  "gi",
);

export const IMAGE_GROUPS = {
  harmonica: 2,
  joy: 5,
  martin: 11,
  profile: 7,
  rickenbacker: 6,
  telecaster: 2,
} as const;

export const SHUFFLED_IMAGE_GROUPS = Object.keys(IMAGE_GROUPS).sort(
  () => 0.5 - Math.random(),
);

export const CLOUDINARY_INSTANCE = new Cloudinary({
  cloud: {
    cloudName: "cuckooandthebirds",
    // TODO: set up API key
  },
});
