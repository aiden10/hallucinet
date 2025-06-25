

import { Page, BrowserContext } from "@/context/BrowserContext";
import { useContext } from "react";

type windowProps = {
    title: string;
    content: string; // base64 image
    html: string;
};

export default function RecentlyVisitedWindow({title, content, html}: windowProps){
    const { navigate } = useContext(BrowserContext);
    
    return <div 
        className="flex flex-col p-5 min-w-full md:min-w-0 bg-neutral-500 rounded-2xl gap-y-5 hover:cursor-pointer hover:bg-neutral-200 transition-all duration-100"
        onClick={() => {navigate({"content": html, "url": title})}}
        >
        <img src={content} alt="page" className="rounded-md object-cover w-full max-h-20"/>
        <p className="text-[12px] overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
    </div>
}