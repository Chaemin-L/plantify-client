"use client";

import { PATH } from "@/lib/_shared/paths";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { href: PATH.FOREST, label: "숲꾸", icon: "/icons/forest.svg" },
  { href: PATH.HOME, label: "홈", icon: "/icons/home.svg" },
  { href: PATH.FUNDING, label: "기부", icon: "/icons/fundraisings.svg" },
];

export default function Header() {
  const { back } = useRouter();
  const pathname = usePathname();
  const isTabMain =
    pathname === PATH.FOREST ||
    pathname === PATH.HOME ||
    pathname === PATH.FUNDING;
  const isIntro = pathname === PATH.SPLASH || pathname === PATH.INTRO;

  return (
    <header className=" bg-darkBg sticky top-0 z-0">
      {/** logo and home */}
      <div
        className={clsx(
          !isTabMain ? "hidden" : "flex items-center justify-between p-4"
        )}
      >
        <img
          src="/icons/logo.png"
          className="inline w-8 h-fit -mx-0.5"
          alt="플랜티파이 로고"
        />

        {/** navigation */}
        <nav className={clsx(!isTabMain ? "hidden" : "flex justify-end")}>
          <ul className="flex text-center ">
            {navigation.map(({ href, label, icon }) => (
              <li
                key={href}
                className={clsx(
                  pathname === href
                    ? "font-bold border-white text-white "
                    : "font-normal border-shadow-400 text-shadow-400 ",
                  "flex-1 px-2 py-2 whitespace-nowrap   rounded-full text-t4 transition-colors duration-300"
                )}
              >
                <Link
                  href={href}
                  className="flex justify-center items-center  gap-1 "
                >
                  <Image
                    src={icon}
                    width={16}
                    height={16}
                    className={clsx(
                      " select-none w-4 h-4",
                      pathname !== href && "opacity-50"
                    )}
                    alt={`${label} 탭으로 이동`}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/** back and home */}
      <div
        className={clsx(
          isTabMain || isIntro ? "hidden" : "flex justify-between p-4"
        )}
      >
        <button onClick={back}>
          <Image
            width={8}
            height={8}
            src="/icons/back.svg"
            alt="뒤로가기"
            className="w-4 h-4"
          />
        </button>
        <Link href={PATH.HOME}>
          <Image
            width={16}
            height={16}
            src="/icons/home.svg"
            alt="홈으로 가기"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </header>
  );
}
