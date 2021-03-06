// @flow
import React from "react";
import styled from "styled-components";

import Switcher from "./switcher";

import useWindowSize from "../../hooks/useWindowSize";
import { MOBILE } from "../../constants";

const Container = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts[3]};
  font-size: 36px;
  line-height: 43px;
  text-align: left;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MContainer = styled.div`
  position: relative;
  background-image: url("https://marvel-live.freetls.fastly.net/canvas/2020/9/8844bfe11afa4801a5a6422d98339659?quality=95&fake=.png");
  background-size: 100%;
  width: 100vw;
  height: 450px;
  margin-bottom: 30px;
`;
const MTitle = styled.h1`
  text-shadow: 0px 4px 8px #32261a;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: 42px;
  line-height: 50px;
  margin: 0px;
`;
const MTitleWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;
const StyledSwitcher = styled(Switcher)`
  position: absolute;
  bottom: -20px;
  margin: auto;
  left: 0;
  right: 0;
`;

const PAGE_TITLE = "Discover great places to visit";
const Header = () => {
  const windowSize = useWindowSize();

  return windowSize.width > MOBILE ? (
    <Container>
      <Title>{PAGE_TITLE}</Title>
      <Switcher onChange={() => {}} />
    </Container>
  ) : (
    <MContainer>
      <MTitleWrapper>
        <MTitle>{PAGE_TITLE}</MTitle>
      </MTitleWrapper>
      <StyledSwitcher onChange={() => {}} />
    </MContainer>
  );
};
export default Header;
