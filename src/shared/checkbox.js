// @flow
import React from "react";
import styled from "styled-components";

// $FlowFixMe
import { ReactComponent as TickIcon } from "../assets/tick/svg/tick.svg";
import { theme } from "../theme/index.js";

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
  border: 2px solid ${(props) =>
    !props.checked ? props.theme.colors.white : "none"}}

  background-color: ${(props) => (props.checked ? "#37f6b8" : "transparent")};
`;

const StyledTickIcon = styled(TickIcon)`
  display: ${(props) => (props.checked ? "block" : "none")};
`;

type Props = {
  checked?: boolean,
  onChange: (e: SyntheticKeyboardEvent<HTMLInputElement>) => void,
};
const Checkbox = ({ checked = false, onChange, ...props }: Props) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <StyledTickIcon
        checked={checked}
        width={"16px"}
        height={"16px"}
        fill={theme.colors.white}
      />
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
