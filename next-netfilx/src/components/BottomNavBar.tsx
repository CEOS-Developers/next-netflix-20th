"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // usePathname 훅
import homeIcon from "../../public/BottomNavBar/homeIcon";
import searchIcon from "../../public/BottomNavBar/searchIcon";
import comingsoonIcon from "../../public/BottomNavBar/comingsoonIcon";
import downloadIcon from "../../public/BottomNavBar/downloadIcon";
import moreIcon from "../../public/BottomNavBar/moreIcon";

const BottomNavBar: React.FC = () => {
  const pathname = usePathname(); // useRouter 대신 usePathname을 사용, useRoter가 next.js 13 이상부터는 지원 x
  const [activeType, setActiveType] = useState<string | null>(null); // 현재 클릭된 로딩 경로의 타입을 관리

  const icons = [
    { component: homeIcon, label: "Home", path: "/main", type: ""},
    { component: searchIcon, label: "Search", path: "/search", type: "" },
    { component: comingsoonIcon, label: "Comming", path: "/loading", type: "coming"},
    { component: downloadIcon, label: "Download", path: "/loading", type: "download" },
    { component: moreIcon, label: "More", path: "/loading", type: "more" },
  ]; //아이콘 컴포넌트와 라벨을 배열로 관리해 이 둘을 감싼 layout을 map으로 반복하기, type을 추가해 로딩 경로 아이콘을 구분

  return (
    <BottomNavBarContainer>
      {icons.map((icon, index) => {
        const { component: IconComponent } = icon;
        const isActive = pathname === icon.path && (icon.type === "" || activeType === icon.type); // 홈과 서치는 기존대로 처리
        const isLoading = icon.path === "/loading";

        // 로딩 경로에서는 activeType에 따라 색상 변경
        const iconColor = isActive
          ? "white"
          : isLoading && activeType === icon.type
          ? "white"
          : "#8C8787";

        return (
          <Link
            key={index}
            href={icon.path}
            onClick={() => {
              // /loading 경로일 경우에만 activeType 설정
              if (isLoading) {
                setActiveType(icon.type);
              }
            }}
          >
            <NavIconContainer>
              <IconComponent color={iconColor} />
              <IconLabel $active={isActive ? "true" : "false"}>{icon.label}</IconLabel>
            </NavIconContainer>
          </Link>
        );
      })}
    </BottomNavBarContainer>
  );
};

export default BottomNavBar;

const BottomNavBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  display: flex;
  justify-content: space-around;
  background: #121212;
  padding: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NavIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconLabel = styled.span<{ $active: string }>`
  font-size: 12px;
  color: ${({ $active }) => ($active === "true" ? "white" : "#8C8787;")};
`;
