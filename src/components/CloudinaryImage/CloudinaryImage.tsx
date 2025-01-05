import { CLOUDINARY_INSTANCE } from "@/util/constants/constants";
import { fill } from "@cloudinary/url-gen/actions/resize";

// import {
//   accessibility,
//   AdvancedImage,
//   lazyload,
//   placeholder,
//   responsive,
// } from "@cloudinary/react";

export type CloudinaryImageProps = {
  // transformations?: Array<string>;
  alt: string;
  // extension: string;
  publicId: string;
  width?: number;
  height?: number;
};

export default function CloudinaryImage({
  // transformations = [],
  alt,
  // extension,
  publicId,
  width = 500,
  height = 500,
}: CloudinaryImageProps) {
  const img = CLOUDINARY_INSTANCE.image(publicId);

  img.resize(fill().width(width).height(height));

  return (
    <img
      src={img.toURL()}
      alt={alt}
      style={{ maxWidth: width, maxHeight: height }}
    />
  );
}
