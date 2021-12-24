export const get_AllClients: any = async (val: any) => {
  const url = `https://pikel-it.com/finapp/clients/get.php?token=${val}`;
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
export const get_AllTransactions: any = async (val: any) => {
  const url = `https://pikel-it.com/finapp/sources/get.php?clientId=${val}`;
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
