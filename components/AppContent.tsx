
'use client'

import HomeSearchbar from "./HomeSearchbar";
import PageContainer from "./PageContainer";
import LoadScreen from "./LoadScreen";
import Navbar from "./Navbar";
import { useContext } from "react";
import { BrowserContext } from "@/context/BrowserContext";

export default function AppContent(){
  const { screenState, pageContent } = useContext(BrowserContext);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      {screenState === "home" && <HomeSearchbar />}
      {screenState === "page" && <PageContainer />}
      {screenState === "loading" && <LoadScreen />}
    </div>
  );
}
