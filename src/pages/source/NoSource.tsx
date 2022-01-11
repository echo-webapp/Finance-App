import Header from "../../components/molecules/header";
import styled from "styled-components";
import { Ink } from "../../components/vectors";
import { useHistory } from "react-router";

const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  min-height: 100vh;
`;

const AddText = styled.div`
  font-weight: 500;
  font-size: 35.102px;
  text-align: center;
  color: var(--grid-text);
`;

const NoSource = ({ id }: any) => {
  const history = useHistory();
  return (
    <AddClientContainer>
      <Header
        heading="Transaction details"
        subheading="@WW24"
        buttonText="+ Add a Source"
        buttonHandler={() => {
          history.push(`/addsource/${id}`);
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <Ink color="var(--ink-icon)" width="272px" height="342px" />
      </div>
      <AddText>You haven't added any income source, add a source </AddText>
    </AddClientContainer>
  );
};

export default NoSource;
