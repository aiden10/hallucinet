'use client'

import { useContext, useEffect, useRef } from "react";
import { BrowserContext } from "@/context/BrowserContext";
import html2canvas from "html2canvas";

export default function PageComponent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { generatePage, pageContent, URL } = useContext(BrowserContext);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(pageContent);
    doc.close();

    setTimeout(() => {
      html2canvas(doc.body).then(canvas => {
        const imageData = canvas.toDataURL(); // base64 image

        const history = JSON.parse(localStorage.getItem("history") || '[]');

        // Push new history item
        history.push({
          url: URL,
          content: imageData,
          html: pageContent
        });

        localStorage.setItem("history", JSON.stringify(history));
      });
    }, 200);

    const links = Array.from(doc.querySelectorAll("a"));

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
    <iframe
      ref={iframeRef}
      className="flex-1 w-full h-full border-none z-100"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
