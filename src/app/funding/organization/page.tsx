import Accordion from "@/app/(_components)/accordion";
import SearchBar from "@/app/(_components)/searchbar";
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

export default async function OrganizationPage() {
  return (
    <div className="px-4 flex flex-col gap-2 md:gap-5">
      <SearchBar />
      <ul className="flex flex-col gap-4">
        {organizations.map((org) => (
          <li key={org.id} id={`org_${org.id}`}>
            <OrganizationItem {...org} />
          </li>
        ))}
      </ul>
    </div>
  );
}
