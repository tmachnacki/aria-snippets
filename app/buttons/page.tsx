import { Button } from "@/components/ui/ark/button";
import Link from "next/link";

export default function ButtonsPage() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col p-24">
      <Link href="/" className="mb-12 text-sm text-muted-foreground">
        Back
      </Link>
      <h1 className="mb-12">Buttons</h1>

      <ul className="grid grid-cols-3 gap-4">
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button>Default</Button>
        </li>

        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"}>Primary</Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"faded"}>
            Primary Faded
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"outline"}>
            Primary Outline
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"shadow"}>
            Primary Shadow
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"tron"}>
            Primary Tron
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"ghost"}>
            Primary Ghost
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"primary"} variant={"link"}>
            Primary Link
          </Button>
        </li>

        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"}>Highlight</Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"faded"}>
            Highlight Faded
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"outline"}>
            Highlight Outline
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"shadow"}>
            Highlight Shadow
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"tron"}>
            Highlight Tron
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"ghost"}>
            Highlight Ghost
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"highlight"} variant={"link"}>
            Highlight Link
          </Button>
        </li>

        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"}>Success</Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"faded"}>
            Success Faded
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"outline"}>
            Success Outline
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"shadow"}>
            Success Shadow
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"tron"}>
            Success Tron
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"ghost"}>
            Success Ghost
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"success"} variant={"link"}>
            Success Link
          </Button>
        </li>

        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"}>Destructive</Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"faded"}>
            Destructive Faded
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"outline"}>
            Destructive Outline
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"shadow"}>
            Destructive Shadow
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"tron"}>
            Destructive Tron
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"ghost"}>
            Destructive Ghost
          </Button>
        </li>
        <li className="flex h-72 w-full flex-col items-center justify-center rounded-md border p-4">
          <Button colorPalette={"destructive"} variant={"link"}>
            Destructive Link
          </Button>
        </li>
      </ul>
    </main>
  );
}
