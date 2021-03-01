// @flow
import React from 'react'
import styled from "styled-components";

import Navigation from './navigation'
import Header from './header'
import Grid from './grid'

const Container = styled.div`
    display:flex;
`
const MainSection = styled.div`
    margin:20px;
`
const Main = () => {
return (
  <Container>
    <Navigation />
    <MainSection>
      <Header />
      <Grid />
    </MainSection>
  </Container>
);
}
export default Main