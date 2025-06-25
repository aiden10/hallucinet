
import RecentlyVisitedWindow from "./RecentlyVistedWindow";
import { useEffect, useState } from "react";

type historyElement = {
    url: string
    content: string
    html: string
}

export default function RecentlyVisitedContainer() {
  const [history, setHistory] = useState<historyElement[]>([]);

  useEffect(() => {
    const browserHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(browserHistory);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {history.length === 0 ? (
        <p className="text-white/50 text-sm text-center">No recent pages yet.</p>
      ) : (
        <div className="flex flex-col md:flex-row min-w-1/2 justify-center items-center gap-10">
          {history
            .slice(-3)
            .reverse()
            .map((page: historyElement, index) => (
              <RecentlyVisitedWindow
                key={index}
                title={page.url}
                content={page.content}
                html={page.html}
              />
            ))}
        </div>
      )}
    </div>
  );
}
