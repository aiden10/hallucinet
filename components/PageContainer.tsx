'use client';

import { useContext, useEffect, useRef } from "react";
import { BrowserContext } from "@/context/BrowserContext";
import html2canvas from "html2canvas";

export default function PageComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { generatePage, pageContent, URL } = useContext(BrowserContext);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timeoutId = setTimeout(() => {
      const links = Array.from(container.querySelectorAll("a"));
      const handleClick = (e: Event) => {
        e.preventDefault();
        const text = (e.target as HTMLAnchorElement).textContent || "";
        generatePage(text, true, false);
      };
      links.forEach(link => link.addEventListener("click", handleClick));

      html2canvas(container).then(canvas => {
        const imageData = canvas.toDataURL();
        const history = JSON.parse(localStorage.getItem("history") || '[]');
        history.push({ url: URL, content: imageData, html: pageContent });
        localStorage.setItem("history", JSON.stringify(history));
      });

      return () => {
        links.forEach(link => link.removeEventListener("click", handleClick));
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pageContent]);

  return (
    <div
      ref={containerRef}
      className="flex-1 w-full h-full overflow-auto bg-white p-4 z-100 mt-5"
      dangerouslySetInnerHTML={{ __html: pageContent }}
    />
  );
}
