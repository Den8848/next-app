import React, { SVGProps } from 'react';

const MasterCard = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_10001_1487)">
        <path
          d="M22.6423 16.7168H17.3696V7.28247H22.6424L22.6423 16.7168Z"
          fill="#FF5F00"
        />
        <path
          d="M17.698 12C17.698 10.0863 18.598 8.38148 19.9994 7.28286C18.9386 6.45003 17.6265 5.99802 16.2756 6.00001C12.9477 6.00001 10.25 8.68625 10.25 12C10.25 15.3137 12.9477 18 16.2756 18C17.6265 18.002 18.9387 17.55 19.9995 16.7171C18.5982 15.6187 17.698 13.9138 17.698 12Z"
          fill="#EB001B"
        />
        <path
          d="M29.75 12C29.75 15.3137 27.0524 18 23.7245 18C22.3733 18.002 21.0611 17.55 20 16.7171C21.4019 15.6185 22.3019 13.9138 22.3019 12C22.3019 10.0862 21.4019 8.38148 20 7.28286C21.061 6.45005 22.3733 5.99805 23.7244 6.00001C27.0523 6.00001 29.7499 8.68625 29.7499 12"
          fill="#F79E1B"
        />
        <rect
          width="40"
          height="24"
          fill="white"
          style={{ mixBlendMode: 'color' }}
        />
      </g>
      <defs>
        <clipPath id="clip0_10001_1487">
          <rect width="40" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MasterCard;
