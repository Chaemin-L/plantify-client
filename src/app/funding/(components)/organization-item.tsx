"use client";
import Accordion from "@/app/(_components)/accordion";
import { useState, useEffect } from "react";

interface Props {
  id: number;
  name: string;
  description: string;
}

export default function OrganizationItem({ id, name, description }: Props) {
  const [orgId, setOrgId] = useState<string | undefined>();

  useEffect(() => {
    setOrgId(window.location.hash);
  }, []);

  return (
    <Accordion iconMode={false} defaultValue={`#org_${id}` == orgId}>
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
