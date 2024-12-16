"use client";
import SearchBar from "@/app/(_components)/searchbar";
import Loading from "@/app/loading";
import { useGetOrganizations } from "@/hooks/api/useGetOrganizations";
import { OrganizationType } from "@/types/api/funding";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import OrganizationItem from "../(components)/organization-item";
export default function OrganizationPage() {
  const { data: organizations, isLoading } = useGetOrganizations();
  const [listData, setListData] = useState<OrganizationType[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!organizations) return;
    setListData(organizations);
  }, [organizations]);

  if (isLoading || !listData) return <Loading />;

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.replace(`/funding/organization`);
    const searchKeyword = (e.target as HTMLFormElement).search.value.replace(
      /\s/g,
      ""
    );
    setListData(
      organizations!.filter((org) => org.name.includes(searchKeyword))
    );
  };

  return (
    <div className="px-4 flex flex-col gap-5">
      <SearchBar onSubmit={onSubmit} />
      <ul className="flex flex-col gap-3">
        {listData.map((org) => (
          <li key={org.organizationId} id={`org_${org.organizationId}`}>
            <OrganizationItem {...org} />
          </li>
        ))}
      </ul>
    </div>
  );
}
