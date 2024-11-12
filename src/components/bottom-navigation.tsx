"use client";
import { PATH } from "@/lib/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: PATH.FOREST, label: "숲꾸" },
  { href: PATH.HOME, label: "홈" },
  { href: PATH.FUNDRAISINGS, label: "기부" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 bg-white" style={{ width: "inherit" }}>
      <ul className="flex text-center">
        {navigation.map(({ href, label }) => (
          <li key={href} className="flex-1 px-8 py-4">
            <Link
              href={href}
              className={pathname === href ? "font-bold" : "font-normal"}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
