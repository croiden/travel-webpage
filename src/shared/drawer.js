// @flow
import React from 'react'
import styled from 'styled-components'

import Icon from "./icon";


const Container = styled.div`
  background-image: linear-gradient(135deg, #2b2ecf 0%, #652bcf 100%);
  border-radius: 40px;
  width: 427px;
  height: 80px;
  position: absolute;
  bottom: 20px;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding:20px;
`;
const Text = styled.div`
  color: #ffffff;
  font-family: ${props => props.theme.fonts[2]};
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  flex: 1;
  padding: 10px;
`;
type Props = {
    selected:number,
}

const Drawer = ({ selected }: Props) => {
  return (
    <Container>
      <Icon name={"minus"} color={"#C5D3E8"} width={30} height={30} />
      <Text>{`${selected} item selected`}</Text>
      <Icon name={"heart"} color={"#C5D3E8"} width={22} height={19} />
      <Icon name={"share"} color={"#C5D3E8"} width={16} height={20} />
    </Container>
  );
};
export default Drawer