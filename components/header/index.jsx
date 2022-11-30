import { HeaderContainer } from "./style";
import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Logo from "../logo";
import Link from "next/link";
import Modal from "../modal";

const Header = () => {
  const [searchScreen, setSearchScreen] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  return (
    <HeaderContainer searchScreen={searchScreen}>
      <div className="container container-header">
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav></nav>
        <span
          className="icon"
          onClick={() => {
            setType("Login");
            setOpen(true);
          }}
        >
          <MdLogin />
        </span>
        <span onClick={() => setSearchScreen(!searchScreen)} className="icon">
          <FaSearch />
        </span>
      </div>

      <div className={"fullscreen"}>
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
      {open && <Modal type={type} setOpen={setOpen} setType={setType} />}
    </HeaderContainer>
  );
};

export default Header;
