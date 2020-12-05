import Link from "next/link";
import React from "react";
import Avatar from "../common/Avatar";
import { useRouter } from "next/router";

const Header = () => {
  const activeClasses = "bg-white font-bold rounded text-black";
  const { route } = useRouter();
  const pages = [
    { name: "projects" },
    { name: "about" },
    { name: "blog" },
    { name: "contact" },
  ];
  return (
    <header className="flex px-4 py-4 bg-gray-900 justify-between items-center text-white">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Avatar />
          <h1 className="text-xl">Kafil</h1>
        </div>
      </Link>
      <nav className="flex space-x-4">
        <ul className="flex flex-row space-x-4 cursor-pointer">
          {pages.map((page) => {
            return (
              <li
                key={page.name}
                className={`p-2 capitalize ${
                  page.name === route.slice(1) ? activeClasses : ""
                }`}
              >
                <Link href={`/${page.name}`}>
                  <a>{page.name}</a>
                </Link>
              </li>
            );
          })}
          <li
            className={`p-2 capitalize border rounded ${
              "/" === route ? activeClasses : ""
            }`}
          >
            <Link href={`/`}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
        <svg
          className="w-8 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
