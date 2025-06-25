
'use client'

import HomeSearchbar from "@/components/HomeSearchbar";
import PageContainer from "@/components/PageContainer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { BrowserContext } from "@/context/BrowserContext";

export default function AppContent(){
  const { screenState, pageContent } = useContext(BrowserContext);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      {screenState === "home" && <HomeSearchbar />}
      {screenState === "page" && (
        <>
          <PageContainer />
        </>
      )}
    </div>
  );
}
