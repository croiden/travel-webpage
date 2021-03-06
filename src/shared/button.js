// @flow
import React from "react";
import styled from "styled-components";

const NakedButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline-color: ${(props) => props.theme.colors.primary};
`;

type Props = {
  onClick: (e: SyntheticKeyboardEvent<HTMLButtonElement>) => void,
  children: React$Element<*>,
};

const Button = ({ onClick, children, ...props }: Props) => {
  return (
    <NakedButton {...props} onClick={onClick}>
      {children}
    </NakedButton>
  );
};

export default Button;
