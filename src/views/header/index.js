// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px 10px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-family: Poppins;
  font-size: 36px;
  line-height: 43px;
  text-align: left;
  margin: 0;
`;

const Header = () => {
return (
  <Container>
    <Title>{"Discover great places to visit"}</Title>
  </Container>
);
}
export default Header