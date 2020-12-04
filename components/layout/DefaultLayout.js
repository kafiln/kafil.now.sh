import React from "react";
import Head from "next/head";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: Refactor into a SEO Component */}
      <Head>
        <title>Kafil Nasdami</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="flex px-4 bg-blue-800">
        <h1>Kafil</h1>
      </header>
      <main className="flex flex-1 px-4">{children}</main>
      <footer className="flex px-4 bg-blue-800">
        <h1>Kafil NASDAMI | 2020</h1>
      </footer>
    </div>
  );
};

export default DefaultLayout;
