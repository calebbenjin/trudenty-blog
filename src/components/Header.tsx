import Image from "next/image";
import React from "react";
import logoImg from "/public/logo.png";

const Header = () => {
  return (
    <header className="px-20 py-6 bg-gray-50">
      <div className="logo flex items-center gap-2">
        <Image
          src={logoImg}
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <h2 className="font-bold">Trudenty | Docs</h2>
      </div>
    </header>
  );
};

export default Header;
