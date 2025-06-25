
'use client'

import { createContext, useState } from "react";

type Page = {
  url: string;
  content: string;
};

type BrowserContextType = {
  pageContent: string;
  query: string;
  backStack: Page[];
  forwardStack: Page[];
  screenState: string;
  URL: string;
  setQuery: (q: string) => void;
  generatePage: (query: string, fromLink: boolean, refresh: boolean) => Promise<void>;
  back: () => void;
  forward: () => void;
};

export const BrowserContext = createContext<BrowserContextType>(null!);
export const BrowserProvider = ({ children }: { children: React.ReactNode }) => {
    const [pageContent, setPageContent] = useState('');
    const [screenState, setScreenState] = useState('home');
    const [lastRequest, setLastRequest] = useState("");
    const [URL, setURL] = useState('');
    const [query, setQuery] = useState('');
    const [backStack, setBackStack] = useState<Page[]>([]);
    const [forwardStack, setForwardStack] = useState<Page[]>([]);

    const generatePage = async (searchQuery: string, fromLink: boolean, refresh: boolean) => {
        const context = backStack[backStack.length - 1]?.content || '';
        const requestBody = JSON.stringify({ query: searchQuery, context: context, fromLink: fromLink});
        const response = await fetch('http://localhost:8000/generate', {
            method: 'POST',
            body: refresh? lastRequest : requestBody,
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        const data = await response.json();
        const newPage: Page = {
            url: data.url,
            content: data.page_code,
        };

        setLastRequest(requestBody);
        setBackStack([...backStack, newPage]);
        setForwardStack([]);
        setPageContent(data.page_code);
        setURL(data.url);
        setQuery('');
        setScreenState('page');
    };

    const back = () => {
        if (backStack.length === 1){
            setScreenState("home");
            setBackStack([]);
            return;
        }
        setScreenState("page");
        const newBack = [...backStack];
        const current = newBack.pop()!;
        setForwardStack([...forwardStack, current]);
        setBackStack(newBack);
        setPageContent(newBack[newBack.length - 1].content);
        setURL(newBack[newBack.length - 1].url)
    };

    const forward = () => {
        if (forwardStack.length === 0) return;
        const newForward = [...forwardStack];
        const next = newForward.pop()!;
        setScreenState("page");
        setBackStack([...backStack, next]);
        setForwardStack(newForward);
        setPageContent(next.content);
        setURL(next.url);
    };

    return (
        <BrowserContext.Provider
            value={{
                pageContent,
                query,
                backStack,
                forwardStack,
                screenState,
                URL,
                setQuery,
                generatePage,
                back,
                forward,
            }}>
            {children}
        </BrowserContext.Provider>
    );
};