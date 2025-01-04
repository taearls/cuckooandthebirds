import { TextAlignmentType } from "@/types/layout";

export type HeadingProps = {
  children: React.ReactNode | React.ReactNode[];
  // TODO: find better way to express this
  align?: TextAlignmentType;
  accent?: boolean;
};
