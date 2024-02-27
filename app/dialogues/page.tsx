import DialogueSec from "../components/DialogueSec";

const getDialogues = async () => {
   const res = await fetch("https://wordsapi-nkj3.onrender.com/dialogues");
   if (!res.ok) {
      throw new Error("Failed to fetch!");
   }
   return res.json();
};

export default async function Page() {
   const data: {
      id: number;
      text: string;
      series: string;
      character: string;
   }[] = await getDialogues();
   return (
      <main className="min-h-[calc(100dvh-56px)] uppercase font-semibold p-4 md:p-8 flex flex-col gap-4">
         <DialogueSec data={data} />
      </main>
   );
}
