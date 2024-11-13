"use client";

import { PATH } from "@/lib/paths";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: PATH.FOREST, label: "숲꾸" },
  { href: PATH.HOME, label: "홈" },
  { href: PATH.FUNDRAISINGS, label: "기부" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="h-9 flex justify-end px-3">
      <ul className="flex text-center gap-3">
        {navigation.map(({ href, label }) => (
          <li
            key={href}
            className={clsx(
              pathname === href
                ? "font-bold border-white text-white "
                : "font-normal border-shadow-400 text-shadow-400 ",
              "flex-1 px-3 py-2 whitespace-nowrap border  flex justify-center items-center rounded-full text-t4"
            )}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
