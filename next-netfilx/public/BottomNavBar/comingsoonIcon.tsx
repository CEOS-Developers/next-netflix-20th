import React from "react";
import { IconProps } from "./IconPropsDto";

const comingsoonIcon: React.FC<IconProps> = ({ color = "white" }) => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H6V2H18V14ZM10 3.5V12.5L16 8L10 3.5Z" fill={color}/>
    </svg>

);

export default comingsoonIcon;