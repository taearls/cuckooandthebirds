import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { useLocation, useNavigate } from "react-router";

export type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main>
      <HeadingOne>Oh no!</HeadingOne>
      <Paragraph>
        <code>
          {`${window.location.host}${location.pathname}${location.search}${location.hash}`}
        </code>{" "}
        does not exist.
      </Paragraph>
      <button
        className={"accent text-xl underline"}
        onClick={
          // Attempt to recover by navigating to previous page
          () => navigate(-1)
        }
      >
        Return to Previous Page
      </button>
    </main>
  );
}
