import React from "react";
import { FooterContainer } from "./style";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <section>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </section>
        <p>Todos Direitos Reservados</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
