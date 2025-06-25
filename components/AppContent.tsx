
'use client'

import HomeSearchbar from "./HomeSearchbar";
import PageContainer from "./PageContainer";
import LoadScreen from "./LoadScreen";
import Navbar from "./Navbar";
import RecentlyVisitedContainer from "./RecentlyVisitedContainer";
import { useContext } from "react";
import { BrowserContext } from "@/context/BrowserContext";
import { Monoton } from "next/font/google";

const monoton = Monoton({weight: '400', subsets: ['latin']})

export default function AppContent(){
  const { screenState } = useContext(BrowserContext);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
        <div className="fixed w-full h-screen blur-[4px] bg-[url('/bg.jpg')] bg-cover z--10 bg-cente brightness-60 opacity-60 scale-109"></div>
        <Navbar />
        {screenState === "home" && 
            <div className="flex flex-col justify-center place-items-center flex-1 gap-y-8 md:gap-y-15 z-100">
                <h1 className={`text-[48px] md:text-[86px] ${monoton.className}
                    bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-800 inline-block
                    text-shadow-2xs select-none
                    text-transparent bg-clip-text`}>Hallucinet</h1>
                <HomeSearchbar />
                <RecentlyVisitedContainer/>
            </div>
        }
        {screenState === "page" && <PageContainer />}
        {screenState === "loading" && <LoadScreen />}
    </div>
  );
}
