import * as React from "react";
import { SVGProps } from "react";

const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.228 11.258H27.1V11.2H14.5v5.6h7.912c-1.154 3.26-4.256 5.6-7.912 5.6a8.4 8.4 0 0 1 0-16.8c2.141 0 4.09.808 5.573 2.127l3.96-3.96C21.533 1.437 18.188 0 14.5 0 6.769 0 .5 6.269.5 14c0 7.732 6.269 14 14 14 7.732 0 14-6.268 14-14 0-.939-.097-1.855-.272-2.742Z"
      fill="#FFC107"
    />
    <path
      d="m2.114 7.484 4.6 3.373A8.396 8.396 0 0 1 14.5 5.6c2.141 0 4.09.808 5.573 2.127l3.96-3.96C21.531 1.437 18.186 0 14.5 0 9.122 0 4.459 3.036 2.114 7.484Z"
      fill="#FF3D00"
    />
    <path
      d="M14.5 28c3.616 0 6.902-1.384 9.386-3.634l-4.333-3.667A8.337 8.337 0 0 1 14.5 22.4c-3.641 0-6.733-2.322-7.898-5.562l-4.565 3.517C4.354 24.89 9.059 28 14.5 28Z"
      fill="#4CAF50"
    />
    <path
      d="M28.228 11.258H27.1V11.2H14.5v5.6h7.912a8.428 8.428 0 0 1-2.86 3.9l.001-.002 4.333 3.667C23.58 24.644 28.5 21 28.5 14c0-.939-.097-1.855-.272-2.742Z"
      fill="#1976D2"
    />
  </svg>
);

export default SvgGoogle;