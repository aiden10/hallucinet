
'use client'

import { BrowserProvider } from "@/context/BrowserContext";
import AppContent from "@/components/AppContent";

export default function Home() {
  
  return (
    <BrowserProvider>
      <div className="bg-black">
        <AppContent/>
      </div>
    </BrowserProvider>
  );
}
