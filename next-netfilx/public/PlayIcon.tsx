import { IconProps } from "./BottomNavBar/IconPropsDto";
import React from "react";

const PlayIcon: React.FC<IconProps> = ({ color = "black" }) => (
  <svg
    width="72"
    height="30"
    viewBox="0 0 72 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.5873 7.58241V22H37.1651V17.2341H40.0826C43.0001 17.2341 45.0483 15.2858 45.0483 12.4083C45.0483 9.53073 43.06 7.58241 40.1925 7.58241H34.5873ZM37.1651 9.6906H39.5131C41.3615 9.6906 42.4305 10.6797 42.4305 12.4083C42.4305 14.1568 41.3515 15.1559 39.5031 15.1559H37.1651V9.6906ZM46.6956 22H49.1835V7.58241H46.6956V22ZM55.1071 20.2915C54.0281 20.2915 53.3087 19.7419 53.3087 18.8727C53.3087 18.0334 53.9981 17.4939 55.1971 17.4139L57.6449 17.2641V18.0734C57.6449 19.3523 56.5159 20.2915 55.1071 20.2915ZM54.3578 22.1699C55.7166 22.1699 57.0455 21.4605 57.6549 20.3115H57.7049V22H60.1028V14.7063C60.1028 12.5781 58.3943 11.1893 55.7666 11.1893C53.0689 11.1893 51.3803 12.6081 51.2704 14.5864H53.5784C53.7383 13.7071 54.4877 13.1376 55.6666 13.1376C56.8956 13.1376 57.6449 13.7771 57.6449 14.8861V15.6455L54.8474 15.8053C52.2696 15.9652 50.8208 17.0942 50.8208 18.9726C50.8208 20.881 52.3095 22.1699 54.3578 22.1699ZM63.1889 25.9366C65.6068 25.9366 66.7758 25.0474 67.6851 22.4196L71.5118 11.4091H68.894L66.3962 19.8818H66.3562L63.8583 11.4091H61.1407L64.9074 22.01C64.9174 22.04 64.7676 22.5695 64.7676 22.5995C64.4878 23.5786 63.9583 23.9683 62.9291 23.9683C62.7793 23.9683 62.3397 23.9583 62.2098 23.9283V25.8966C62.3397 25.9266 63.049 25.9366 63.1889 25.9366Z"
      fill="black"
    />
    <path d="M0 4V25.6L18 14.8L0 4Z" fill={color} />
  </svg>
);

export default PlayIcon;