import React, { useState } from "react";
import { FooterContainer } from "./style";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { submitNewsletter } from "../../services/api";
import { toast } from "react-hot-toast";
import Loading from "../loading";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                await submitNewsletter({ email })
                  .then((res) => {
                    if (res.err) {
                      throw new Error(res.err);
                    }
                    toast.success("Email enviado com sucesso!");
                  })
                  .catch((err) => {
                    toast.error("Email já enviado");
                  });
                setLoading(false);
              }}
            >
              <input
                placeholder="Digite seu melhor email"
                type="email"
                name="email"
                id="newsletterForm"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? <Loading /> : <span>Inscrever</span>}
              </button>
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
