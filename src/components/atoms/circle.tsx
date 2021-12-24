import React from "react";
import styled from "styled-components";

interface CircleContainerProps {
  color: string;
  size: string;
}
const CircleContainer = styled.div<CircleContainerProps>`
  width: ${(props) => {
    if (props.size == "large") {
      return "214px";
    }
    if (props.size == "small") {
      return "60px";
    }
    if (props.size == "verysmall") {
      return "40px";
    }
  }};
  height: ${(props) => {
    if (props.size == "large") {
      return "214px";
    }
    if (props.size == "small") {
      return "60px";
    }
    if (props.size == "verysmall") {
      return "40px";
    }
  }};
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
  size: string;
}

const Circle = ({ color, size }: CircleProps) => {
  return <CircleContainer color={color} size={size}></CircleContainer>;
};

export default Circle;
