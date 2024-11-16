"use client";  // 클라이언트에서만 사용!!

import BottomNavBar from "@/components/BottomNavBar";
import { usePathname } from "next/navigation"; // 이게 client에서만 사용돼서 clientLayout 만들어서 클라이언트 페이지들에 적용

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 현재 경로 가져오기

  // 랜딩 페이지에서 BottomNavBar 숨기기
  const hideBottomNav = pathname === "/";

  return (
    <>
      {children}
      {!hideBottomNav && <BottomNavBar />} {/* hideBottomNav가 true이면 BottomNavBar 안 보이기 */}
    </>
  );
}