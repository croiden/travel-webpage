// @flow
import React from "react";
import styled from "styled-components";

import Button from "../../shared/button.js";
import Icon from "../../shared/icon.js";

import { type ViewType } from "../../types";
import { GRIDVIEW, LISTVIEW } from "../../constants";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  height: 50px;
  width: 95px;
  min-width: 95px;
  padding: 5px;
`;

const StyledButton = styled(Button)`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.selected ? "#2B2ECF" : "transparent")};
`;
type Props = {
  view: ViewType,
  onChange: (v: ViewType) => void,
};

const Switcher = ({ view, onChange, ...props }: Props) => {
  const handleGridClick = () => {
    onChange(GRIDVIEW);
  };
  const handleListClick = () => {
    onChange(LISTVIEW);
  };
  return (
    <Container {...props}>
      <StyledButton
        selected={view === GRIDVIEW}
        onClick={handleGridClick}
        disabled={view === GRIDVIEW}
        aria-label={"grid view"}
      >
        <Icon name="grid-view-icon" width={18} height={18} color={"#FFFFFF"} />
      </StyledButton>
      <StyledButton
        selected={view === LISTVIEW}
        onClick={handleListClick}
        disabled={view === LISTVIEW}
        aria-label={"list view"}
      >
        <Icon name="list-view-icon" width={18} height={18} color={"#FFFFFF"} />
      </StyledButton>
    </Container>
  );
};
export default Switcher;
