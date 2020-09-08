import * as React from "react";

function SvgClose(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 12l6-6a1 1 0 00-1-1l-6 6-6-6a1 1 0 00-1 1l6 6-6 6a1 1 0 001 1l6-6 6 6a1 1 0 001 0v-1l-6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClose;
