import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/ark/accordion";

const accordionItems = [
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    trigger: "Is it styled?",
    content: "Yes. It comes with a set of default Tailwind CSS styles.",
  },
  {
    trigger: "Is it animated?",
    content:
      "Yes. The accordion items come with animations when they open and close.",
  },
  {
    trigger: "Is it customizable?",
    content:
      "Yes. You can customize the styles and behavior of the accordion. Just copy and paste the snippet into your project.",
  },
];

export default function AccordionPage() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col p-24">
      <Link href="/" className="mb-12 text-sm text-muted-foreground">
        Back
      </Link>
      <h1 className="mb-12">Accordion</h1>
      <div className="flex flex-col items-center justify-center rounded-lg border p-4">
        <Accordion className="w-full max-w-sm" multiple>
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              variant={"split"}
            >
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
