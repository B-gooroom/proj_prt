import React from "react";
import styled from "styled-components";

const Btn = styled.button<{ border: any }>`
  width: 160px;
  height: 42px;
  border: 1px solid ${(props) => props.border || "#333"};
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  margin-bottom: 4px;
`;

export default function click(props: any) {
  const { children, border } = props;
  return (
    <Btn {...props} border={border}>
      {children}
    </Btn>
  );
}
