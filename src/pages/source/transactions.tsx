import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/molecules/header";
import ClientDataGrid from "../../components/molecules/clientDataGrid";
import CreditCard from "../../components/molecules/credit_card";
import SvgPlusIcon from "../../components/vectors/PlusIcon";
import { get_AllSources } from "../../api/get";
import PhysicalCard_small from "../../components/molecules/physicalCard_small";
import { Link } from "react-router-dom";
import LoaderScreen from "../../components/molecules/LoaderScreen";
import SvgArrowleft from "../../components/vectors/Arrowleft";
import { Tooltip } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  min-height: 100vh;
  width: 100%;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  min-height: 100vh;
  width: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 80%;
  max-width: 1500px;
  margin-top: 20px;
  background: var(--white);
  border-radius: 93px;
  gap: 20px;
  @media only screen and (max-width: 1700px) {
    width: 100%;
    transform: scale(0.9);
  }

  @media only screen and (max-width: 1600px) {
    width: 100%;
    transform: scale(0.9);
  }
`;

const DataGrid = styled.div`
  width: 800px;
  width: 70%;
  background: var(--white);
  border-bottom-left-radius: 800px;
  border-top-left-radius: 800px;
`;

const CardsComponents = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 48px;
  padding-right: 48px;
  padding-top: 48px;
  padding-left: 48px;
  overflow: hidden;
  align-items: flex-start;
  border-radius: 93px;
`;

const BankAccountCardsHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .heading {
    .plus-icon {
      svg {
        &:hover {
          circle {
            fill: #aaa;
          }
        }
      }
    }
  }
  .heading-text {
    font-weight: 600;
    font-size: 20px;
  }
`;

interface MultipleCardProps {
  selected: number;
}

const MultipleBankAccounts = styled.div<MultipleCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: ${(props) => `translateX(-${300 * props.selected - 15}px)`};
  transition: all 0.3s ease-out;
  .hover {
    &:hover {
      cursor: pointer;
    }
  }
`;

interface MultipleCreditCards {
  selected: number;
}
const MultipleCreditCards = styled.div<MultipleCreditCards>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: ${(props) => `translateX(-${300 * props.selected - 20}px)`};
  transition: all 0.3s ease-in-out;
  .hover {
    &:hover {
      cursor: pointer;
    }
  }
`;

const CreditCardsHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .heading {
    .plus-icon {
      svg {
        &:hover {
          circle {
            fill: #aaa;
          }
        }
      }
    }
  }
  .heading-text {
    font-weight: 600;
    font-size: 20px;
  }
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  width: 70%;
  max-width: 1500px;
  height: 70px;
  border-bottom: 1px solid #adb5bd;
`;

const SubHeader1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .arrow-left {
    margin-left: 20px;
    position: relative;
    height: 50px;
    width: 50px;
    padding: 10px;
    border-radius: 50px;
    color: white;
    svg {
      vertical-align: middle;
      height: 100%;
      width: 100%;
    }
    &:hover {
      background-color: #eee;
      cursor: pointer;
      color: var(--black);
    }
  }
`;

const Transactions = ({ id }: any) => {
  const history = useHistory();
  const [sources, setsources] = useState([]);
  const [allbankaccounts, setallbankaccounts] = useState([]);
  const [allcreditcards, setallcreditcards] = useState([]);
  const [selected_cc, setselected_cc] = useState(0);
  const [selected_bank, setselected_bank] = useState(0);
  const [selected_transaction, setselected_transaction] = useState("bank");
  const [source_details, setsource_details]: any = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const genResult = async () => {
      const res = await get_AllSources(id);
      const bank: any = [];
      const cc: any = [];
      res.map((obj: any) => {
        if (obj.sourceType == "Bank") {
          bank.push(obj);
        }
        if (obj.sourceType == "cc") {
          cc.push(obj);
        }
      });
      setsources(res);
      setallbankaccounts(bank);
      setallcreditcards(cc);
      setsource_details(bank[0]);
      setFlag(false);
    };

    genResult();
  }, []);

  return (
    <>
      {flag ? (
        <Container1>
          <LoaderScreen />
        </Container1>
      ) : (
        <Container>
          <Header
            heading="Transaction details"
            subheading="@WW24"
            buttonText="View all sources"
            buttonHandler={() => {
              history.push(`/allsources/${id}`);
            }}
            extraButton="View all transactions"
            extraButtonHandler={() => {
              history.push({
                pathname: "/transactions",
                state: { sources_list: sources },
              });
            }}
          />
          {/* <SubHeader>
            <SubHeader1>
              <div onClick={() => history.push("/")} className="arrow-left">
                <SvgArrowleft color="white" />
              </div>
            </SubHeader1>
          </SubHeader> */}
          <SubContainer>
            <DataGrid>
              <ClientDataGrid source_id={source_details?.ID} />
            </DataGrid>
            <CardsComponents>
              <BankAccountCardsHeading>
                <Tooltip title="Add a Bank Source">
                  <div className="heading">
                    <Link
                      to={{
                        pathname: `/addsource/${id}`,
                        state: "bank",
                      }}
                    >
                      <div className="plus-icon">
                        <SvgPlusIcon />
                      </div>
                    </Link>
                  </div>
                </Tooltip>
                <div className="heading-text">Bank Accounts</div>
              </BankAccountCardsHeading>
              <MultipleBankAccounts selected={selected_bank}>
                {allbankaccounts
                  ? allbankaccounts.map((bank, key) => {
                      return (
                        <div
                          className="hover"
                          key={key}
                          onClick={() => {
                            setselected_transaction("bank");
                            setselected_bank(key);
                            setsource_details(bank);
                          }}
                        >
                          <PhysicalCard_small
                            theme={
                              selected_bank == key &&
                              selected_transaction == "bank"
                                ? "dark"
                                : "light"
                            }
                            details={bank}
                            name={"hello"}
                          />
                        </div>
                      );
                    })
                  : null}
              </MultipleBankAccounts>

              <CreditCardsHeading>
                <Tooltip title="Add a Card Source">
                  <div className="heading">
                    <Link
                      to={{
                        pathname: `/addsource/${id}`,
                        state: "cc",
                      }}
                    >
                      <div className="plus-icon">
                        <SvgPlusIcon />
                      </div>
                    </Link>
                  </div>
                </Tooltip>
                <div className="heading-text">Cards</div>
              </CreditCardsHeading>
              <MultipleCreditCards selected={selected_cc}>
                {allcreditcards
                  ? allcreditcards.map((cc, key) => {
                      return (
                        <div
                          className="hover"
                          key={key}
                          onClick={() => {
                            setselected_transaction("cc");
                            setselected_cc(key);
                            setsource_details(cc);
                          }}
                        >
                          <CreditCard
                            size="small"
                            theme={
                              selected_cc == key && selected_transaction == "cc"
                                ? "dark"
                                : "light"
                            }
                            details={cc}
                          />
                        </div>
                      );
                    })
                  : null}
              </MultipleCreditCards>
            </CardsComponents>
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default Transactions;
