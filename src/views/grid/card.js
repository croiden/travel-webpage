// @flow
import React, { useState } from "react";
import styled from 'styled-components'

import Tag from './tag'

// import FocusableDiv from "../../shared/a11y/focusable.js";
import Icon from "../../shared/icon";
import Checkbox from "../../shared/checkbox";
import Button from "../../shared/button.js";


const CheckboxWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: ${(props) => props.selected? 'block':'none'};
`;
const Container = styled.div`
  ${(props) =>
    props.selected
      ? `background-image: linear-gradient(135deg, #2b2ecf 0%, #652bcf 100%);`
      : `background-color: ${props.theme.colors.white};`}

  border-radius: 20px;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  position: relative;
  cursor: pointer;
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
  margin:10px;
`
const Title = styled.div`
  color: ${(props) => props.selected? props.theme.colors.white:props.theme.colors.primary};
  font-family: Poppins;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  max-width: 265px;
`;
const Content = styled.div`
  padding-top:10px;
  color: #7f8a9c;
  font-family: OpenSans;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  max-width:265px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
type Props = {
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
  const [selected, setSelected] = useState(false);

  const handleHeartClick = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    setHeart(!heart);
  };
  const handleMessageClick = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    setMessage(!!message);
  };
  const handleSelectClick = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    setSelected(!selected);
    !selected ? onSelect(id):onRemove(id);
  };
  return (
    <Container selected={selected}>
      <CheckboxWrapper selected={selected}>
        <Checkbox checked={selected} onClick={handleSelectClick} />
      </CheckboxWrapper>
      <Image url={image} />
      {tags.map((t, index) => (
        <Tag key={index} text={t} />
      ))}
      <DetailsSection>
        <Title selected={selected}>{title}</Title>
        <Content>{content}</Content>
      </DetailsSection>
      <Footer>
        <Button onClick={handleMessageClick}>
          <Icon
            name={"message-square"}
            color={message ? "#2B2ECF" : "#C5D3E8"}
          />
        </Button>
        <Button onClick={handleHeartClick}>
          <Icon
            name={"heart"}
            width={22}
            height={19}
            color={heart ? "#FF0066" : "#C5D3E8"}
          />
        </Button>
      </Footer>
    </Container>
  );
};
export default Card