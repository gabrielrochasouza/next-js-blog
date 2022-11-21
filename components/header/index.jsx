import { HeaderContainer } from "./style";
import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Logo from "../logo";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container container-header">
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav></nav>
        <span className="search">
          <FaSearch />
        </span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
