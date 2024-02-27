import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
   return (
      <main className="min-h-[calc(100dvh-56px)] uppercase font-semibold p-4 md:p-8 flex flex-col gap-6">
         <h1 className="text-3xl md:text-6xl xl:text-8xl text-amber-400 self-center">
            frontend assignment
         </h1>
         <p className="self-center flex items-center gap-2">
            <span>by</span>
            <Link
               href={"https://github.com/deepakrawat31"}
               className="underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out text-amber-400"
            >
               deepak rawat
            </Link>
            <Link
               href={"https://github.com/deepakrawat31/stakehub"}
               target="_blank"
               className="p-2 bg-amber-400 rounded-full text-zinc-900 hover:scale-105 transition-transform ease-in-out"
            >
               <IconBrandGithub />
            </Link>
         </p>
         <h2 className="md:text-4xl">head to</h2>
         <div className="flex-1 grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-4 text-zinc-900 font-semibold text-2xl lg:text-4xl">
            <span className="bg-amber-400 rounded-md flex hover:bg-amber-200 transition-colors ease-in-out">
               <Link
                  href={"/quotes"}
                  className="flex-1 flex items-center justify-center gap-2 group"
               >
                  <span>quotes</span>
                  <span className="p-2 bg-amber-200 rounded-full group-hover:bg-amber-400 transition-colors ease-in-out ring-2 ring-zinc-900">
                     <IconArrowRight />
                  </span>
               </Link>
            </span>
            <span className="bg-amber-400 rounded-md flex hover:bg-amber-200 transition-colors ease-in-out">
               <Link
                  href={"/dialogues"}
                  className="flex-1 flex items-center justify-center gap-2 group"
               >
                  <span>dialogues</span>
                  <span className="p-2 bg-amber-200 rounded-full group-hover:bg-amber-400 transition-colors ease-in-out ring-2 ring-zinc-900">
                     <IconArrowRight />
                  </span>
               </Link>
            </span>
            <span className="bg-amber-400 rounded-md lg:col-span-2 flex hover:bg-amber-200 transition-colors ease-in-out">
               <Link
                  href={"/proverbs"}
                  className="flex-1 flex items-center justify-center gap-2 group"
               >
                  <span>proverbs</span>
                  <span className="p-2 bg-amber-200 rounded-full group-hover:bg-amber-400 transition-colors ease-in-out ring-2 ring-zinc-900">
                     <IconArrowRight />
                  </span>
               </Link>
            </span>
         </div>
      </main>
   );
}
