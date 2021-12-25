import styled from "styled-components";
import Circle from "../atoms/circle";
import SvgDelete from "../vectors/Delete";

const Container = styled.div`
  position: relative;
  background: var(--green-gradient);
  border-radius: 24.2169px;
  width: 500px;
`;

const BankListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  div {
    background-color: var(--white);
    color: var(--black);
    padding: 12px 24px;
    border-radius: 106px;
    font-weight: 500;
    font-size: 16px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: inset 3.01531px 5.02551px 4.02041px rgba(0, 0, 0, 0.25);
  border-radius: 24.3404px;
  padding: 32px;
  padding-top: 22px;
  background: var(--black);
  text-align: right;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: var(--green);
`;

const Info = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--white);
`;

const BalanceContainer = styled.div`
  padding: 32px;
  padding-top: 10px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

const PhysicalCard_large = ({ theme }: any) => {
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
        <BankListContainer>
          <div>Primary</div>
          <div>Secondary</div>
        </BankListContainer>
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
