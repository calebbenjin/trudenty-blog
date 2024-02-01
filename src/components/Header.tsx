import Image from "next/image";
import React from "react";
import logoImg from "/public/logo.png";

const Header = () => {
  return (
    <header className="lg:px-20 px-10 border-b h-[10vh] flex items-center bg-gray-50">
      <div className="logo flex items-center gap-2">
        <Image
          src={logoImg}
          alt="logo"
          width={20}
          height={20}
          layout="fixed"
        />
        <h2 className="font-bold">Trudenty | Docs</h2>
      </div>
    </header>
  );
};

export default Header;
