"use client";
import { SelectItemType } from "@/app/(_components)/select";
import clsx from "clsx";
import { useEffect, useState } from "react";
import AllBenefit from "./all-benefit";
import MyBenefit from "./my-benefit";

type TabType = "all" | "my";

const tabMenus: SelectItemType<TabType>[] = [
  { label: "My", value: "my" },
  { label: "전체", value: "all" },
];
export default function CardBenefitPage() {
  const [tab, setTab] = useState<TabType>("my");
  const handleClick = (menu: TabType) => setTab(menu);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

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
