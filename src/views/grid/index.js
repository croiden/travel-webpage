// @flow
import React, { useState } from "react";
import styled from 'styled-components'

import Card from './card'
import places from '../../data/places.json'

import Drawer from '../../shared/drawer.js'

const Container = styled.div`
  overflow: auto;
  height: calc(100vh - 100px);
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Grid = () => {

    const [selected, setSelected] = useState([])

    const handleSelect = (id: number) => {
        setSelected([...selected, id])
    }
    const handleRemove = (id:number) => {
        setSelected(selected.filter(s=> s!==id))
    }
    return <Container>{places.map(p=> <Card key={p.id} {...p} onSelect={handleSelect} onRemove={handleRemove}/>)} {selected.length? <Drawer selected={selected.length}/>:null}</Container>;
}
export default Grid