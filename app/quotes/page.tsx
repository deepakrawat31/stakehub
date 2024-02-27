import QuotesSec from "../components/QuotesSec";

const getQuotes = async () => {
   const res = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
   if (!res.ok) {
      throw new Error("Failed to fetch!");
   }
   return res.json();
};

export default async function Page() {
   const data: {
      authors: string[];
      quotes: {
         id: number;
         text: string;
         author: string;
      }[];
   } = await getQuotes();

   return (
      <main className="min-h-[calc(100dvh-56px)] uppercase font-semibold p-4 md:p-8 flex flex-col gap-4">
         <QuotesSec data={data} />
      </main>
   );
}
