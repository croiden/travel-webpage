// @flow
import React from 'react'
import styled from 'styled-components'

import Card from './card'
import places from '../../data/places.json'

const Container= styled.div`
    
`
const Grid = () => {
return <Container>{places.map(p=> <Card key={p.id} {...p}/>)}</Container>;
}
export default Grid