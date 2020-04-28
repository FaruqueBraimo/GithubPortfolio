import React from "react";
import styled from 'styled-components'

const InnerLink = styled.a `
   color : #61dafb;
`;

const Link = (props) => (
  <InnerLink
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.title}
  </InnerLink>
);
export default Link;
