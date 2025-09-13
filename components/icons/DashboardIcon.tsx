import { SVGProps } from 'react';

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M3.33325 3.33325H8.33325V9.99992H3.33325V3.33325Z"
        stroke="#384250"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 13.3333H8.33325V16.6666H3.33325V13.3333Z"
        stroke="#384250"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6666 9.99992H16.6666V16.6666H11.6666V9.99992Z"
        stroke="#384250"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6666 3.33325H16.6666V6.66659H11.6666V3.33325Z"
        stroke="#384250"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
