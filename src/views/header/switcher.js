// @flow
import React, {useState} from 'react'
import styled from 'styled-components'

import Button from "../../shared/button.js";
import Icon from "../../shared/icon.js";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  width: 95px;
  height: 50px;
  padding:5px;
`;

const StyledButton = styled(Button)`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.selected ? "#2B2ECF" : "transparent")};
`;
type Props = {
    onChange:()=> void,
}

const Switcher = ({ onChange }: Props) => {
  const [selected, setSelected] = useState('grid')

  const handleGridClick = () => {
    setSelected('grid')
  }
  const handleListClick = () => {
    setSelected("list");
  };
  return (
    <Container>
      <StyledButton selected={selected === 'grid'} onClick={handleGridClick}>
        <Icon name="grid-view-icon" width={18} height={18} color={"#FFFFFF"} />
      </StyledButton>
      <StyledButton selected={selected === 'list'} onClick={handleListClick}>
        <Icon name="list-view-icon" width={18} height={18} color={"#FFFFFF"} />
      </StyledButton>
    </Container>
  );
};
export default Switcher