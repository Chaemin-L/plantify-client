"use client";
import SearchBar from "@/app/(_components)/searchbar";
import OrganizationItem from "../(components)/organization-item";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const [listData, setListData] = useState(organizations);
  const router = useRouter();

  // TODO: data fetching (SWR)
  const onSubmit = (e) => {
    e.preventDefault();
    router.replace(`/funding/organization`);
    const searchKeyword = e.target.search.value.replace(/\s/g, "");
    setListData(
      organizations.filter((org) => org.name.includes(searchKeyword))
    );
  };

  return (
    <div className="px-4 flex flex-col gap-5">
      <SearchBar onSubmit={onSubmit} />
      <ul className="flex flex-col gap-3">
        {listData.map((org) => (
          <li key={org.id} id={`org_${org.id}`}>
            <OrganizationItem {...org} />
          </li>
        ))}
      </ul>
    </div>
  );
}
