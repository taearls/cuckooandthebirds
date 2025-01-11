import styles from "./PageContainer.module.css";

export type PageContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function PageContainer({ children }: PageContainerProps) {
  // height of page container controlled in NavigationBar via navigationMachine
  return (
    <div
      id="page-container"
      // mt-[69px] sets initial marginTop on page load.
      className={`${styles["page-container"]} top-0 mx-auto mt-[69px] w-full bg-none px-24 py-4 leading-8`}
    >
      {children}
    </div>
  );
}
