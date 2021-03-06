// @flow
import React from "react";
import styled from "styled-components";

import Card from "./card";
import Row from "./listrow";

import places from "../data/places.json";

import { type ViewType } from "../types";
import { GRIDVIEW } from "../constants";

const Container = styled.div`
  overflow: auto;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100vh - 550px);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile + 3}px) {
    height: calc(100vh - 120px);
  }
`;

type Props = {
  view: ViewType,
  selected: Array<number>,
  onSelect: (id: number) => void,
  onRemove: (id: number) => void,
};
const Content = ({ view, selected, onSelect, onRemove }: Props) => {
  const Wrapper = view === GRIDVIEW ? Card : Row;
  return (
    <Container view={view}>
      {places.map((p) => (
        <Wrapper
          key={p.id}
          {...p}
          selected={selected.indexOf(p.id) !== -1}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      ))}
    </Container>
  );
};
export default Content;
