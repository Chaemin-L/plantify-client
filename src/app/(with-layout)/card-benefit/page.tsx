"use client";
import { SelectItemType } from "@/app/(_components)/select";
import { AuthContext } from "@/providers/auth-provider";
import clsx from "clsx";
import { useContext, useState } from "react";
import AllBenefit from "./all-benefit";
import MyBenefit from "./my-benefit";

type TabType = "all" | "my";

const tabMenus: SelectItemType<TabType>[] = [
  { label: "My", value: "my" },
  { label: "전체", value: "all" },
];
export default function CardBenefitPage() {
  const [tab, setTab] = useState<TabType>("my");
  const { accessToken } = useContext(AuthContext);

  const handleClick = (menu: TabType) => setTab(menu);

  return (
    <div>
      <ul className="w-full flex">
        {tabMenus.map((menu) => (
          <li
            key={menu.value}
            className={clsx(
              "flex-1 px-2 py-2 text-center hover:cursor-pointer",
              tab === menu.value
                ? "border-b-2 border-accent-purple opacity-100 transition-opacity"
                : "opacity-40"
            )}
            onClick={() => handleClick(menu.value)}
          >
            {menu.label}
          </li>
        ))}
      </ul>

      <div className="pt-5">
        {tab === "all" ? <AllBenefit /> : <MyBenefit token={accessToken!} />}
      </div>
    </div>
  );
}
