
'use client'

import { useRef, useContext, useEffect } from "react";
import { BrowserContext } from "@/context/BrowserContext";

export default function PageComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { generatePage, pageContent } = useContext(BrowserContext);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const links = Array.from(container.querySelectorAll("a"));

    const handleClick = (e: Event) => {
      e.preventDefault();
      const text = (e.target as HTMLAnchorElement).textContent || "";
      generatePage(text, true, false);
    };

    links.forEach(link => link.addEventListener("click", handleClick));
    
    return () => {
      links.forEach(link => link.removeEventListener("click", handleClick));
    };
  }, [pageContent]);

  return (
    <div
        className="flex-1 overflow-auto bg-white"
        ref={containerRef}
        dangerouslySetInnerHTML={{__html: pageContent}}
    />
  );
}
