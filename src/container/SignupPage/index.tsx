import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/logo.png";
import brazilFlag from "../../assets/images/icons/brazil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 547px;
  height: 798px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 64px;
`;

const Form = styled.form`
  width: 100%;
  height: 637px;
  display: flex;
  flex-direction: column;
  background: #f8f9fe;
  padding: 44px 45px 47px 46px;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;

const LogoImg = styled.img`
  margin-bottom: 26px;
`;

const InputBox = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  border: none;
  background: #ffffff;
`;

const InputIcon = styled.div`
  padding: 14px 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

const ActionButton = styled.button`
  width: 160px;
  height: 42px;
  background: #7dd56f;
  box-shadow: 0px 4px 10px rgba(125, 213, 111, 0.4);
  border: none;
  border-radius: 4px;
  color: var(--color-button-text);
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonsNavigation = styled.button`
  background: #92d987;
  color: var(--color-button-text);
  border: none;
  margin-top: 16px;
`;

const SimpleText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

function SignupPage() {
  return (
    <div>
      <Container>
        <LogoImg src={logoImg} alt="Logo Profitfy" />

        <Form>
          <p>Informe seus dados</p>
{/* faUserCircle, faUnlock, faEnvelope */}
          <InputBox>
            <InputIcon>
              <FontAwesomeIcon icon="user" />
            </InputIcon>
            <Input type="text" name="name" placeholder="Nome" />
          </InputBox>

          <InputBox>
            <InputIcon>
              <FontAwesomeIcon icon="user-circle" />
            </InputIcon>
            <Input type="text" name="surname" placeholder="Sobrenome" />
          </InputBox>

          <InputBox>
            <InputIcon>
              <FontAwesomeIcon icon="envelope" />
            </InputIcon>
            <Input type="text" name="email" placeholder="Email Pessoal" />
          </InputBox>

          <InputBox>
            <InputIcon>
              <img src={brazilFlag} alt="Brazil Flag" />
            </InputIcon>
            <Input type="text" name="cellphone" placeholder="" />
          </InputBox>

          <InputBox>
            <InputIcon>
              <FontAwesomeIcon icon="unlock" />
            </InputIcon>
            <Input type="password" name="password" placeholder="Senha" />
          </InputBox>

          <InputBox>
            <InputIcon>
              <FontAwesomeIcon icon="unlock" />
            </InputIcon>
            <Input
              type="password"
              name="confirm_password"
              placeholder="Confirmar Senha"
            />
          </InputBox>

          <SimpleText>
            Ao se cadastrar você automaticamente concorda com nossos
            <a> Termos de Uso</a>
          </SimpleText>
          <ActionButton>Cadastrar</ActionButton>
        </Form>

        <ButtonsContainer>
          <ButtonsNavigation> Esqueceu sua senha?</ButtonsNavigation>
          <ButtonsNavigation> Entrar </ButtonsNavigation>
        </ButtonsContainer>
      </Container>
    </div>
  );
}

export default SignupPage;
