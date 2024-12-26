import { getCloudinarySrc } from "@/util/utils";

export type CloudinaryImageProps = {
  transformations?: Array<string>;
  alt: string;
  extension: string;
  publicId: string;
  width: number;
  height: number;
};

export default function CloudinaryImage({
  transformations = [],
  alt,
  extension,
  publicId,
  width,
  height,
}: CloudinaryImageProps) {
  return (
    <img
      src={getCloudinarySrc(publicId, extension, transformations)}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
