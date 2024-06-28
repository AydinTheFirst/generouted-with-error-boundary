import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const ReactErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ErrorBoundary FallbackComponent={fallbackRender}>{children}</ErrorBoundary>
  );
};
