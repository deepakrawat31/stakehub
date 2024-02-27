"use client";

type Proverbs = {
   id: number;
   text: string;
   origin: string;
}[];

const ProverbSec = ({ data }: { data: Proverbs }) => {
   return (
      <>
         <h1>proverbs</h1>
         <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((proverb, i) => (
               <div
                  className="flex flex-col justify-between gap-2 p-2 bg-amber-400 text-zinc-900 rounded"
                  key={i}
               >
                  <q>{proverb.text}</q>
                  <span>- {proverb.origin}</span>
               </div>
            ))}
         </section>
      </>
   );
};

export default ProverbSec;
