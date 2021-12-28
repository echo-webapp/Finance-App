import styled from "styled-components";
import Circle from "../atoms/circle";
import SvgDelete from "../vectors/Delete";

interface ContainerProps {
  theme: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;

  color: ${(props) => {
    if (props.theme == "light") {
      return "var(--black)";
    }
    if (props.theme == "dark") {
      return "var(--white)";
    }
  }};
  background: ${(props) => {
    if (props.theme == "light") {
      return "var(--black)";
    }
    if (props.theme == "dark") {
      return "var(--green-gradient)";
    }
  }};
  border-radius: 42px;
  width: 500px;
`;

interface DetailsContainerProps {
  theme: string;
}

const DetailsContainer = styled.div<DetailsContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  border-radius: 42px;
  padding: 60px;
  padding-top: 22px;
  padding-bottom: 22px;
  background: ${(props) => {
    if (props.theme == "light") {
      return "var(--card-grey)";
    }
    if (props.theme == "dark") {
      return "var(--black)";
    }
  }};
  text-align: right;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

interface HeadingProps {
  theme: string;
}

const Heading = styled.div<HeadingProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => {
    if (props.theme == "dark") {
      return "var(--white)";
    }
    if (props.theme == "light") {
      return "var(--black)";
    }
  }};
`;

interface InfoProps {
  theme: string;
}

const Info = styled.div<InfoProps>`
  font-size: 16px;
  font-weight: 600;
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
  padding: 32px;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  background: ${(props) => {
    if (props.theme == "dark") {
      return "var(--green-gradient)";
    }
    if (props.theme == "light") {
      return "var(--black)";
    }
  }};
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
    transform: translate(-50%, 50%);
  }
  .light {
    transform: translate(-30%, -30%);
    box-shadow: 0px 4.56px 4.56px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    z-index: 5;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 10px;
  /* transform: translate(-50%, -50%); */
  z-index: 9;
`;

interface Physical_cardProps {
  theme: string;
  details: string;
}

const PhysicalCard_large = ({ theme, details }: Physical_cardProps) => {
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
      <DeleteIcon>
        <SvgDelete width={20} height={20} />
      </DeleteIcon>

      <DetailsContainer theme={theme}>
        <SubContainer>
          <Info>Wade Warren</Info>
          <Heading>Account holder name</Heading>
        </SubContainer>
        <SubContainer>
          <Info>0000090722422</Info>
          <Heading>Account number</Heading>
        </SubContainer>
        <SubContainer>
          <Info>Israel B.M</Info>
          <Heading>Branch name</Heading>
        </SubContainer>
        <SubContainer>
          <Info>010800</Info>
          <Heading>Bank code </Heading>
        </SubContainer>
        <SubContainer>
          <Info>010800</Info>
          <Heading>Bank code </Heading>
        </SubContainer>
      </DetailsContainer>
      <BalanceContainer theme={theme}>
        <div className="balance-amount">$21,420</div>
        <div className="balance-text">Balance</div>
      </BalanceContainer>
    </Container>
  );
};

export default PhysicalCard_large;
