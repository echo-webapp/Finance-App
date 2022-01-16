export const get_Chart1Data = async (id: any) => {
  const url = `https://pikel-it.com/finapp/charts/InOutAvg.php?clientId=${id}`;
  return fetch(url, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
export const get_Chart3Data = async (id: any, type: any, category: any) => {
  const url = `https://pikel-it.com/finapp/charts/InOutGroup.php?clientId=${id}&mode=${type}&groupBy=${category}`;
  console.log(url);
  return fetch(url, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
