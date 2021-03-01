// @flow
import React, { useState } from "react";
import styled from 'styled-components'

import Tag from './tag'
import Icon from '../icon'

const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  display: inline-block;
  padding: 10px;
  margin: 10px;
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
  color: ${(props) => props.theme.colors.primary};
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
    title:string,
    image: string,
    content:string,
    tags:Array<string>,
    message: boolean,
    heart:boolean,
}

const Card = ({
  title,
  image,
  content,
  tags,
  message,
  heart: propHeart,
}: Props) => {
  const [heart, setHeart] = useState(propHeart);

  const handleHeartClick = () => {
    setHeart(!heart);
  }
  return (
    <Container>
      <Image url={image} />
      {tags.map((t, index) => (
        <Tag key={index} text={t} />
      ))}
      <DetailsSection>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </DetailsSection>
      <Footer>
      <Icon name={"message-square"} color={message ? "#2B2ECF" : "#C5D3E8"} />
      <Icon
        name={"heart"}
        width={22}
        height={19}
        color={heart ? "#FF0066" : "#C5D3E8"}
        onClick={handleHeartClick}
      />
      </Footer>
    </Container>
  );
};
export default Card