import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import { SearchParams } from "@/types/utils";
import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";
import { FundingCategoryType } from "@/types/funding";

interface Props {
  searchParams: SearchParams;
}

const categories: SelectItemType<FundingCategoryType>[] = [
  { label: "전체", value: "ALL" },
  { label: "환경", value: "ENVIRONMENT" },
  { label: "동물", value: "ANIMAL" },
  { label: "아동・청소년", value: "CHILDREN" },
  { label: "장애", value: "DISABILITY" },
  { label: "노인", value: "ELDERLY" },
  { label: "사회", value: "SOCIAL" },
];
export default async function FundRaisingsListPage({ searchParams }: Props) {
  // const funding = await getFundingList(0, 1, ["title"]);
  // const funding = await getFundingByCategory("ELDERLY", 0, 1, ["title"]);
  // const funding = await getFundingDetail("67403b24b22cea6ecde6c8da");
  // console.log(funding);

  // const organizations = await getOrganizations();
  // console.log(organizations);

  // not yet
  // const myFunding = await getMyFundings(0, 1, ["title"]);
  // console.log(myFunding);

  // const storeItems = await getStoreItems();
  // console.log(storeItems);

  // const storeItems = await getStoreItemsByCategory("BACKGROUND");
  // console.log(storeItems);

  const { category } = await searchParams;
  // TODO: data fetching by category
  return (
    <>
      <Select
        baseUrl={PATH.FUNDING_LIST}
        name="category"
        items={categories}
        selectedItem={(category as string) ?? "ALL"}
        sticky
      />
      <FundingList category={category as string} listData={youth} />
    </>
  );
}
