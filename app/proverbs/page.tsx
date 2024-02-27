import ProverbSec from "../components/ProverbSec";

const getProverbs = async () => {
   const res = await fetch("https://wordsapi-nkj3.onrender.com/proverbs");
   if (!res.ok) {
      throw new Error("Failed to fetch!");
   }
   return res.json();
};
export default async function Page() {
   const data: {
      id: number;
      text: string;
      origin: string;
   }[] = await getProverbs();

   return (
      <main className="min-h-[calc(100dvh-56px)] uppercase font-semibold p-4 md:p-8 flex flex-col gap-4">
         <ProverbSec data={data} />
      </main>
   );
}
