import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const socials = [
    {
      icon: FaGithub,
      display: true,
      name: 'github',
      url: 'https://github.com/kafiln',
    },
    {
      icon: FaTwitter,
      display: true,
      name: 'twitter',
      url: 'https://twitter.com/kafiiil',
    },
    {
      icon: FaLinkedin,
      display: true,
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kafiln/',
    },
    { name: 'blog', url: 'https://kafil.now.sh' },
    { name: 'mail', url: 'mailto:kafil.nasdami@gmail.com' },
  ];
  return (
    <footer className="flex px-4 py-4 bg-gray-900 text-white justify-between">
      <h1>Kafil NASDAMI</h1>
      <nav>
        <ul className="flex flex-row space-x-8 cursor-pointer">
          {socials
            .filter(item => item.display)
            .map(item => {
              return (
                <li key={item.name}>
                  <a
                    alt={item.name}
                    aria-label={item.name}
                    className=""
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon size="2em" />
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
