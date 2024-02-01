"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface SubItem {
  id: number;
  title: string;
  link: string;
}

interface LinkItem {
  id: number;
  title: string;
  link: string;
  subItems?: SubItem[];
}

const links: LinkItem[] = [
  {
    id: 1,
    title: "Overview",
    link: "/docs/overview",
  },
  {
    id: 2,
    title: "Demos",
    link: "/",
  },
  {
    id: 3,
    title: "Usecase",
    link: "/",
  },
  {
    id: 4,
    title: "Products",
    link: "/",
  },
];

const Sidenav = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  console.log(pathname);

  const handleDropdownClick = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pl-10 pr-6 lg:block hidden relative w-2/12 bg-gray-100">
      <ul className="sticky top-8 space-y-2 mt-10">
        <div className="space-y-4 w-full">
          {links.map((data) => (
            <li
              key={data.id}
              className={`w-full hover:bg-gray-200 px-3 py-2 rounded-lg ${
                pathname === data?.link
                  ? "bg-gray-200 px-3 py-2 rounded-lg"
                  : ""
              }`}>
              {data?.subItems ? (
                <div className="w-full font-medium">
                  <button
                    onClick={() => handleDropdownClick(data.id)}
                    className="w-full flex items-center justify-between text-sm cursor-pointer hover:bg-gray-200 px-3 py-3 rounded-lg">
                    <span>{data.title}</span>
                    <span className="ml-2">
                      {activeDropdown === data.id ? (
                        <IoChevronUp />
                      ) : (
                        <IoChevronDown />
                      )}
                    </span>
                  </button>

                  <ul
                    className={`${
                      activeDropdown === data?.id ? "block" : "hidden"
                    } pl-5 space-y-4 pt-4 w-full`}>
                    {data.subItems.map((subItem) => (
                      <li key={subItem?.id} className="w-full">
                        <Link
                          href={subItem?.link}
                          className={`text-sm cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-lg ${
                            pathname === subItem.link
                              ? "bg-gray-600 px-3 py-2 rounded-lg"
                              : ""
                          }`}>
                          {subItem?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={data.link}
                  className={`font-medium text-gray-600 w-full cursor-pointer ${
                    pathname === data.link
                      ? "text-black bg-gray-200 px-3 py-2 rounded-lg"
                      : ""
                  }`}>
                  {data.title}
                </Link>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Sidenav;
