import { getTextAlignmentClass } from "@/util/utils";

import { HeadingProps } from "./types";

export default function HeadingTwo({
  children,
  align = "center",
}: HeadingProps) {
  const alignmentClass = getTextAlignmentClass(align);

  return (
    <h2 className={`${alignmentClass} accent mb-8 text-3xl font-bold `}>
      {children}
    </h2>
  );
}
