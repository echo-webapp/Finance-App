import Button from "../atoms/button";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface HeaderProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHandler: any;
  extraButton?: any;
  extraButtonHandler?: any;
  hidden?: boolean;
}

const HeaderContainer = styled.div`
  width: 80%;
  max-width: 1500px;
  height: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--green-gradient);
  border-radius: 93px;
  margin-top: 40px;
  @media only screen and (max-width: 1700px) {
    width: 100%;
    transform: scale(0.9);
  }

  @media only screen and (max-width: 1600px) {
    width: 100%;
    transform: scale(0.9);
  }
`;

const Details = styled.div`
  a {
    color: var(--black);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({
  heading,
  subheading,
  buttonText,
  buttonHandler,
  extraButton,
  extraButtonHandler,
  hidden,
}: HeaderProps) => {
  if (extraButton) {
    return (
      <HeaderContainer>
        <Flex>
          <Button
            title={buttonText}
            type="primary"
            clickHandler={buttonHandler}
            padding="20px 40px"
          />
          <Button
            title={extraButton}
            type="primary"
            clickHandler={extraButtonHandler}
            padding="20px 30px"
          />
        </Flex>
        <Details>
          <Link to="/">
            <SubHeading>[logo] Check_App</SubHeading>
          </Link>
          <MainHeading>{heading}</MainHeading>
        </Details>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <Button
        title={buttonText}
        type="primary"
        clickHandler={buttonHandler}
        padding="20px 40px"
        hidden={hidden}
      />
      <Details>
        <SubHeading>
          <Link to="/">
            <SubHeading>[logo] Check_App</SubHeading>
          </Link>
        </SubHeading>
        <MainHeading>{heading}</MainHeading>
      </Details>
    </HeaderContainer>
  );
};

export default Header;
