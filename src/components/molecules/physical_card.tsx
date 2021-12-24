import styled from "styled-components";
import Circle from "../atoms/circle";

const Container = styled.div`
  position: relative;
  background: var(--green);
  border-radius: 24.2169px;
  width: 300px;
`;

const DetailsContainer = styled.div`
  padding: 16px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  border-radius: 24.3404px;
  background-color: var(--black);
  text-align: right;
  color: var(--white);
`;

const BalanceContainer = styled.div`
  padding: 16px;
  padding-top: 10px;
  text-align: right;
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

const Heading = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--green);
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

const Physical_card = () => {
  return (
    <Container>
      <CircleContainer>
        <div className="dark">
          <Circle color="dark" size="small" />
        </div>
        <div className="light">
          <Circle color="light" size="small" />
        </div>
      </CircleContainer>
      <DetailsContainer>
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
      <BalanceContainer>
        <div className="balance-text">Balance</div>
        <div className="balance-amount">$21,420</div>
      </BalanceContainer>
    </Container>
  );
};

export default Physical_card;
