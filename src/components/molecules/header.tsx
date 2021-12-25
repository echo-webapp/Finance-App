import Button from "../atoms/button";
import styled from "styled-components";

interface HeaderProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHandler: any;
}

const HeaderContainer = styled.div`
  width: 80%;
  height: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--green-gradient);
  border-radius: 93px;
  margin-top: 40px;
`;

const Details = styled.div``;

const MainHeading = styled.h1`
  font-size: 88px;
  text-align: right;
  font-family: var(--oswald);
`;

const SubHeading = styled.div`
  font-size: 31px;
  text-align: right;
  font-family: var(--oswald);
  transform: translateY(40%);
`;

const Header = ({
  heading,
  subheading,
  buttonText,
  buttonHandler,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <Button
        title={buttonText}
        type="primary"
        clickHandler={buttonHandler}
        padding="20px 30px"
      />
      <Details>
        <SubHeading>{subheading}</SubHeading>
        <MainHeading>{heading}</MainHeading>
      </Details>
    </HeaderContainer>
  );
};

export default Header;
