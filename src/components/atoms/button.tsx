import styled from "styled-components";

interface ButtonTypes {
  title: string;
  type: string;
}

interface ButtonSubContainerProps {
  color: string;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;

const ButtonSubContainer = styled.button<ButtonSubContainerProps>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 106px;
  padding: 30px 48px;
  font-size: 24px;
  outline: none;
  text-decoration: none;
  border: none;
  background-color: ${(props) => {
    if (props.color == "primary") {
      return "var(--white)";
    } else {
      return "var(--black)";
    }
  }};
  color: ${(props) => {
    if (props.color == "primary") {
      return "var(--black)";
    }
    if (props.color == "secondary") {
      return "var(--white)";
    }
  }};
`;

const Button = ({ title, type }: ButtonTypes) => {
  return (
    <ButtonContainer>
      <ButtonSubContainer color={type}>{title}</ButtonSubContainer>
    </ButtonContainer>
  );
};

export default Button;
