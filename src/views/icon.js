// @flow
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components'

const Container= styled.div`
    padding:10px;
`
type Props = {
  name: string,
  height?: number,
  width?: number,
  color?: string,
  onClick?: ()=> void,
};
export default ({
  name,
  width = 18,
  height = 18,
  color = "#C5D3E8",
  onClick = ()=>{},
}: Props) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/${name}/svg/${name}.svg`
          )
        ).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <Container onClick={onClick}>
        <ImportedIcon width={width} height={height} stroke={color} />
      </Container>
    );
  }

  return null;
};
