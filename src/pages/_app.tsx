import { useRouteError } from "react-router-dom";

export const Catch = () => {
  const error: unknown = useRouteError();

  if (!(error instanceof Error)) {
    return null;
  }

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
};
