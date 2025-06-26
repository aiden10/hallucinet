
import { useState, useContext } from "react";
import { Quicksand } from "next/font/google";
import { BrowserContext } from "@/context/BrowserContext";

const quicksand = Quicksand({subsets: ['latin'], weight: '400'}); 

type Props = {
  isVisible: boolean;
};
type historyElement = {
    url: string
    content: string
    html: string
}

export default function SidePanel({ isVisible }: Props) {
    const [page, setPage] = useState('default');
    const { navigate } = useContext(BrowserContext);

    return (
        <div
            className={`
            fixed top-14 right-0 h-full w-64 bg-stone-600/70 shadow-lg z-50
            transition-transform duration-300 ease-in-out
            ${isVisible ? 'translate-x-0' : 'translate-x-full'}
            `}
        >
            {
                page === "default" && 
                <div className="flex flex-col">
                    <div className="w-full bg-stone-200/90 p-4 m-3 flex-row flex hover:cursor-pointer hover:bg-stone-200/70
                     transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2"
                     onClick={() => setPage("history")}
                     >
                        <h1 className={`text-[24px] ${quicksand.className}`}>History</h1>
                        <div className="flex-1"></div>
                        <svg 
                            className="max-w-7 mr-5"
                            clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.503 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75zm7.487.021.007 5.563c0 .288.165.55.424.675l3.978 1.928c.373.18.821.024 1.001-.349s.024-.821-.349-1.001l-3.555-1.725s-.006-5.093-.006-5.093c0-.414-.337-.749-.75-.749-.414 0-.75.337-.75.751z" fillRule="nonzero"/></svg>
                    </div>
                    <div className="w-full bg-stone-200/90 p-4 m-3 flex-row flex hover:cursor-pointer hover:bg-stone-200/70
                     transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2"
                     onClick={() => setPage("options")}
                     >
                        <h1 className={`text-[24px] ${quicksand.className}`}>Options</h1>
                        <div className="flex-1"></div>
                        <svg 
                            className="max-w-7 mr-5"
                            clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126" fillRule="nonzero"/></svg>
                    </div>
                </div>
            }
            {
                page === "history" &&
                <div className="flex flex-col h-full">
                    <div className="flex flex-row w-full bg-amber-50/50 ">
                        <h1 className={`${quicksand.className} text-white text-[24px] p-4`}>History</h1>
                        <div className="flex-1"></div>
                        <svg 
                            onClick={() => setPage('default')}
                            className="max-w-8 mr-5 fill-black hover:cursor-pointer hover:fill-white/50 transition-transform duration-300 hover:rotate-15"
                            clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
                    </div>
                    <div className="flex flex-col overflow-y-scroll text-white p-2 gap-y-3">
                        {
                            JSON.parse(localStorage.getItem("history") || "[]").reverse().map((entry: historyElement, index: number) => (
                                <p 
                                    className="w-full truncate text-left hover:text-sky-300 hover:cursor-pointer bg-amber-50/20 p-2 rounded-sm min-h-10"
                                    onClick={() => navigate({"content": entry.html, "url": entry.url})}
                                    key={index}>{entry.url}</p>
                            ))
                        }
                    </div>
                </div>
            }
            {
                page === "options" &&
                <div className="flex flex-col items-center">
                    <div className="flex flex-row w-full bg-amber-50/50 ">
                        <h1 className={`${quicksand.className} text-white text-[24px] p-4`}>Options</h1>
                        <div className="flex-1"></div>
                        <svg 
                            onClick={() => setPage('default')}
                            className="max-w-8 mr-5 fill-black hover:cursor-pointer hover:fill-white/50 transition-transform duration-300 hover:rotate-15"
                            clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
                    </div>
                    <p className="text-white p-10">nothing here for now</p>
                </div>
            }
        </div>
    );
}
