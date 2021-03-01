// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tagBg};
  border-radius: 11.5px;
  height: 23px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Text = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: OpenSans;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  padding: 2px 10px;
`;

type Props = {
    text:string,
}

const Tag = ({ text }: Props) => {
  return <Container><Text>{text}</Text></Container>;
};
export default Tag