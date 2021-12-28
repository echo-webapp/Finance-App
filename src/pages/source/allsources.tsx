import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/molecules/header";
import { get_AllTransactions } from "../../api/client";
import LoaderScreen from "../../components/molecules/LoaderScreen";
import { useHistory } from "react-router";
import PhysicalCard_large from "../../components/molecules/physicalCard_large";
import CreditCard from "../../components/molecules/credit_card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  min-height: 100vh;
  width: 100%;
`;

const LoaderContainer = styled.div`
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
  justify-content: space-around;
  position: relative;
  width: 80%;
  max-width: 1500px;
  margin-top: 20px;
  background: var(--white);
  border-radius: 93px;
  padding: 48px;
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

const AllBankAccountsCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .heading {
    font-weight: 600;
    font-size: 28px;
    padding-right: 20px;
  }
`;
const AllCreditCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .heading {
    font-weight: 600;
    font-size: 28px;
    padding-right: 20px;
  }
`;
const MultipleCardsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  gap: 30px;
  height: 600px;
  overflow-y: scroll;
  padding: 20px;
  .hover {
    cursor: pointer;
  }
`;
const MultipleCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  gap: 30px;
  height: 600px;
  /* overflow-y: auto; */
  /* width: 360px; */
  padding: 20px;
  .hover {
    cursor: pointer;
  }
`;

const Allsources = ({ match }: any) => {
  const history = useHistory();
  const [allbankaccounts, setallbankaccounts] = useState([]);
  const [allcreditcards, setallcreditcards] = useState([]);
  const [current_cc, setcurrent_cc] = useState(0);
  const [current_bank, setcurrent_bank] = useState(0);
  const [source_details, setsource_details]: any = useState(null);
  const [selected_source, setselected_source] = useState("bank");
  const [flag, setFlag] = useState(true);
  console.log("all sources", match.params.id);

  useEffect(() => {
    const genResult = async () => {
      const res = await get_AllTransactions(match.params.id);
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
      setallbankaccounts(bank);
      setallcreditcards(cc);
      setsource_details(bank[0]);
      setFlag(false);
    };

    genResult();
  }, []);

  useEffect(() => {
    console.log(allbankaccounts, allcreditcards);
  }, [allbankaccounts, allcreditcards]);

  return (
    <>
      {flag ? (
        <LoaderContainer>
          <LoaderScreen />
        </LoaderContainer>
      ) : (
        <Container>
          <Header
            heading="Client Name"
            subheading="@WW24"
            buttonText="Edit source details"
            buttonHandler={() => {
              history.push(`/editsource/${source_details.ID}`);
            }}
          />
          <SubContainer>
            <AllBankAccountsCards>
              <div className="heading">Bank account details</div>
              <MultipleCardsCarousel>
                {allbankaccounts
                  ? allbankaccounts.map((bank, key) => {
                      return (
                        <div
                          className="hover"
                          key={key}
                          onClick={() => {
                            setselected_source("bank");
                            setcurrent_bank(key);
                            setsource_details(bank);
                          }}
                        >
                          <PhysicalCard_large
                            details={bank}
                            theme={
                              current_bank == key && selected_source == "bank"
                                ? "dark"
                                : "light"
                            }
                          />
                        </div>
                      );
                    })
                  : null}
              </MultipleCardsCarousel>
            </AllBankAccountsCards>
            <AllCreditCards>
              <div className="heading">Card Details</div>
              <MultipleCards>
                {allcreditcards
                  ? allcreditcards.map((cc, key) => {
                      return (
                        <div
                          className="hover"
                          key={key}
                          onClick={() => {
                            setselected_source("cc");
                            setcurrent_cc(key);
                            setsource_details(cc);
                          }}
                        >
                          <CreditCard
                            size="large"
                            details={cc}
                            theme={
                              current_cc == key && selected_source == "cc"
                                ? "dark"
                                : "light"
                            }
                          />
                        </div>
                      );
                    })
                  : null}
              </MultipleCards>
            </AllCreditCards>
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default Allsources;
