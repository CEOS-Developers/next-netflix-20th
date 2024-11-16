"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Home from '@/public/svg/Home.svg';
import Search from '@/public/svg/Search.svg';
import ComingSoon from '@/public/svg/ComingSoon.svg';
import Downloads from '@/public/svg/Downloads.svg';
import More from '@/public/svg/More.svg';

type NavItem = {
    id: number;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    text: string;
    route: string;
};

// 아이콘, 텍스트, 경로를 객체 배열로 통합 관리
const navItems: NavItem[] = [
    { id: 0, icon: Home, text: "Home", route: "/home" },
    { id: 1, icon: Search, text: "Search", route: "/search" },
    { id: 2, icon: ComingSoon, text: "Coming Soon", route: "/coming-soon" },
    { id: 3, icon: Downloads, text: "Downloads", route: "/downloads" },
    { id: 4, icon: More, text: "More", route: "/more" },
];

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname(); // 현재 경로 가져오기
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const currentIndex = navItems.findIndex(item => item.route === pathname);
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, [pathname]);
    // 페이지 이동 함수
    const handleNavigation = (index: number) => {
        setActiveIndex(index);
        router.push(navItems[index].route);
    };

    return (
        <footer className="fixed bottom-0 w-[375px] h-[48px] flex justify-around items-center bg-black">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeIndex === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`w-[48px] h-[48px] flex flex-col justify-center items-center gap-1 ${
                            activeIndex === item.id ? "text-white" : "text-[#8C8787]"
                        }`}
                    >
                        <Icon className={`stroke-current ${isActive ? "text-white" : "text-[#8C8787]"}`} />
                        <span className={`w-[100vw] text-[8.2px] ${isActive ? "text-white" : "text-[#8C8787]"}`}>
                            {item.text}
                        </span>
                    </button>
                );
            })}
        </footer>
    );
}
