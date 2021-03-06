// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../shared/button.js";
import Icon from "../../shared/icon";
import Focusable from "../../shared/a11y/focusable.js";

import { theme } from "../../theme/index.js";

const Container = styled(Focusable)`
  display: flex;
  align-items: center;
  ${(props) =>
    props.selected
      ? `background-image: linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.purple} 100%);`
      : `background-color: ${props.theme.colors.white};`}
  border-radius: 20px;
  width: calc(100vw - 20px);
  height: 80px;
  margin: 10px;
  padding: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) {
    width: calc(100vw - 180px);
  }
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: rgb(43 46 207 / 50%) 0px 5px 19px;
  }
`;
const Image = styled.img`
  border-radius: 10px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: 100%;
  width: 60px;
  height: 60px;
  min-width: 60px;
`;
const Title = styled.div`
  margin: 0px 10px;
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: 24px;
  line-height: 29px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Footer = styled.div`
  display: flex;
  min-width: 80px;
`;
type Props = {
  selected: boolean,
  id: number,
  title: string,
  image: string,
  message: boolean,
  heart: boolean,
  onSelect: (id: number) => void,
  onRemove: (id: number) => void,
};

const Row = ({
  selected,
  id,
  title,
  image,
  message: propMessage,
  heart: propHeart,
  onSelect,
  onRemove,
}: Props) => {
  const [heart, setHeart] = useState(propHeart);
  const [message, setMessage] = useState(propMessage);

  const handleHeartClick = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setHeart(!heart);
  };
  const handleMessageClick = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMessage(!message);
  };
  const handleClick = () => {
    selected ? onRemove(id) : onSelect(id);
  };
  return (
    <Container selected={selected} onClick={handleClick}>
      <Image url={image} />
      <Title selected={selected}>{title}</Title>
      <Footer>
        <Button aria-label={"message"} onClick={handleMessageClick}>
          <Icon
            name={"message-square"}
            color={message ? theme.colors.primary : theme.colors.grey}
          />
        </Button>
        <Button aria-label={"heart"} onClick={handleHeartClick}>
          <Icon
            name={"heart"}
            width={22}
            height={19}
            color={heart ? theme.colors.secondary : theme.colors.grey}
          />
        </Button>
      </Footer>
    </Container>
  );
};
export default Row;
