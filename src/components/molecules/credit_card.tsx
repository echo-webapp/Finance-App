import styled from "styled-components";
import Circle from "../atoms/circle";
import SvgVisa from "../vectors/Visa";
import SvgCopy from "../vectors/Copy";
import SvgDelete from "../vectors/Delete";

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
  border-radius: 24.2169px;
  width: 300px;
  height: 77px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);

  background: ${(props) => {
    if (props.theme == "light") {
      return "var(--card-grey)";
    }
    if (props.theme == "dark") {
      return "var(--black)";
    }
  }};

  color: ${(props) => {
    if (props.theme == "light") {
      return "var(--black)";
    }
    if (props.theme == "dark") {
      return "var(--white)";
    }
  }};

  transform: ${(props) => {
    if (props.theme == "light") {
      return "scale(0.8)";
    }
    if (props.theme == "dark") {
      return "none";
    }
  }};

  transition: all 0.5s ease-in;
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
  transition: all 0.5s ease-in;
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
  .light1 {
    transform: translate(-30%, -30%);
    box-shadow: 0px 4.56px 4.56px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    z-index: 5;
  }
  .dark1 {
    position: absolute;
    transform: translate(-40%, 50%);
  }
`;

// styles for size == "large"
interface LargeContainerProps {
  theme: string;
}

const LargeContainer = styled.div<LargeContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  background: ${(props) => {
    if (props.theme == "dark") {
      return "var(--black)";
    }
    if (props.theme == "light") {
      return "var(--card-grey)";
    }
  }};
  color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--white)";
    }
    if (props.theme == "light") {
      return "var(--black)";
    }
  }};
  transition: all 0.5s ease-in;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  border-radius: 24.2169px;
  padding: 16px;
  .card-holder-name {
    text-align: right;
    font-weight: 600;
    font-size: 16px;
  }
`;

const ImageContainer1 = styled(ImageContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 24px;
  .text {
    transform: translateY(-20%);
  }
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-top: 24px;
  .account-balance {
    .balance {
      font-size: 12px;
      font-weight: 500;
    }
    .number {
      font-weight: 600;
      font-size: 20px;
      text-align: left;
      transform: translateY(-10%);
    }
  }

  .number-and-icon {
    display: flex;
    gap: 12px;
    .copy-icon {
      svg {
        vertical-align: middle;
      }
    }
  }
  .date {
    font-weight: 500;
    font-size: 12px;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 10px;
  z-index: 9;
`;

interface BankaccountCardProps {
  theme: string;
  size: string;
  details: string;
}

const CreditCard = ({ theme, size, details }: BankaccountCardProps) => {
  if (size == "large") {
    return (
      <LargeContainer theme={theme}>
        <DeleteIcon>
          <SvgDelete width={20} height={20} />
        </DeleteIcon>
        <CircleContainer theme={theme}>
          <div className="dark1">
            <Circle color="dark" size="small" />
          </div>
          <div className="light1">
            <Circle color="light" size="small" />
          </div>
        </CircleContainer>
        <ImageContainer1 theme={theme}>
          <div className="image">
            <SvgVisa
              color={theme == "dark" ? "white" : "black"}
              width={35}
              height={20}
            />
          </div>
          <div className="text">Credit Card</div>
        </ImageContainer1>
        <div className="card-holder-name">Wade Warren</div>
        <CardDetails theme={theme}>
          <div className="account-balance">
            <div className="balance">Balance</div>
            <div className="number">$1500</div>
          </div>
          <div className="account-number-with-date">
            <div className="number-and-icon">
              <div className="copy-icon">
                <SvgCopy color={theme == "dark" ? "white" : "black"} />
              </div>
              <div className="account-number">xxx 652110</div>
            </div>
            <div className="date">06/25</div>
          </div>
        </CardDetails>
      </LargeContainer>
    );
  }

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

export default CreditCard;