// @flow
import React from 'react'
import styled from 'styled-components'

// $FlowFixMe
import {ReactComponent as TickIcon} from '../assets/tick/svg/tick.svg'


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  cursor: inherit;
  padding: 0;
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items:center;
  justify-content:center;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  ${(props) =>
    !props.checked &&
    `
  border: 2px solid #ffffff;`}

  background-color: ${(props) => (props.checked ? "#37f6b8" : "transparent")};
`;

const StyledTickIcon = styled(TickIcon)`
  display: ${(props) => (props.checked ? "block" : "none")};
`;

type Props = {
  checked?: boolean,
  onClick: (e: SyntheticKeyboardEvent<HTMLInputElement>) => void,
};
const Checkbox = ({ checked = false, onClick, ...props }: Props) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} checked={checked} onClick={onClick} />
    <StyledCheckbox checked={checked}>
      <StyledTickIcon
        checked={checked}
        width={"16px"}
        height={"16px"}
        fill={"#FFFFFF"}
      />
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
