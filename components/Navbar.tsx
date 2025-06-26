import { useContext, useState, useEffect } from "react";
import { BrowserContext } from "@/context/BrowserContext";
import SidePanel from "./SidePanel";

export default function Navbar(){
    const { URL, generatePage, setQuery, back, forward, setScreenState } = useContext(BrowserContext);    
    const [input, setInput] = useState("");
    const [panelVisible, setPanelVisible] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery(input);
        generatePage(input, false, false);
        setInput("");
    };
    useEffect(() => {
        setInput(URL);
    }, [URL]);

    return <div className="flex flex-row min-w-full min-h-5 py-3 bg-stone-600/70 z-1000 fixed top-0">
        {/* Back button */}
        <svg
            className="max-w-12 ml-1 px-2 hover:cursor-pointer hover:opacity-75 min-w-8"
            onClick={back}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"/></svg>
        {/* Forward button */}
        <svg
            className="max-w-12 px-2 hover:cursor-pointer hover:opacity-75 min-w-8"
            onClick={forward}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"/></svg>
        {/* Refresh button */}
        <svg 
            className="max-w-6 ml-3 hover:cursor-pointer hover:opacity-75 transition-transform duration-300 hover:rotate-360 min-w-3"
            onClick={() => generatePage('', false, true)}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z"/></svg>
        {/* Home button */}
        <svg 
            className="max-w-6 ml-5 mb-1 hover:cursor-pointer hover:opacity-75 min-w-4"
            onClick={() => {
                setInput("");
                setScreenState("home")
            }}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"/></svg>
        {/* Search bar */}
        <form 
            className="md:ml-25 md:min-w-2/3"
            onSubmit={handleSubmit}>
            <input 
                value={input}
                onInput={(e) => {
                    setInput((e.target as HTMLInputElement).value);
                }}
                placeholder="search for something or enter address"
                className="text-black bg-amber-50/50 rounded-md md:min-w-2/3 max-w-30
                 py-1 px-3 ml-5 md:ml-0 accent-neutral-50 __className_8f5913"
                type="text" />
        </form>
        <div className="flex-1"/>
        {/* Clear history button */}
        <svg 
            className="max-w-6 hover:cursor-pointer hover:opacity-75 mr-3 md:mr-5 min-w-4"
            onClick={() => {
                localStorage.setItem("history", "[]");
                localStorage.setItem("searches", "[]");
            }}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"/></svg>
        {/* Open side menu button */}
        <svg 
            className="max-w-6 hover:cursor-pointer hover:opacity-75 mr-3 md:mr-5"
            onClick={() => setPanelVisible(!panelVisible)}
            fill="#FFF" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"/></svg>
    <SidePanel
        isVisible={panelVisible}
    />
    </div>
}
