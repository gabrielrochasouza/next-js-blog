import React from "react";
import { FooterContainer } from "./style";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../logo";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <section className="container">
          <div className="column about-us">
            <h3>Sobre nós</h3>
            <p>
              Este é um blog feito com next js, graph cms (para fazer o
              gerenciamento do conteúdo), graphql para fazer as requisições. E
              tem o intuito de fazer posts relacionados a tecnologia.
            </p>
          </div>
          <div className="column">
            <h3>Inscreva-se na Newsletter</h3>
            <form>
              <input
                placeholder="Digite seu melhor email"
                type="email"
                name="email"
                required
              />
              <button type="submit">Inscrever</button>
            </form>
          </div>
          <div className="column">
            <h3>Redes sociais</h3>
            <div className="social-media">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </section>
        <p className="right-reserved">
          Todos Direitos Reservados{" "}
          <a
            href="https://github.com/gabrielrochasouza"
            target={"_blank"}
            rel="noreferrer"
          >
            Gabriel Rocha
          </a>{" "}
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
