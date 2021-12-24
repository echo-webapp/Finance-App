import React, { useEffect, useState } from "react";
import { get_AllTransactions } from "../../api/client";
import NoSource from "./NoSource";
import AllTransactions from "./AllTransactions";
const Source = ({ match }: any) => {
  const [sources, setAllSources] = useState([]);
  useEffect(() => {
    const genResult = async () => {
      const res = await get_AllTransactions(match.params.id);
      setAllSources(res);
    };
    genResult();
  }, []);
  return <>{sources.length === 0 ? <NoSource /> : <AllTransactions />}</>;
};

export default Source;
