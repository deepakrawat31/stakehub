import Link from "next/link";

export default function Header() {
   return (
      <header className="sticky top-0 z-20 p-4 bg-amber-200 text-zinc-900">
         <nav className="flex items-center justify-between gap-2 uppercase font-bold">
            <div className="">
               <Link href={"/"}>stakehub</Link>
            </div>
            <div className="text-sm md:text-base flex items-center gap-2 md:gap-4">
               <Link href={"/quotes"}>quotes</Link>
               <Link href={"/dialogues"}>dialogues</Link>
               <Link href={"/proverbs"}>proverbs</Link>
            </div>
         </nav>
      </header>
   );
}
