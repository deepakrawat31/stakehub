"use client";

type Dialogues = {
   id: number;
   text: string;
   series: string;
   character: string;
}[];

const DialogueSec = ({ data }: { data: Dialogues }) => {
   return (
      <>
         <h1>dialogues</h1>
         <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((dialogue) => (
               <div
                  className="flex flex-col justify-between gap-2 p-2 bg-amber-400 text-zinc-900 rounded"
                  key={dialogue.id}
               >
                  <q>{dialogue.text}</q>
                  <span className="flex items-center justify-between gap-2">
                     <span>- {dialogue.character}</span>
                     <span>{dialogue.series}</span>
                  </span>
               </div>
            ))}
         </section>
      </>
   );
};

export default DialogueSec;
