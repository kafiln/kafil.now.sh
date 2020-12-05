import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      icon: FaGithub,
      display: true,
      name: "github",
      url: "https://github.com/kafiln",
    },
    {
      icon: FaTwitter,
      display: true,
      name: "twitter",
      url: "https://twitter.com/kafiiil",
    },
    {
      icon: FaLinkedin,
      display: true,
      name: "linkedin",
      url: "https://www.linkedin.com/in/kafiln/",
    },
    { name: "blog", url: "https://kafil.now.sh" },
    { name: "mail", url: "mailto:kafil.nasdami@gmail.com" },
  ];
  return (
    <footer className="flex px-4 py-4 bg-blue-900 text-white justify-between">
      <h1>
        Kafil NASDAMI | <span className="text-gray-200 text-sm">2020</span>
      </h1>
      <nav>
        <ul className="flex flex-row space-x-4 cursor-pointer">
          {socials
            .filter((item) => item.display)
            .map((item) => {
              return (
                <a
                  key={item.name}
                  alt={item.name}
                  className="capitalize"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hidden">{item.name}</span>
                  <item.icon />
                </a>
              );
            })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
