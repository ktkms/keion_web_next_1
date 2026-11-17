import { Metadata } from "next";
import React from "react";
import TopLoading from "../../(root)/components/TopLoading";
import Link from "next/link";

import AudioPlayer from "./components/AudioPlayer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const AudioPlayerPage: React.FC = () => {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="title-font font-medium text-white md:mb-0">
            <h1 className="ml-3 text-xl">非公式コンテンツ</h1>
          </Link>
          <nav className="md:ml-auto md:visible collapse flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-300">
              ホーム
            </Link>
          </nav>
        </div>
      </header>
      <div className="bg-white">
        <TopLoading text="お楽しみコンテンツ" />
        <AudioPlayer />;
      </div>
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="text-sm text-center md:text-left">© サイト作成者</p>
        </div>
      </footer>
    </>
  );
};

export default AudioPlayerPage;
