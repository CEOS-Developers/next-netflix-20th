"use client"

import "./style.css";
import LogoSVG from '@/public/svg/logos_netflix.svg';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function Landing() {
    
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
          }, 5500);

        return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리

    },[]);


    return (
        <div className="container">
            <div className="netflix">
                <div className="n-1"></div>
                <div className="n-3"></div>
                <div className="n-2">
                    <div className="filler"></div>
                </div>
            </div>
            <div className="netflix-logo">
                <LogoSVG/>
            </div>
        </div>
    );
}
