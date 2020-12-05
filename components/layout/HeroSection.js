import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between space-x-16 p-16">
      <Image
        alt="A person using a laptop"
        src="/hero.svg"
        height={512}
        width={512}
      />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-600">Hello, my name is</p>
          <h1 className="text-xl">Kafil Nasdami</h1>
          <h2 className="text-gray-600">Full Stack C# Javascript developer</h2>
          <div className="text-xs">
            <p>
              I love programming, which makes what I do not only a job but also
              a passion.
            </p>
            <p>
              As part of my previous experiences, I've build a lot of websites
              and web applications mainly from scratch. I code with C# but also
              Java
            </p>
            <p>
              I'm very comfortable around .NET technologies such as ASP.NET MVC,
              SQL Server, Entity framework...
            </p>
            <p>
              I also use bootstrap, javascript jquery and other Javascript
              technologies such as AngularJS and React ...
            </p>
            <p>
              If you ever need a reliable resource that would get the job done
              in a convenient period of time, then I guess I am your man.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 cursor-pointer">
          <div className="p-2 bg-red-600 text-white rounded">Contact</div>
          <div className="p-2 rounded border border-black ">View Resume</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
