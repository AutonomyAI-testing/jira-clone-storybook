/**
 * BrowserMockup — A Chrome-style browser window mockup component.
 * Faithfully implements the Figma design (node 149-11542).
 *
 * Color palette (from design palette analysis):
 *   - Tab bar background: #E6E6E6
 *   - Toolbar background: #FFFFFF with #F5F5F5 border
 *   - Active tab: #FFFFFF
 *   - URL bar pill: #F5F5F5
 *   - Icon color (nav): #A7A7A7
 *   - Icon color (active/dark): #575757
 *   - Content area: #FFFFFF
 *   - Window title: #111111
 */

import React from "react";

// --- Inline SVG atoms (verbatim from Figma assets) ---

const LogoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#logo-clip)">
      <path
        d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
        fill="#111111"
      />
    </g>
    <defs>
      <clipPath id="logo-clip">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CloseTabIcon = () => (
  <svg
    width="7"
    height="7"
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      y1="-0.406033"
      x2="10.0462"
      y2="-0.406033"
      transform="matrix(-0.640097 0.638773 -0.640096 -0.638773 6.43063 0)"
      stroke="#575757"
      strokeWidth="0.812067"
      strokeLinejoin="round"
    />
    <line
      y1="-0.406033"
      x2="10.0462"
      y2="-0.406033"
      transform="matrix(0.640096 0.638773 -0.640097 0.638773 0 0.582795)"
      stroke="#575757"
      strokeWidth="0.812067"
      strokeLinejoin="round"
    />
  </svg>
);

const NewTabIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="6.00057"
      y1="3.73896e-08"
      x2="6.00057"
      y2="11.9752"
      stroke="#575757"
      strokeWidth="1.62413"
      strokeLinejoin="round"
    />
    <line
      y1="5.98499"
      x2="12"
      y2="5.98499"
      stroke="#575757"
      strokeWidth="1.62413"
      strokeLinejoin="round"
    />
  </svg>
);

const BackIcon = () => (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="1.71825"
      y1="5.99684"
      x2="12.0212"
      y2="5.99684"
      stroke="#A7A7A7"
      strokeWidth="1.62413"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.86971 0.85884L0.859356 5.99992L6.86971 11.141"
      stroke="#A7A7A7"
      strokeWidth="1.7178"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardIcon = () => (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="11.1618"
      y1="6.00316"
      x2="0.858853"
      y2="6.00316"
      stroke="#A7A7A7"
      strokeWidth="1.62413"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.01031 11.1412L12.0207 6.00008L6.01031 0.859009"
      stroke="#A7A7A7"
      strokeWidth="1.7178"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M11.1436 8.30971C10.498 10.4297 8.48849 11.9756 6.10949 11.9756C3.20911 11.9756 0.857879 9.67782 0.857879 6.84336C0.857879 4.0089 3.20911 1.71112 6.10949 1.71112C7.66485 1.71112 9.06228 2.3719 10.0239 3.42187"
      stroke="#575757"
      strokeWidth="1.71484"
    />
    <path d="M12.0005 5.98762L6.00048 5.98762L12.0005 6.58916e-06L12.0005 5.98762Z" fill="#575757" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="7"
    height="9"
    viewBox="0 0 7 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.45639 0.0088828C3.8782 0.0505325 4.40846 0.244904 4.85494 0.692858C5.37377 1.21345 5.74421 2.04012 5.74421 3.26887H4.92304C4.92304 2.21115 4.60936 1.60911 4.27361 1.27221C3.97228 0.969887 3.62453 0.851006 3.3804 0.8261L3.28269 0.821165C3.04105 0.821229 2.63598 0.926862 2.29176 1.27221C1.95601 1.60911 1.64233 2.21115 1.64233 3.26887H0.821165C0.821165 2.04012 1.1916 1.21345 1.71043 0.692858C2.22068 0.180928 2.84059 5.96074e-05 3.28269 0L3.45639 0.0088828Z"
      fill="#575757"
    />
    <rect y="3.26862" width="6.56371" height="5.73137" rx="0.812067" fill="#575757" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7.99935 10.6667L4.66602 7.33341L5.59935 6.36675L7.33268 8.10008V2.66675H8.66602V8.10008L10.3993 6.36675L11.3327 7.33341L7.99935 10.6667ZM3.99935 13.3334C3.63268 13.3334 3.31879 13.2029 3.05768 12.9417C2.79657 12.6806 2.66602 12.3667 2.66602 12.0001V10.0001H3.99935V12.0001H11.9993V10.0001H13.3327V12.0001C13.3327 12.3667 13.2021 12.6806 12.941 12.9417C12.6799 13.2029 12.366 13.3334 11.9993 13.3334H3.99935Z"
      fill="#A7A7A7"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="3"
    height="11"
    viewBox="0 0 3 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <ellipse cx="1.27182" cy="1.26919" rx="1.27182" ry="1.26919" fill="#A7A7A7" />
    <ellipse cx="1.27182" cy="5.49972" rx="1.27182" ry="1.26919" fill="#A7A7A7" />
    <ellipse cx="1.27182" cy="9.73077" rx="1.27182" ry="1.26919" fill="#A7A7A7" />
  </svg>
);

const DropdownArrowIcon = () => (
  <svg
    width="8"
    height="4"
    viewBox="0 0 8 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0L5.41421 2.58579C4.63316 3.36684 3.36683 3.36683 2.58579 2.58579L0 0H8Z"
      fill="#1C252E"
    />
  </svg>
);

const WindowsControlsIcon = () => (
  <svg
    width="89"
    height="11"
    viewBox="0 0 89 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Window controls"
  >
    {/* Minimize */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-0.000312805 4.89564L10.6797 4.89564V5.78564L-0.000312805 5.78564V4.89564Z"
      fill="#111111"
    />
    {/* Maximize/Restore */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.8061 3.03392H40.2524V9.58756H46.8061V3.03392ZM39.1602 1.94165V10.6798H47.8983V1.94165H39.1602Z"
      fill="#111111"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.1016 0H49.8397V8.73818H47.7837V7.71016H48.8117V1.02802H42.1296V2.05604H41.1016V0Z"
      fill="#111111"
    />
    {/* Close */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M82.955 5.34L78.3203 0.705317L79.0256 0L83.6603 4.63468L88.295 0L89.0003 0.705317L84.3656 5.34L89.0003 9.97468L88.295 10.68L83.6603 6.04532L79.0256 10.68L78.3203 9.97468L82.955 5.34Z"
      fill="#111111"
    />
  </svg>
);

const FlagIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#flag-clip)">
      <path d="M0 0H16V16H0" fill="#BD3D44" />
      <path
        d="M0 1.8125H16M0 4.28125H16M0 6.75H16M0 9.21875H16M0 11.6875H16M0 14.1562H16"
        stroke="white"
        strokeWidth="1.25"
      />
      <rect width="7" height="8.5" fill="#192F5D" />
    </g>
    <defs>
      <clipPath id="flag-clip">
        <rect width="16" height="16" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const VerticalDivider = () => (
  <div
    style={{
      width: 1,
      height: 22,
      background: "rgba(0,0,0,0.2)",
      flexShrink: 0,
    }}
  />
);

// --- Wordmark (SuddenlyCommit) ---
// Frame_19 is 188×32 — scale to fit the browser tab size.
// Rendered at ~94px wide (0.5x) inside the active tab.
const WordmarkIcon = ({ width = 94, height = 16 }: { width?: number; height?: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 188 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SuddenlyCommit"
  >
    <g clipPath="url(#wordmark-clip)">
      <path
        d="M43.8167 15.4625C42.1708 15.0611 41.2814 14.6742 41.2814 13.7762C41.2814 12.8002 42.1737 12.0638 43.3576 12.0638C44.3162 12.0638 45.272 12.4825 46.0459 13.2448L46.0979 13.2968L46.7216 12.5143L46.6754 12.471C45.6965 11.5845 44.5934 11.134 43.3951 11.134C41.6135 11.134 40.2708 12.2977 40.2708 13.8426C40.2708 15.3874 41.4518 15.9823 43.3547 16.4269C45.2374 16.8601 45.9044 17.3336 45.9044 18.2346C45.9044 19.225 44.9804 19.918 43.655 19.918C42.5 19.918 41.4316 19.4589 40.5624 18.5897L40.5104 18.5377L39.8867 19.3174L39.93 19.3607C40.9176 20.3338 42.1968 20.8478 43.629 20.8478C45.5954 20.8478 46.9179 19.765 46.9179 18.1537C46.9179 16.7561 46.0199 15.9765 43.8225 15.4596L43.8167 15.4625Z"
        fill="black"
      />
      <path
        d="M57.2375 16.8891C57.2375 18.6823 56.0681 19.9355 54.3962 19.9355C52.7243 19.9355 51.5548 18.6823 51.5548 16.8891V11.3103H50.5586V16.8891C50.5586 19.2309 52.1381 20.8653 54.3991 20.8653C56.66 20.8653 58.2395 19.2309 58.2395 16.8891V11.3103H57.2433V16.8891H57.2375Z"
        fill="black"
      />
      <path
        d="M65.7501 11.3103H62.5449V20.7007H65.7501C68.6868 20.7007 70.7341 18.766 70.7341 15.9997C70.7341 13.2334 68.6839 11.3103 65.7501 11.3103ZM65.7501 19.7709H63.5411V12.2401H65.7501C68.0977 12.2401 69.7378 13.7849 69.7378 15.9997C69.7378 18.2145 68.0977 19.7738 65.7501 19.7738V19.7709Z"
        fill="black"
      />
      <path
        d="M77.8634 11.3103H74.6582V20.7007H77.8634C80.8001 20.7007 82.8473 18.766 82.8473 15.9997C82.8473 13.2334 80.7972 11.3103 77.8634 11.3103ZM77.8634 19.7709H75.6544V12.2401H77.8634C80.211 12.2401 81.8511 13.7849 81.8511 15.9997C81.8511 18.2145 80.211 19.7738 77.8634 19.7738V19.7709Z"
        fill="black"
      />
      <path
        d="M103.684 19.0317L97.8744 11.3363L97.857 11.3103H96.8926V20.7007H97.8888V12.9793L103.696 20.6747L103.716 20.7007H104.68V11.3103H103.684V19.0317Z"
        fill="black"
      />
      <path d="M109.903 11.3103H108.904V20.7007H115.049V19.7449H109.903V11.3103Z" fill="black" />
      <path
        d="M120.253 15.8929L117.195 11.3392L117.175 11.3103H115.934L119.739 16.8833V20.7007H120.779V16.8833L124.57 11.3103H123.358L120.253 15.8929Z"
        fill="black"
      />
      <path
        d="M130.853 15.2604C129.285 14.885 128.587 14.5876 128.587 13.8022C128.587 13.0168 129.332 12.4681 130.284 12.4681C131.18 12.4681 132.107 12.8637 132.892 13.5827L132.947 13.6318L133.81 12.4999L133.764 12.4595C132.736 11.5557 131.647 11.137 130.336 11.137C128.471 11.137 127.062 12.3353 127.062 13.9264C127.062 15.5954 128.231 16.196 130.256 16.6724C131.757 17.0132 132.519 17.3366 132.519 18.1682C132.519 18.8381 131.939 19.5167 130.645 19.5167C129.531 19.5167 128.549 19.1009 127.648 18.2404L127.596 18.1913L126.689 19.3059L126.733 19.3492C127.772 20.3454 129.069 20.8507 130.593 20.8507C132.681 20.8507 134.03 19.7448 134.03 18.0354C134.03 16.3259 132.759 15.708 130.853 15.2604Z"
        fill="black"
      />
      <path
        d="M141.616 11.3103H137.654V20.7006H139.15V17.481H141.616C143.646 17.481 145.119 16.1845 145.119 14.3942C145.119 12.6039 143.646 11.3074 141.616 11.3074V11.3103ZM139.15 12.7107H141.425C142.742 12.7107 143.594 13.372 143.594 14.3942C143.594 15.4164 142.742 16.0776 141.425 16.0776H139.15V12.7078V12.7107Z"
        fill="black"
      />
      <path
        d="M152.474 11.3103H150.877L146.886 20.6083L146.846 20.7036H148.503L149.312 18.818H154.047L154.856 20.7036H156.513L152.5 11.3536L152.482 11.3132L152.474 11.3103ZM153.458 17.455H149.889L151.674 13.2998L153.458 17.455Z"
        fill="black"
      />
      <path
        d="M166.022 18.3789C165.381 19.0748 164.506 19.4762 163.619 19.4762C161.809 19.4762 160.278 17.8852 160.278 15.9996C160.278 14.114 161.809 12.5374 163.619 12.5374C164.506 12.5374 165.381 12.9359 166.022 13.6347L166.068 13.6867L167.122 12.676L167.076 12.6269C166.152 11.674 164.924 11.1514 163.619 11.1514C160.974 11.1514 158.742 13.3719 158.742 16.0025C158.742 18.633 160.977 20.8651 163.619 20.8651C164.893 20.8651 166.152 20.3281 167.076 19.3896L167.125 19.3405L166.068 18.3299L166.022 18.3818V18.3789Z"
        fill="black"
      />
      <path
        d="M92.7532 16.4038V15.4336H88.6558L87.6855 16.4038H92.7532Z"
        fill="black"
      />
      <path
        d="M93.2633 12.2661V11.3103H86.6738V20.7007H93.2633V19.7449H87.6845V12.2661H93.2633Z"
        fill="black"
      />
      <path
        d="M176.79 16.6175V15.217H173.287L171.887 16.6175H176.79Z"
        fill="black"
      />
      <path
        d="M177.314 12.7108V11.3103H170.375V20.7007H177.314V19.3002H171.885V12.7108H177.314Z"
        fill="black"
      />
      <path
        d="M184.515 15.2604C182.947 14.885 182.249 14.5876 182.249 13.8022C182.249 13.0168 182.994 12.4681 183.947 12.4681C184.842 12.4681 185.769 12.8637 186.554 13.5827L186.609 13.6318L187.472 12.4999L187.426 12.4595C186.398 11.5557 185.31 11.137 183.999 11.137C182.133 11.137 180.724 12.3353 180.724 13.9264C180.724 15.5954 181.894 16.196 183.918 16.6724C185.419 17.0132 186.182 17.3366 186.182 18.1682C186.182 18.8381 185.601 19.5167 184.308 19.5167C183.193 19.5167 182.211 19.1009 181.31 18.2404L181.258 18.1913L180.352 19.3059L180.395 19.3492C181.434 20.3454 182.731 20.8507 184.256 20.8507C186.343 20.8507 187.692 19.7448 187.692 18.0354C187.692 16.3259 186.421 15.708 184.515 15.2604Z"
        fill="black"
      />
      {/* Logo mark — grid of squares */}
      <path
        d="M19.9127 12.9996L32.9154 -0.000244141H14.6659L4.79336 9.87234V27.2064L0 31.9998H18.2494L28.122 22.1272V13.0025H19.9127V12.9996ZM5.43729 26.5596V18.8065L23.6001 0.646571H31.3532C28.2981 3.70161 13.329 18.6708 5.44017 26.5596H5.43729ZM14.9345 0.646571H22.6876L5.44017 17.894V10.1409L14.9345 0.646571ZM19.2687 13.6464H27.0218L9.31817 31.3501H1.55929L19.2658 13.6464H19.2687ZM17.9838 31.3501H10.2306L27.4781 14.1026V21.8557L17.9838 31.3501Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="wordmark-clip">
        <rect width="188" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// --- Social Icons (Frame_21: 168x24 — FB, LI, IG, YT) ---
const SocialIconsRow = () => (
  <svg
    width="168"
    height="24"
    viewBox="0 0 168 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Social media links"
  >
    <g clipPath="url(#social-fb)">
      <path
        d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z"
        fill="black"
      />
    </g>
    <g clipPath="url(#social-li)">
      <path
        d="M70.2234 0H49.7719C48.7922 0 48 0.773438 48 1.72969V22.2656C48 23.2219 48.7922 24 49.7719 24H70.2234C71.2031 24 72 23.2219 72 22.2703V1.72969C72 0.773438 71.2031 0 70.2234 0ZM55.1203 20.4516H51.5578V8.99531H55.1203V20.4516ZM53.3391 7.43438C52.1953 7.43438 51.2719 6.51094 51.2719 5.37187C51.2719 4.23281 52.1953 3.30937 53.3391 3.30937C54.4781 3.30937 55.4016 4.23281 55.4016 5.37187C55.4016 6.50625 54.4781 7.43438 53.3391 7.43438ZM68.4516 20.4516H64.8937V14.8828C64.8937 13.5562 64.8703 11.8453 63.0422 11.8453C61.1906 11.8453 60.9094 13.2937 60.9094 14.7891V20.4516H57.3563V8.99531H60.7687V10.5609H60.8156C61.2891 9.66094 62.4516 8.70938 64.1813 8.70938C67.7859 8.70938 68.4516 11.0813 68.4516 14.1656V20.4516Z"
        fill="black"
      />
    </g>
    <g clipPath="url(#social-ig)">
      <path
        d="M108 2.16094C111.206 2.16094 111.586 2.175 112.847 2.23125C114.019 2.28281 114.652 2.47969 115.073 2.64375C115.631 2.85938 116.034 3.12188 116.452 3.53906C116.873 3.96094 117.131 4.35938 117.347 4.91719C117.511 5.33906 117.708 5.97656 117.759 7.14375C117.816 8.40937 117.83 8.78906 117.83 11.9906C117.83 15.196 117.816 15.5757 117.759 16.8516C117.708 18.0187 117.511 18.6516 117.347 19.0734C117.131 19.6312 116.87 20.0297 116.452 20.4469C116.034 20.8687 115.631 21.1266 115.073 21.3422C114.656 21.5062 114.019 21.7031 112.847 21.7547C111.583 21.8109 111.206 21.825 108 21.825C104.794 21.825 104.417 21.8109 103.153 21.7547C101.981 21.7031 101.348 21.5062 100.927 21.3422C100.369 21.1266 99.9703 20.8641 99.548 20.4469C99.1266 20.025 98.8688 19.6266 98.6531 19.0734C98.4891 18.6516 98.2922 18.0141 98.2406 16.8516C98.1844 15.5852 98.1703 15.2055 98.1703 11.9906C98.1703 8.78531 98.1844 8.40562 98.2406 7.14375C98.2922 5.97656 98.4891 5.34375 98.6531 4.91719C98.8688 4.35937 99.1313 3.96094 99.548 3.53906C99.9703 3.12188 100.369 2.85938 100.927 2.64375C101.344 2.47969 101.981 2.28281 103.153 2.23125C104.414 2.175 104.794 2.16094 108 2.16094ZM108 0C104.741 0 104.333 0.01875 103.055 0.075C101.781 0.13125 100.909 0.3375 100.145 0.632812C99.3562 0.9375 98.6859 1.35 98.0203 2.01562C97.3547 2.68125 96.9422 3.35156 96.6375 4.14844C96.3422 4.90781 96.1359 5.78438 96.0797 7.05938C96.0234 8.33906 96 8.74688 96 12.0047C96 15.2625 96.0188 15.6703 96.075 16.9453C96.1312 18.2203 96.3375 19.0922 96.6328 19.8516C96.9375 20.6484 97.35 21.3187 98.0156 21.9844C98.6812 22.65 99.3516 23.0625 100.148 23.3672C100.908 23.6625 101.784 23.8687 103.059 23.925C104.337 23.9812 104.745 24 108.003 24C111.261 24 111.669 23.9812 112.947 23.925C114.222 23.8687 115.097 23.6625 115.858 23.3672C116.648 23.0625 117.319 22.65 117.984 21.9844C118.65 21.3187 119.062 20.6484 119.367 19.8516C119.662 19.0922 119.869 18.2156 119.925 16.9453C119.981 15.6703 120 15.2625 120 12.0047C120 8.74688 119.981 8.33906 119.925 7.05938C119.869 5.78438 119.662 4.90781 119.367 4.14844C119.062 3.35156 118.655 2.68125 117.984 2.01562C117.319 1.35 116.648 0.9375 115.861 0.632812C115.097 0.3375 114.225 0.13125 112.95 0.075C111.666 0.0140625 111.258 0 108 0Z"
        fill="black"
      />
      <path
        d="M108 5.83594C104.597 5.83594 101.836 8.59688 101.836 12C101.836 15.4031 104.597 18.1641 108 18.1641C111.403 18.1641 114.164 15.4031 114.164 12C114.164 8.59688 111.403 5.83594 108 5.83594ZM108 15.9984C105.792 15.9984 104.002 14.2078 104.002 12C104.002 9.79219 105.792 8.00156 108 8.00156C110.208 8.00156 111.998 9.79219 111.998 12C111.998 14.2078 110.208 15.9984 108 15.9984Z"
        fill="black"
      />
      <path
        d="M115.847 5.59214C115.847 6.38902 115.2 7.0312 114.408 7.0312C113.611 7.0312 112.969 6.38433 112.969 5.59214C112.969 4.79526 113.616 4.15308 114.408 4.15308C115.2 4.15308 115.847 4.79995 115.847 5.59214Z"
        fill="black"
      />
    </g>
    <g clipPath="url(#social-yt)">
      <path
        d="M167.761 7.20005C167.761 7.20005 167.527 5.54536 166.805 4.8188C165.891 3.86255 164.869 3.85786 164.4 3.80161C161.044 3.55786 156.005 3.55786 156.005 3.55786H155.995C155.995 3.55786 150.956 3.55786 147.6 3.80161C147.131 3.85786 146.109 3.86255 145.195 4.8188C144.473 5.54536 144.244 7.20005 144.244 7.20005C144.244 7.20005 144 9.14536 144 11.086V12.9047C144 14.8454 144.239 16.7907 144.239 16.7907C144.239 16.7907 144.473 18.4454 145.191 19.1719C146.105 20.1282 147.305 20.0954 147.839 20.1985C149.761 20.3813 156 20.4375 156 20.4375C156 20.4375 161.044 20.4282 164.4 20.1891C164.869 20.1329 165.891 20.1282 166.805 19.1719C167.527 18.4454 167.761 16.7907 167.761 16.7907C167.761 16.7907 168 14.85 168 12.9047V11.086C168 9.14536 167.761 7.20005 167.761 7.20005ZM153.52 15.1125V8.36724L160.003 11.7516L153.52 15.1125Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="social-fb">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="social-li">
        <rect width="24" height="24" fill="white" transform="translate(48)" />
      </clipPath>
      <clipPath id="social-ig">
        <rect width="24" height="24" fill="white" transform="translate(96)" />
      </clipPath>
      <clipPath id="social-yt">
        <rect width="24" height="24" fill="white" transform="translate(144)" />
      </clipPath>
    </defs>
  </svg>
);

// --- Scrollbar ---
const Scrollbar = () => (
  <div
    style={{
      width: 12,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      borderLeft: "1px solid #F5F5F5",
    }}
  >
    {/* Track */}
    <div
      style={{
        width: 6,
        flex: 1,
        background: "rgba(145, 158, 171, 0.12)",
        borderRadius: 3,
        margin: "4px 0",
        position: "relative",
      }}
    >
      {/* Thumb */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 18,
          height: 18,
          background: "white",
          borderRadius: "50%",
          border: "1px solid rgba(145, 158, 171, 0.08)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  </div>
);

// --- Main BrowserMockup Component ---
export interface BrowserMockupProps {
  /** URL shown in the address bar */
  url?: string;
  /** Tab title */
  tabTitle?: string;
  /** Whether the connection is secure (shows lock icon) */
  isSecure?: boolean;
  /** Page content to render inside the browser viewport */
  children?: React.ReactNode;
}

export const BrowserMockup = ({
  url = "suddenlycommit.com",
  tabTitle = "SuddenlyCommit",
  isSecure = true,
  children,
}: BrowserMockupProps): JSX.Element => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded"
      style={{
        width: "100%",
        maxWidth: 960,
        background: "#ffffff",
        border: "1px solid #E0E0E0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* ── Title Bar ──────────────────────────────────────────────── */}
      <div
        style={{
          height: 30,
          background: "#ffffff",
          borderBottom: "1px solid #F5F5F5",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: 12,
          paddingLeft: 12,
          flexShrink: 0,
        }}
      >
        <WindowsControlsIcon />
      </div>

      {/* ── Tab Bar ────────────────────────────────────────────────── */}
      <div
        style={{
          height: 35,
          background: "#E6E6E6",
          display: "flex",
          alignItems: "flex-end",
          paddingLeft: 8,
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Active Tab */}
        <div
          style={{
            height: 28,
            minWidth: 200,
            maxWidth: 240,
            background: "#ffffff",
            borderRadius: "8px 8px 0 0",
            display: "flex",
            alignItems: "center",
            gap: 6,
            paddingLeft: 12,
            paddingRight: 8,
            position: "relative",
            flexShrink: 0,
          }}
          role="tab"
          aria-selected={true}
          title={tabTitle}
        >
          {/* Favicon */}
          <LogoIcon />
          {/* Tab title with fade */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              position: "relative",
              fontSize: 11,
              fontWeight: 500,
              color: "red",
              whiteSpace: "nowrap",
            }}
          >
            {tabTitle}
            {/* Fade overlay on right */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 24,
                height: "100%",
                background: "linear-gradient(to right, transparent, #ffffff)",
              }}
            />
          </div>
          {/* Close tab button */}
          <button
            aria-label="Close tab"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              borderRadius: 2,
              flexShrink: 0,
            }}
          >
            <CloseTabIcon />
          </button>
        </div>

        {/* New Tab button */}
        <button
          aria-label="Open new tab"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            marginLeft: 4,
            marginBottom: 0,
            borderRadius: 4,
          }}
        >
          <NewTabIcon />
        </button>
      </div>

      {/* ── Navigation / Address Bar ───────────────────────────────── */}
      <div
        style={{
          height: 44,
          background: "#ffffff",
          borderBottom: "1px solid #F5F5F5",
          display: "flex",
          alignItems: "center",
          paddingLeft: 12,
          paddingRight: 12,
          gap: 8,
          flexShrink: 0,
        }}
      >
        {/* Back */}
        <button
          aria-label="Go back"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}
        >
          <BackIcon />
        </button>

        {/* Forward */}
        <button
          aria-label="Go forward"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}
        >
          <ForwardIcon />
        </button>

        {/* Refresh */}
        <button
          aria-label="Refresh page"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}
        >
          <RefreshIcon />
        </button>

        {/* URL Bar */}
        <div
          style={{
            flex: 1,
            height: 23,
            background: "#F5F5F5",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            gap: 6,
            minWidth: 0,
          }}
          role="group"
          aria-label="Address bar"
        >
          {isSecure && <LockIcon />}
          <span
            style={{
              flex: 1,
              fontSize: 11,
              color: "red",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: 1,
            }}
          >
            {url}
          </span>
          <FlagIcon />
          <DropdownArrowIcon />
        </div>

        {/* Download */}
        <button
          aria-label="Downloads"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}
        >
          <DownloadIcon />
        </button>

        <VerticalDivider />

        {/* Menu */}
        <button
          aria-label="Browser menu"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}
        >
          <MenuIcon />
        </button>
      </div>

      {/* ── Content Area ───────────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          background: "#ffffff",
          display: "flex",
          minHeight: 160,
          overflow: "hidden",
        }}
      >
        {/* Page content */}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "32px 40px",
          }}
        >
          {children ?? (
            <DefaultContent />
          )}
        </div>

        {/* Scrollbar */}
        <Scrollbar />
      </div>
    </div>
  );
};

// --- Default content shown inside the browser (matches Figma) ---
const DefaultContent = (): JSX.Element => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 32 }}>
    {/* Wordmark */}
    <WordmarkIcon width={188} height={32} />
    {/* Social icons */}
    <SocialIconsRow />
  </div>
);
