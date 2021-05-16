import React, { ReactElement } from "react";

// css
import "../styles/Universal.css";

type ErrorProps = {
  errorCode: number;
  errorMessage?: string;
};

const Error = ({ errorCode, errorMessage }: ErrorProps): ReactElement => {
  return (
    <article className="articleContainer">
      <div className="titleContainer">
        <p>Error {errorCode}</p>
      </div>
      <div>
        <p>{errorMessage ? `${errorMessage}` : null}</p>
      </div>
    </article>
  );
};

export default Error;
