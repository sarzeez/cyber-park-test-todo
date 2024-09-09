import React from 'react';
import Header from './Header';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="dark:bg-dark relative z-10 min-h-screen overflow-hidden bg-[#F5F8FF]">
        <Header />
        {children}
        <div className="absolute -right-6 -top-7 -z-10">
          <svg
            width="802"
            height="812"
            viewBox="0 0 802 812"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_0_1)">
              <path
                d="M190.972 621.198L818.948 26.2056L874.993 90.3556L190.972 621.198Z"
                fill="#D327D7"
              ></path>
            </g>
            <g opacity="0.3" filter="url(#filter1_f_0_1)">
              <path
                d="M386.566 358.438L690.086 20.0003L748.947 81.5763L386.566 358.438Z"
                fill="#EDBB3C"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_0_1"
                x="0.972656"
                y="-163.794"
                width="1064.02"
                height="974.991"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="95"
                  result="effect1_foregroundBlur_0_1"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_0_1"
                x="254.566"
                y="-112"
                width="626.38"
                height="602.438"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="66"
                  result="effect1_foregroundBlur_0_1"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-0 -z-10 opacity-25 dark:opacity-5">
          <svg
            width="621"
            height="755"
            viewBox="0 0 621 755"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect
                width="1.15"
                height="602.6"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 478.4 602.601)"
                fill="url(#paint0_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="430.1"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 442.75 430.101)"
                fill="url(#paint1_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="389.85"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 407.1 389.851)"
                fill="url(#paint2_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="526.465"
                transform="matrix(-1.20101e-07 1 1 1.45893e-07 94.5352 34.501)"
                fill="url(#paint3_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="472.65"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 514.05 472.65)"
                fill="url(#paint4_linear_1248_151)"
              ></rect>
              <rect
                width="1.14998"
                height="361.1"
                transform="matrix(-1.20101e-07 1 1 1.45893e-07 259.9 70.1514)"
                fill="url(#paint5_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="754.654"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 549.7 754.654)"
                fill="url(#paint6_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="563.953"
                transform="matrix(-1.20101e-07 1 1 1.45893e-07 57.0479 105.8)"
                fill="url(#paint7_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="448.5"
                transform="matrix(1 8.74228e-08 8.74228e-08 -1 585.35 448.501)"
                fill="url(#paint8_linear_1248_151)"
              ></rect>
              <rect
                width="1.15"
                height="621"
                transform="matrix(-1.29039e-07 1 1 1.33335e-07 0 141.45)"
                fill="url(#paint9_linear_1248_151)"
              ></rect>
              <rect
                width="1.14998"
                height="450.8"
                transform="matrix(-1.29039e-07 1 1 1.33335e-07 170.2 177.101)"
                fill="url(#paint10_linear_1248_151)"
              ></rect>
              <rect
                width="1.14998"
                height="377.2"
                transform="matrix(-1.29039e-07 1 1 1.33335e-07 243.8 212.75)"
                fill="url(#paint11_linear_1248_151)"
              ></rect>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="602.6"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="430.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="389.85"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="526.465"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="472.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_1248_151"
                x1="0.574989"
                y1="0"
                x2="0.574989"
                y2="361.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="754.654"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="563.953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="448.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_1248_151"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="621"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_1248_151"
                x1="0.57499"
                y1="0"
                x2="0.57499"
                y2="450.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_1248_151"
                x1="0.574991"
                y1="0"
                x2="0.574991"
                y2="377.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-10 left-0 -z-10">
          <svg
            width="602"
            height="796"
            viewBox="0 0 602 796"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_1248_149)">
              <path
                d="M461.576 140.474L-32.5219 655.99L-86.3278 599.588L461.576 140.474Z"
                fill="#10D0DC"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_1248_149"
                x="-226.328"
                y="0.473633"
                width="827.904"
                height="795.516"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="70"
                  result="effect1_foregroundBlur_1248_149"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute -bottom-8 left-0 -z-10">
          <svg
            width="790"
            height="948"
            viewBox="0 0 790 948"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_1248_150)">
              <path
                d="M649.535 140.479L-14.6614 807.911L-55.8522 764.733L649.535 140.479Z"
                fill="#4510DC"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_1248_150"
                x="-195.853"
                y="0.478516"
                width="985.388"
                height="947.433"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="70"
                  result="effect1_foregroundBlur_1248_150"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 -z-20 opacity-25 dark:opacity-5">
          <svg
            width="621"
            height="755"
            viewBox="0 0 621 755"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect
                width="1.15"
                height="602.6"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 142.601 152.054)"
                fill="url(#paint0_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="430.1"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 178.251 324.554)"
                fill="url(#paint1_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="389.85"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 213.901 364.804)"
                fill="url(#paint2_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="526.465"
                transform="matrix(1.20101e-07 -1 -1 -1.45893e-07 526.466 720.153)"
                fill="url(#paint3_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="472.65"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 106.951 282.004)"
                fill="url(#paint4_linear_1248_164)"
              ></rect>
              <rect
                width="1.14998"
                height="361.1"
                transform="matrix(1.20101e-07 -1 -1 -1.45893e-07 361.101 684.503)"
                fill="url(#paint5_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="754.654"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 71.3008 0)"
                fill="url(#paint6_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="563.953"
                transform="matrix(1.20101e-07 -1 -1 -1.45893e-07 563.953 648.854)"
                fill="url(#paint7_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="448.5"
                transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 35.6514 306.153)"
                fill="url(#paint8_linear_1248_164)"
              ></rect>
              <rect
                width="1.15"
                height="621"
                transform="matrix(1.29039e-07 -1 -1 -1.33335e-07 621.001 613.204)"
                fill="url(#paint9_linear_1248_164)"
              ></rect>
              <rect
                width="1.14998"
                height="450.8"
                transform="matrix(1.29039e-07 -1 -1 -1.33335e-07 450.801 577.554)"
                fill="url(#paint10_linear_1248_164)"
              ></rect>
              <rect
                width="1.14998"
                height="377.2"
                transform="matrix(1.29039e-07 -1 -1 -1.33335e-07 377.201 541.904)"
                fill="url(#paint11_linear_1248_164)"
              ></rect>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="602.6"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="430.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="389.85"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="526.465"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="472.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_1248_164"
                x1="0.574989"
                y1="0"
                x2="0.574989"
                y2="361.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="754.654"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="563.953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="448.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_1248_164"
                x1="0.575"
                y1="0"
                x2="0.575"
                y2="621"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_1248_164"
                x1="0.57499"
                y1="0"
                x2="0.57499"
                y2="450.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_1248_164"
                x1="0.574991"
                y1="0"
                x2="0.574991"
                y2="377.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.401042" stopColor="#D3E2ED"></stop>
                <stop offset="1" stopColor="#D3E2ED"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </main>
    </>
  );
};

export default Container;
