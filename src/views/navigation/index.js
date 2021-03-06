// @flow
import React, { useState } from "react";
import styled from "styled-components";

// $FlowFixMe
import { ReactComponent as Logo } from "../../assets/logo/svg/logo.svg";
import Icon from "../../shared/icon";
import Button from "../../shared/button.js";

import useWindowSize from "../../hooks/useWindowSize";
import {
  MOBILE,
  HOME,
  BRIEFCASE,
  COMPASS,
  BELL,
  GEAR,
  LOGOUT,
} from "../../constants";
import { type NavButtons } from "../../types";

import { theme } from "../../theme/index.js";

const Container = styled.div`
  background-image: ${(props) =>
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.purple} 100%)`};
  border-radius: 20px;
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: calc(100vw - 20px);
    height: 60px;
    margin: 0px 10px 10px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) {
    flex-direction: column;
    width: 100px;
    height: calc(100vh - 40px);
    padding: 30px 14px 0px;
  }
`;

const MainSection = styled.div`
  flex: 1;
  padding: 20px 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  background-color: ${props.theme.colors.secondary};
    border-radius: 25px;
  `}
  &:hover, &:focus {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 25px;
  }
  outline: none;
`;

const NotifyWrapper = styled.div`
  position: relative;
`;
const Notify = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 100%;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 10px;
  top: 6px;
  &:hover,
  &:focus {
    display: none;
  }
`;

const ICON_DIMENSION = {
  [HOME]: {
    w: 18,
    h: 20,
  },
  [BRIEFCASE]: {
    w: 20,
    h: 18,
  },
  [COMPASS]: {
    w: 20,
    h: 20,
  },
  [BELL]: {
    w: 18,
    h: 20,
  },
  [GEAR]: {
    w: 22,
    h: 22,
  },
  [LOGOUT]: {
    w: 18,
    h: 18,
  },
};

const MOBILE_SEQ = [BELL, BRIEFCASE, HOME, COMPASS, GEAR];
const DESKTOP_SEQ = [HOME, BRIEFCASE, COMPASS, BELL, GEAR];

const Nav = () => {
  const [selected, setSelected] = useState(HOME);
  const windowSize = useWindowSize();

  const getNavButtons = (seq: NavButtons) =>
    seq.map((item) => (
      <StyledButton
        aria-label={item}
        key={item}
        selected={selected === item}
        onClick={() => {
          setSelected(item);
        }}
      >
        {item === BELL ? (
          <NotifyWrapper>
            <Notify />
          </NotifyWrapper>
        ) : null}
        <Icon
          name={item}
          width={ICON_DIMENSION[item].w}
          height={ICON_DIMENSION[item].h}
          color={theme.colors.white}
        />
      </StyledButton>
    ));

  return (
    <Container>
      {windowSize.width > MOBILE ? (
        <>
          <Logo />
          <MainSection>
            <div>{getNavButtons(DESKTOP_SEQ)}</div>
            <div>
              <StyledButton
                selected={selected === LOGOUT}
                onClick={() => {
                  setSelected(LOGOUT);
                }}
              >
                <Icon
                  name={LOGOUT}
                  width={18}
                  height={18}
                  color={theme.colors.white}
                />
              </StyledButton>
            </div>
          </MainSection>
        </>
      ) : (
        getNavButtons(MOBILE_SEQ)
      )}
    </Container>
  );
};
export default Nav;
