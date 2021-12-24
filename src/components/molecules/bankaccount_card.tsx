import styled from "styled-components";
import Circle from "../atoms/circle";
import SvgVisa from "../vectors/Visa";

interface ContainerProps {
  theme: string;
}

interface ImageContainerProps {
  theme: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${(props) => {
    if (props.theme == "light") {
      return "var(--card-grey)";
    }
    if (props.theme == "dark") {
      return "var(--black)";
    }
  }};
  border-radius: 24.2169px;
  width: 300px;
  height: 77px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  color: ${(props) => {
    if (props.theme == "light") {
      return "var(--black)";
    }
    if (props.theme == "dark") {
      return "var(--white)";
    }
  }};
  .price {
    font-size: 20px;
    transform: translateX(8px);
  }
  .divider {
    border: 1px solid #e5e5e5;
    width: 30px;
    height: 1px;
    transform: rotate(90deg);
    color: ${(props) => {
      if (props.theme == "light") {
        return "var(--black)";
      }
      if (props.theme == "dark") {
        return "var(--white)";
      }
    }};
  }
  .account-number {
    font-size: 16px;
    transform: translateX(-8px);
  }
`;

const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => {
    if (props.theme == "light") {
      return "var(--black)";
    }
    if (props.theme == "dark") {
      return "var(--white)";
    }
  }};
  .image {
    font-weight: 500;
  }
  .text {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const CircleContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  border-radius: 25px;
  .dark {
    position: absolute;
    transform: translate(-60%, -20%);
  }
  .light {
    transform: translate(-40%, -60%);
    box-shadow: 0px 4.56px 4.56px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    z-index: 5;
  }
`;

interface BankaccountCardProps {
  theme: string;
}

const BankaccountCard = ({ theme }: BankaccountCardProps) => {
  return (
    <Container theme={theme}>
      <CircleContainer>
        <div className="dark">
          <Circle color="dark" size="verysmall" />
        </div>
        <div className="light">
          <Circle color="light" size="verysmall" />
        </div>
      </CircleContainer>
      <div className="price">$1500</div>
      <div className="divider"></div>
      <div className="account-number">652110......</div>
      <ImageContainer>
        <div className="image">
          <SvgVisa
            color={theme == "dark" ? "white" : "black"}
            width={35}
            height={20}
          />
        </div>
        <div className="text">Credit Card</div>
      </ImageContainer>
    </Container>
  );
};

export default BankaccountCard;
