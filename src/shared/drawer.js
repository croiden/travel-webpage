// @flow
import React from "react";
import styled, { keyframes, css } from "styled-components";

import Icon from "./icon";
import { theme } from "../theme/index.js";

const fadeIn = keyframes`
  from {
    bottom: 0; 
    opacity: 0;
  }
  to {
    bottom: 20px; 
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    bottom: 20px; 
    opacity: 1;
  }
  to {
    bottom: 0; 
    opacity: 0;
  }
`;

const inAnimation = css`
  animation: ${fadeIn} 0.25s linear;
`;
const outAnimation = css`
  animation: ${fadeOut} 0.25s linear;
`;

const Container = styled.div`
  background-image: ${(props) => `linear-gradient(
    135deg,
    ${props.theme.colors.primary} 0%,
    ${props.theme.colors.purple} 100%
  )`};
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    top: 10px;
    width: calc(100vw - 20px);
    height: 60px;
    margin: 0px 10px;
    border-radius: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) {
    bottom: 20px;
    width: 427px;
    height: 80px;
    margin: auto;
    border-radius: 40px;
  }
  transition: visibility 0.25s linear;
  visibility: ${(props) => (props.selected ? "visible" : "hidden")};
  ${(props) => (props.selected ? inAnimation : outAnimation)};
`;
const Text = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[2]};
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  flex: 1;
  padding: 10px;
`;
type Props = {
  selected: number,
};

const Drawer = ({ selected }: Props) => {
  return (
    <Container selected={selected}>
      <Icon name={"minus"} color={theme.colors.grey} width={30} height={30} />
      <Text>{`${selected} item selected`}</Text>
      <Icon name={"heart"} color={theme.colors.grey} width={22} height={19} />
      <Icon name={"share"} color={theme.colors.grey} width={16} height={20} />
    </Container>
  );
};
export default Drawer;
