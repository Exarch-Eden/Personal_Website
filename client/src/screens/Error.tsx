import React, { ReactElement } from "react";

type ErrorProps = {
  errorCode: number;
  errorMessage?: string;
};

const Error = ({
  errorCode,
  errorMessage,
}: ErrorProps): ReactElement => {
  return (
    <article className="articleContainer">
      <p>
        Error {errorCode} {errorMessage ? `: ${errorMessage}` : null}
      </p>
    </article>
  );
};

export default Error;
