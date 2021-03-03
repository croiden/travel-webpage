// @flow
import React, {useState} from 'react'
import styled from 'styled-components'

// $FlowFixMe
import { ReactComponent as Logo } from "../../assets/logo/svg/logo.svg";
import Icon from "../../shared/icon";
import Button from "../../shared/button.js";

const Container = styled.div`
  background-image: ${(props) =>
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, #652bcf 100%)`};
  border-radius: 20px;
  width: 100px;
  height: calc(100vh - 40px);
  padding: 30px 14px 0px;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  flex:1;
  padding: 20px 11px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;

const StyledButton = styled(Button)`
  padding: 1px;
  height: 50px;
  width: 50px;
  margin: 6px 0px;
  line-height: 1em;
  ${(props) =>
    props.selected &&
    `
  background-color: #FF0066;
    border-radius: 25px;
  `}
  &:hover, &:focus {
    background-color: #ff0066;
    border-radius: 25px;
  }
  outline:none;
`;

const NotifyWrapper= styled.div`
  position:relative;
`
const Notify = styled.div`
  background-color: #ff0066;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 10px;
  top: 6px;
  &:hover, &:focus{
    display:none;
  }
`;

const HOME:'home' = 'home'
const BRIEFCASE: "briefcase" = "briefcase";
const COMPASS: "compass" = "compass";
const BELL: "bell" = "bell";
const GEAR: "gear" = "gear";
const LOGOUT: "logout" = "logout";


const Nav = () => {

  const [selected, setSelected] = useState(HOME)

  return (
    <Container>
      <Logo />
      <MainSection>
        <div>
          <StyledButton
            selected={selected === HOME}
            onClick={() => {
              setSelected(HOME);
            }}
          >
            <Icon name={"home"} width={18} height={20} color={"#FFFFFF"} />
          </StyledButton>
          <StyledButton
            selected={selected === BRIEFCASE}
            onClick={() => {
              setSelected(BRIEFCASE);
            }}
          >
            <Icon name={"briefcase"} width={20} height={18} color={"#FFFFFF"} />
          </StyledButton>
          <StyledButton
            selected={selected === COMPASS}
            onClick={() => {
              setSelected(COMPASS);
            }}
          >
            <Icon name={"compass"} width={20} height={20} color={"#FFFFFF"} />
          </StyledButton>
          <StyledButton
            selected={selected === BELL}
            onClick={() => {
              setSelected(BELL);
            }}
          >
          <NotifyWrapper>
            <Notify /></NotifyWrapper>
            <Icon name={"bell"} width={18} height={20} color={"#FFFFFF"} />
          </StyledButton>
          <StyledButton
            selected={selected === GEAR}
            onClick={() => {
              setSelected(GEAR);
            }}
          >
            <Icon name={"gear"} width={22} height={22} color={"#FFFFFF"} />
          </StyledButton>
        </div>
        <div>
          <StyledButton
            selected={selected === LOGOUT}
            onClick={() => {
              setSelected(LOGOUT);
            }}
          >
            <Icon name={"log-out"} width={18} height={18} color={"#FFFFFF"} />
          </StyledButton>
        </div>
      </MainSection>
    </Container>
  );
}
export default Nav