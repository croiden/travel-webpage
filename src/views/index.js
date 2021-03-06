// @flow
import React, { useState } from "react";
import styled from "styled-components";

import Navigation from "./navigation";
import Header from "./header";
import Content from "./content";
import Drawer from "../shared/drawer.js";

import { GRIDVIEW } from "../constants";
import { type ViewType } from "../types";

const Container = styled.div`
  display: flex;
`;
const MainSection = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.mobile + 1}px) {
    margin: 20px;
  }
`;
const Main = () => {
  const [view, setView] = useState(GRIDVIEW);
  const [selected, setSelected] = useState([]);
  const handleViewChange = (value: ViewType) => {
    setView(value);
  };

  const handleSelect = (id: number) => {
    setSelected([...selected, id]);
  };
  const handleRemove = (id: number) => {
    setSelected(selected.filter((s) => s !== id));
  };
  return (
    <Container>
      <Navigation />
      <MainSection>
        <Header view={view} onViewChange={handleViewChange} />
        <Content
          view={view}
          selected={selected}
          onSelect={handleSelect}
          onRemove={handleRemove}
        />
      </MainSection>
      <Drawer selected={selected.length} />
    </Container>
  );
};
export default Main;
