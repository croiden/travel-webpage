// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Tag from "./tag";

// import FocusableDiv from "../../shared/a11y/focusable.js";
import Icon from "../../shared/icon";
import Checkbox from "../../shared/checkbox";
import Button from "../../shared/button.js";
import Focusable from "../../shared/a11y/focusable.js";

import { theme } from "../../theme/index.js";

const CheckboxWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: ${(props) => (props.selected ? "block" : "none")};
`;
const Container = styled(Focusable)`
  ${(props) =>
    props.selected
      ? `background-image: linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.purple} 100%);`
      : `background-color: ${props.theme.colors.white};`}

  border-radius: 20px;
  display: inline-grid;
  padding: 10px;
  margin: 10px;
  position: relative;
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: rgb(43 46 207 / 50%) 0px 5px 19px;
    ${CheckboxWrapper} {
      display: block;
    }
  }
`;
const Image = styled.div`
  border-radius: 20px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: 100%;
  width: 285px;
  height: 149px;
`;
const DetailsSection = styled.div`
  margin: 10px;
`;
const Title = styled.div`
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  max-width: 265px;
`;
const Content = styled.div`
  padding-top: 10px;
  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  max-width: 265px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Tags = styled.div``;
type Props = {
  selected: boolean,
  id: number,
  title: string,
  image: string,
  content: string,
  tags: Array<string>,
  message: boolean,
  heart: boolean,
  onSelect: (id: number) => void,
  onRemove: (id: number) => void,
};

const Card = ({
  selected,
  id,
  title,
  image,
  content,
  tags,
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
  const handleSelectClick = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    !selected ? onSelect(id) : onRemove(id);
  };
  return (
    <Container selected={selected} onClick={handleSelectClick}>
      <CheckboxWrapper selected={selected}>
        <Checkbox
          checked={selected}
          onChange={handleSelectClick}
          tabIndex={-1}
        />
      </CheckboxWrapper>
      <Image url={image} />
      <Tags>
        {tags.map((t, index) => (
          <Tag key={index} text={t} />
        ))}
      </Tags>
      <DetailsSection>
        <Title selected={selected}>{title}</Title>
        <Content>{content}</Content>
      </DetailsSection>
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
export default Card;
