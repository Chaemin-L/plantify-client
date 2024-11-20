"use client";
import Accordion from "@/app/(_components)/accordion";

interface Props {
  name: string;
  description: string;
}

export default function CompanyItem({ name, description }: Props) {
  return (
    <Accordion iconMode={false}>
      <Accordion.Summary>
        <button className="text-t4 md:text-t3 py-2 select-none">{name}</button>
      </Accordion.Summary>
      <Accordion.Details>
        <p className="whitespace-pre-line text-bd3 md:text-bd2 bg-shadow-700 p-2 rounded-b-xl">
          {description}
        </p>
      </Accordion.Details>
    </Accordion>
  );
}
