import React, { useState } from "react";
import { ModalContainer } from "./style";
import { MdClose } from "react-icons/md";
import Loading from "../loading";

const Modal = ({ type, setType, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  return (
    <ModalContainer
      id="modal-box"
      onClick={(e) => {
        e.target.id === "modal-box" && setOpen(false);
      }}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h2>{type}</h2>
          <span onClick={() => setOpen(false)}>
            <MdClose />
          </span>
        </div>
        <div className="modal-content">
          {type === "Login" && (
            <form>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="text"
                placeholder="Senha"
              />
              <button>{loginLoading ? <Loading /> : <>Entrar</>}</button>
              <span className="change-modal">
                Ainda Não Possui Login?
                <span
                  className="change-modal-link"
                  onClick={() => setType("Cadastro")}
                >
                  {" "}
                  Cadastre-se
                </span>
              </span>
            </form>
          )}
          {type === "Cadastro" && (
            <form>
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Nome"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email"
              />
              <input
                id="password"
                name="password"
                type="password"
                pattern="^\S{6,}$"
                title="Mínimo de 6 caracteres"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                id="password_two"
                name="password_two"
                type="password"
                pattern={password}
                title="Senhas deve ser iguais"
                placeholder="Confirmar Password"
                required
              />
              <button>
                {registerLoading ? <Loading /> : <>Criar Conta</>}
              </button>
              <span className="change-modal">
                Já Possui Login?
                <span
                  className="change-modal-link"
                  onClick={() => setType("Login")}
                >
                  {" "}
                  Entre
                </span>
              </span>
            </form>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
