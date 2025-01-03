import { CLOUDINARY_INSTANCE } from "@/util/constants/constants";
import {
  accessibility,
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";

export type CloudinaryImageProps = {
  // transformations?: Array<string>;
  // alt: string;
  // extension: string;
  publicId: string;
  // width: number;
  // height: number;
};

export default function CloudinaryImage({
  // transformations = [],
  // alt,
  // extension,
  publicId,
  // width,
  // height,
}: CloudinaryImageProps) {
  const img = CLOUDINARY_INSTANCE.image(publicId);

  return (
    <AdvancedImage
      cldImg={img}
      plugins={[lazyload(), responsive(), accessibility(), placeholder()]}
    />
  );
}
