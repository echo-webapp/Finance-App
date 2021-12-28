import styled from "styled-components";
import { useHistory } from "react-router";
import Button from "../atoms/button";
import Circle from "../atoms/circle";
import { delete_Source } from "../../api/client";
import { toast } from "react-toastify";
const Text1 = styled.div`
  margin-top: 5px;
  font-weight: 600;
  font-size: 24px;
  color: #343a40;
`;
const Text2 = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #adb5bd;
`;
const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 516px;
  height: 385px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 27px;
`;
const ButtonCon = styled.div`
  margin-top: 40px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CircleContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  .dark {
    position: absolute;
    transform: translate(70%, -40%);
    z-index: 5;
  }
  .light {
    transform: translate(35%, -60%);
  }
`;

const DeleteObject = ({ id, parid, text, type, handleClose }: any) => {
  const deleteItem = async () => {
    if (type === "source") {
      const res = await delete_Source(parid, id);
      toast.success("Source Deleted Successfully!");
      handleClose();
    }
  };
  return (
    <MainContainer>
      <CircleContainer>
        <div className="dark">
          <Circle color="dark" size="large" />
        </div>
        <div className="light">
          <Circle color="light" size="large" />
        </div>
      </CircleContainer>
      <Text1>{text}</Text1>
      <Text2>you will not able to recover it</Text2>
      <ButtonCon>
        <Button
          title="Delete"
          type="secondary"
          padding="24px 48px"
          clickHandler={deleteItem}
        ></Button>
        <Button
          title="Cancel"
          type="primary"
          padding="24px 48px"
          clickHandler={() => {
            handleClose();
          }}
        ></Button>
      </ButtonCon>
    </MainContainer>
  );
};

export default DeleteObject;
