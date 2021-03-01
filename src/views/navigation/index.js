// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image: ${(props) => `linear-gradient(135deg, ${props.theme.colors.primary} 0%, #652bcf 100%)`};
  border-radius: 20px;
  width: 100px;
  height: calc(100vh - 40px);
`;


const Nav = () => {
return (<Container></Container>)
}
export default Nav