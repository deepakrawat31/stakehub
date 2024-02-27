"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

type Quotes = {
   authors: string[];
   quotes: {
      id: number;
      text: string;
      author: string;
   }[];
};

export default function QuotesSec({ data }: { data: Quotes }) {
   const [isDown, setIsDown] = useState(false);
   const [author, setAuthor] = useState("all");
   const [selectedQuotes, setSelectedQuotes] = useState<
      { id: number; text: string; author: string }[]
   >([]);

   const filteredQuotes = (selectedAuthor: string) => {
      let quotes: { id: number; text: string; author: string }[] =
         data.quotes.filter((quote) => quote.author === selectedAuthor);
      setSelectedQuotes(quotes);
   };

   return (
      <>
         <section className="flex items-center justify-between gap-4">
            <h1>quotes</h1>
            <div className="relative flex items-center gap-2">
               <span>{author}</span>
               <button
                  onClick={() => setIsDown(!isDown)}
                  className={`bg-amber-400 text-zinc-900 transition-transform ease-in-out ${
                     isDown ? "rotate-180" : ""
                  }`}
               >
                  <IconChevronDown />
               </button>
               {isDown && (
                  <span className="absolute top-12 right-0 flex flex-col gap-0.5 text-zinc-900">
                     <button
                        className="ring-2 ring-zinc-900 p-1 bg-amber-400 hover:bg-amber-200 uppercase"
                        onClick={() => {
                           setAuthor("all");
                           setIsDown(false);
                        }}
                     >
                        all
                     </button>
                     {data.authors.map((author, i) => (
                        <button
                           key={i}
                           className="ring-2 ring-zinc-900 p-1 bg-amber-400 hover:bg-amber-200 uppercase"
                           onClick={() => {
                              filteredQuotes(author);
                              setAuthor(author);
                              setIsDown(false);
                           }}
                        >
                           {author}
                        </button>
                     ))}
                  </span>
               )}
            </div>
         </section>
         {author === "all" ? (
            <section className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
               {data.quotes.map((quote) => (
                  <div
                     className="flex flex-col justify-between gap-2 p-2 bg-amber-400 rounded-md text-zinc-900"
                     key={quote.id}
                  >
                     <q>{quote.text}</q>
                     <p className="text-sm">- {quote.author}</p>
                  </div>
               ))}
            </section>
         ) : (
            <section className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
               {selectedQuotes.map((quote) => (
                  <div
                     className="p-2 bg-amber-400 rounded-md text-zinc-900"
                     key={quote.id}
                  >
                     <q>{quote.text}</q>
                  </div>
               ))}
            </section>
         )}
      </>
   );
}
