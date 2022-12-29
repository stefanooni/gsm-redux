import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/_global";
import { Results } from "../Results/Results";

export const ResultsWrapper = memo(() => {
  const searchTerm = useSelector((state: RootState) => state.search.value);

  const resultsContent = useMemo(() => {
    if (!searchTerm || searchTerm.length === 0) {
      return (
        <p className="text-center">
          Type something to start searching for beers, minimum 3 characters.
        </p>
      );
    }

    return <Results />;
  }, [searchTerm]);

  return (
    <div className="my-6 container px-5 mx-auto">
      <h2 className="mb-5 text-center text-3xl">
        {searchTerm && searchTerm.length > 0 ? (
          <>Results for &quot;{searchTerm}&quot;</>
        ) : (
          <>Results</>
        )}
      </h2>
      {resultsContent}
    </div>
  );
});

ResultsWrapper.displayName = "ResultsWrapper";
