import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.278 3.217h-2.412v-.805A2.412 2.412 0 0 0 10.453 0H7.236a2.413 2.413 0 0 0-2.412 2.412v.805H2.41a2.407 2.407 0 0 0-.804 4.677v8.993a4.025 4.025 0 0 0 4.021 4.021h6.433a4.026 4.026 0 0 0 4.021-4.02V7.893a2.407 2.407 0 0 0-.804-4.677Zm-8.846-.805a.804.804 0 0 1 .804-.804h3.217a.804.804 0 0 1 .804.804v.805H6.432v-.805Zm8.042 14.475A2.413 2.413 0 0 1 12.06 19.3H5.628a2.413 2.413 0 0 1-2.412-2.413V8.042h11.258v8.845Zm.804-10.454H2.411a.804.804 0 0 1 0-1.608h12.867a.804.804 0 0 1 0 1.608Z"
      fill="#343A40"
    />
  </svg>
);

export default SvgDelete;
