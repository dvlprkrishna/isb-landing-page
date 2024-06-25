import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionBox() {
  return (
    <Accordion type="single" collapsible className="w-full mb-8">
      <AccordionItem
        isTabCard={true}
        value="item-1"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)]  px-8 py-4 mb-6"
      >
        <AccordionTrigger isTabCard={true}>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-2"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-3"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-4"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-5"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-6"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        isTabCard={true}
        value="item-7"
        className="[box-shadow:0_0_16px_rgba(60,_72,_82,_.1)] mb-6 px-8 py-4"
      >
        <AccordionTrigger isTabCard={true}>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
