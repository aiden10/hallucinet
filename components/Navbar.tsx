import { useContext, useState, useEffect } from "react";
import { BrowserContext } from "@/context/BrowserContext";

export default function Navbar(){
    const { URL, generatePage, setQuery, back, forward } = useContext(BrowserContext);    
    const [input, setInput] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery(input);
        generatePage(input, false, false);
        setInput("");
    };
    useEffect(() => {
        setInput(URL);
    }, [URL]);

    return <div className="flex flex-row min-w-full min-h-5 py-3 bg-stone-800">
        <svg
            className="max-w-12 px-2 hover:cursor-pointer hover:opacity-75"
            onClick={back}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"/></svg>
        <svg
            className="max-w-12 px-2 hover:cursor-pointer hover:opacity-75"
            onClick={forward}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"/></svg>
        <svg 
            className="max-w-6 ml-3 hover:cursor-pointer hover:opacity-75"
            onClick={() => generatePage('', false, true)}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z"/></svg>
        <form 
            className="md:ml-25 min-w-2/3"
            onSubmit={handleSubmit}>
            <input 
                value={input}
                onInput={(e) => {
                    setInput((e.target as HTMLInputElement).value);
                }}
                placeholder="search for something or enter address"
                className="text-white bg-stone-600 rounded-md min-w-2/3 py-1 px-3 ml-10 md:ml-0"
                type="text" />
        </form>
    </div>
}
