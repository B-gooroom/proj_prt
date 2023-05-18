import React from "react";
import styled from "styled-components";

const Label = styled.label`
  color: ${(props) => props.color || "#333"};
  margin-bottom: 4px;
`;

export default function label(props: any) {
  const { children } = props;
  return <Label {...props}>{children}</Label>;
}
