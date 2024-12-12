import ItemSlider from "@/app/(_components)/item-slider";
import { FundingType } from "@/types/api/funding";

interface Props {
  title: string;
  listData: FundingType[];
}

export default function FundingSlider({ title, listData }: Props) {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden mt-4">
      <h2 className="text-t2 text-white">{title}</h2>
      <ItemSlider items={listData} />
    </div>
  );
}
