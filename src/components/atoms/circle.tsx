import React from "react";
import styled from "styled-components";

interface CircleContainerProps {
  color: string;
}
const CircleContainer = styled.div<CircleContainerProps>`
  width: 214px;
  height: 214px;
  background-color: ${(props) => {
    if (props.color == "dark") {
      return "var(--darkgreen)";
    }
    if (props.color == "light") {
      return "var(--green)";
    }
    return "none";
  }};
  border-radius: 50%;
`;

interface CircleProps {
  color: string;
}

const Circle = ({ color }: CircleProps) => {
  return <CircleContainer color={color}></CircleContainer>;
};

export default Circle;
