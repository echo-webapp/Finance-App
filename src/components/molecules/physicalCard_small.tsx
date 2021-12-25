import styled from "styled-components";
import Circle from "../atoms/circle";

interface ContainerProps {
  theme: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  background: ${(props) => {
    if (props.theme == "dark") {
      return "var(--green-gradient)";
    }
    if (props.theme == "light") {
      return "var(--black)";
    }
  }};
  border-radius: 24.2169px;
  width: 300px;
`;

interface DetailsContainerProps {
  theme: string;
}

const DetailsContainer = styled.div<DetailsContainerProps>`
  padding: 16px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  border-radius: 24.3404px;
  background-color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--black)";
    }
    if (props.theme == "light") {
      return "var(--card-grey)";
    }
  }};
  text-align: right;
  color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--white)";
    }
    if (props.theme == "light") {
      return "var(--black)";
    }
  }};
`;

interface BalanceContainerProps {
  theme: string;
}

const BalanceContainer = styled.div<BalanceContainerProps>`
  padding: 16px;
  padding-top: 10px;
  padding-bottom: 0px;
  text-align: right;
  color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--black)";
    }
    if (props.theme == "light") {
      return "var(--white)";
    }
  }};
  .balance-text {
    font-weight: 500;
    font-size: 16px;
  }
  .balance-amount {
    font-weight: 600;
    font-size: 26px;
    transform: translateY(-8px);
  }
`;

const SubContainer = styled.div`
  .mt {
    margin-top: 24px;
  }
`;

interface HeadingProps {
  theme: string;
}

const Heading = styled.div<HeadingProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--green)";
    }
    if (props.theme == "light") {
      return "var(--white)";
    }
  }};
`;

const Info = styled.div`
  div {
    font-weight: 500;
    font-size: 20px;
  }
  .account-holder-name {
    font-size: 24px;
  }
  .account-number {
    font-size: 20px;
    transform: translateY(-8px);
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

interface Physical_cardProps {
  theme: string;
}

const PhysicalCard_small = ({ theme }: Physical_cardProps) => {
  return (
    <Container theme={theme}>
      <CircleContainer>
        <div className="dark">
          <Circle color="dark" size="small" />
        </div>
        <div className="light">
          <Circle color="light" size="small" />
        </div>
      </CircleContainer>
      <DetailsContainer theme={theme}>
        <SubContainer>
          <Heading>Primary Account</Heading>
          <Info>
            <div>Bank Israel B.M</div>
          </Info>
        </SubContainer>
        <SubContainer>
          <Heading className="mt">Account info</Heading>
          <Info>
            <div className="account-holder-name">Jenny Wilson</div>
            <div className="account-number">xxx 438422</div>
          </Info>
        </SubContainer>
      </DetailsContainer>
      <BalanceContainer theme={theme}>
        <div className="balance-text">Balance</div>
        <div className="balance-amount">$21,420</div>
      </BalanceContainer>
    </Container>
  );
};

export default PhysicalCard_small;
