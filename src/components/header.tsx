"use client";

import { usePathname } from "next/navigation";
import { PATH } from "@/lib/paths";
import Link from "next/link";
import clsx from "clsx";

const navigation = [
  { href: PATH.FOREST, label: "숲꾸", icon: "/icons/forest.svg" },
  { href: PATH.HOME, label: "홈", icon: "/icons/home.svg" },
  { href: PATH.FUNDRAISINGS, label: "기부", icon: "/icons/fundraisings.svg" },
];

export default function Header() {
  const pathname = usePathname();
  const isTabMain =
    pathname === PATH.FOREST ||
    pathname === PATH.HOME ||
    pathname === PATH.FUNDRAISINGS;

  return (
    <header className=" bg-darkBg sticky top-0 z-10">
      {/** logo and home */}
      <div className={clsx(!isTabMain ? "hidden" : "flex justify-between p-4")}>
        <div>LOGO</div>
        <img src="/icons/bell.svg" className="w-5 h-5" />
      </div>
      <div className={clsx(isTabMain ? "hidden" : "flex justify-between p-4")}>
        <img src="/icons/back.svg" className="w-5 h-5" />
        <img src="/icons/home.svg" className="w-5 h-5" />
      </div>

      {/** Navigation */}
      <nav
        className={clsx(!isTabMain ? "hidden" : "flex justify-end px-3 pb-5")}
      >
        <ul className="flex text-center gap-3">
          {navigation.map(({ href, label, icon }) => (
            <li
              key={href}
              className={clsx(
                pathname === href
                  ? "font-bold border-white text-white "
                  : "font-normal border-shadow-400 text-shadow-400 ",
                "flex-1 px-3 py-2 whitespace-nowrap border  rounded-full text-t4"
              )}
            >
              <Link
                href={href}
                className="flex justify-center items-center  gap-2 "
              >
                <img
                  src={icon}
                  className={clsx(
                    "w-5 h-5",
                    pathname === href ? "" : "opacity-50"
                  )}
                />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
