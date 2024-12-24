import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import LoadingSpinnerContainer from "@/components/LoadingSpinner/LoadingSpinnerContainer";

export default function Loading() {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinner />
    </LoadingSpinnerContainer>
  );
}
