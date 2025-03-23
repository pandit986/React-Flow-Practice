import React from "react";
import { Handle } from "reactflow";
import styled from "styled-components";

const StyledHandle = styled(Handle)`
  width: 8px;
  height: 8px;
  background: white;
  border: 2px solid black;
`;

export default function CustomHandle(props) {
  return <StyledHandle {...props} />;
}
