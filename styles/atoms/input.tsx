import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 120px;
  height: 30px;
  margin-bottom: 4px;
  background-color: #fff;
  border: 1px solid ${(props) => props.color || "skyblue"};
  border-radius: 4px;
  margin-left: 12px;
`;

export default function input(props: any) {
  const { children } = props;
  return <Input {...props}>{children}</Input>;
}
