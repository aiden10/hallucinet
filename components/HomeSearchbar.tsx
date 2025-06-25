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
      onSubmit={handleSubmit}
      className="absolute flex top-1/2 left-1/2 transform -translate-x-4/6 md:-translate-x-1/2 -translate-y-1/2 w-1/2"
    >
      <input
        type="text"
        className="flex-1 bg-neutral-200 rounded-2xl p-3 text-[12px] md:text-[18px] min-w-[30vmax]"
        placeholder="search for something or enter address"
        onInput={(e) => {
          setInput((e.target as HTMLInputElement).value);
        }}
      />
    </form>
  );
}
