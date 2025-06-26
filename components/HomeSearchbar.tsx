import { useContext, useState } from "react";
import { BrowserContext } from "@/context/BrowserContext";

export default function HomeSearchbar() {
  const { generatePage, setQuery } = useContext(BrowserContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    generatePage(input, false, false);
  };

  return (
    <form
      onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 bg-neutral-200 rounded-2xl p-3 text-[12px] md:text-[18px] min-w-[35vmax] md:min-w-[50vmax] accent-slate-600
        __className_8f5913 text-shadow-2xs text-shadow-black/60"
        placeholder="search for something or enter address"
        onInput={(e) => {
          setInput((e.target as HTMLInputElement).value);
        }}
      />
    </form>
  );
}
