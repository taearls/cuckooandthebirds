import { TextAlignment } from "@/types/layout";
import { mergeClasses } from "@/util/styling/styling.utils";
import { getTextAlignmentClass } from "@/util/utils";

import { HeadingProps } from "./types";

export default function HeadingOne({
  children,
  align = TextAlignment.CENTER,
  accent = true,
}: HeadingProps) {
  const alignmentClass = getTextAlignmentClass(align);
  return (
    <h1
      className={mergeClasses(
        alignmentClass,
        accent && "accent",
        "mb-4 text-4xl font-extrabold",
      )}
    >
      {children}
    </h1>
  );
}
