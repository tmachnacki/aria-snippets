import { Button } from "@/components/ui/ark/button/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl gap-12 p-24">
      <Link href="/buttons">Buttons</Link>
      <Link href={"/accordion"}>Accordion</Link>
    </div>
  );
}
