"use client";
import SearchBar from "@/app/(_components)/searchbar";
import Loading from "@/app/loading";
import { useGetOrganizations } from "@/hooks/api/useGetOrganizations";
import { OrganizationType } from "@/types/api/funding";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import OrganizationItem from "../(components)/organization-item";

const organizations = Array(20)
  .fill([
    {
      name: "초록우산",
      description:
        "여기에는 기업 요약 정보가 들어갑니다\n아마도 지금 길이보다 조금더 길 것으로 추정됩니다.\n어느정도나 될지는 잘 모르겠습니다",
    },
    {
      name: "국경없는의사회",
      description:
        "가나다라마바사아자차카타파하 여기에는 기업 요약 정보가 들어갑니다\n아마도 지금 길이보다 조금더 길 것으로 추정됩니다.\n어느정도나 될지는 잘 모르겠습니다 가나",
    },
    {
      name: "마음마음",
      description:
        "가나다라마바사아자차카타파하 여기에는 기업 요약 정보가 들어갑니다\n아마도 지금 길이보다 조금더 길 것으로 추정됩니다.\n어느정도나 될지는 잘 모르겠습니다 가나",
    },
  ])
  .flat()
  .map((item, idx) => ({ ...item, id: idx }));

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
