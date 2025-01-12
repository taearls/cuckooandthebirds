import { TextAlignmentType } from "@/types/layout";

export type HeadingProps = {
  children: React.ReactNode | React.ReactNode[];
  align?: TextAlignmentType;
  accent?: boolean;
};
