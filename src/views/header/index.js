// @flow
import React from 'react'
import styled from 'styled-components'

import Switcher from './switcher';

const Container = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts[3]};
  font-size: 36px;
  line-height: 43px;
  text-align: left;
  margin: 0;
`;

const Header = () => {
return (
  <Container>
    <Title>{"Discover great places to visit"}</Title>
    <Switcher onChange={()=>{}}/>
  </Container>
);
}
export default Header