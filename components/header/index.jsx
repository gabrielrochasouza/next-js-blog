import { HeaderContainer } from "./style";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import Logo from "../logo";
import Link from "next/link";

const Header = () => {
  const [searchScreen, setSearchScreen] = useState(false);
  return (
    <HeaderContainer>
      <div className="container container-header">
        <Link className="logo-link" href={"/"}>
          <Logo />
        </Link>

        <nav></nav>
        <span onClick={() => setSearchScreen(!searchScreen)} className="search">
          <FaSearch />
        </span>
      </div>
      {searchScreen && (
        <div className="fullscreen">
          <form>
            <div className="input-box">
              <FaSearch />
              <input required placeholder="Faça sua pesquisa" type="text" />
            </div>
            <div
              onClick={() => setSearchScreen(!searchScreen)}
              className="close-btn"
            >
              <TfiClose />
            </div>
          </form>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
