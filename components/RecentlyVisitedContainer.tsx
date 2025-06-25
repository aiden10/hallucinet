
import RecentlyVisitedWindow from "./RecentlyVistedWindow";
import { useEffect, useState } from "react";

type historyElement = {
    url: string
    content: string
    html: string
}

export default function RecentlyVisitedContainer(){
    var [history, setHistory] = useState([]);
    useEffect(() => {
        var browserHistory = JSON.parse(localStorage.getItem("history") || '[]');
        setHistory(browserHistory);
    }, []);

  return (
    <div className="flex flex-col justify-center place-items-center">
        <div className="grid md:grid-rows-1 grid-rows-2 md:grid-cols-3 grid-cols-1 max-w-1/2 overflow-clip gap-10">
        {history.length === 0 && (
            <p className="text-white text-sm">No recent pages yet.</p>
        )}
        {history.slice(-3).reverse().map((page: historyElement, index) => (
            <RecentlyVisitedWindow
            key={index}
            title={page.url}
            content={page.content}
            html={page.html}
            />
        ))}
        </div>
    </div>
  );
}
