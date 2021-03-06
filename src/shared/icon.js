// @flow
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { theme } from "../theme/index.js";

const Container = styled.div`
  padding: 10px;
`;
type Props = {
  name: string,
  height?: number,
  width?: number,
  color?: string,
};
export default ({
  name = "heart",
  width = 18,
  height = 18,
  color = theme.colors.grey,
  ...props
}: Props) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = ( // $FlowFixMe
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
      <Container {...props}>
        <ImportedIcon width={width} height={height} stroke={color} />
      </Container>
    );
  }

  return null;
};
