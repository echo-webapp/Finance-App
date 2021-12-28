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

export const create_Client: any = async (data: any, token: any) => {
  const url = `https://pikel-it.com/finapp/clients/create.php?token=${token}`;
  return fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const get_AllSources: any = async (val: any) => {
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

export const create_ClientSource = async (data: any, id: any) => {
  const url = `https://pikel-it.com/finapp/sources/create.php?clientId=${id}`;
  return fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getTransactionDetails = async (id: any) => {
  // const url = `https://pikel-it.com/finapp/transactions/get.php?sourceId=61c44bc73b434`;
  const url = `https://pikel-it.com/finapp/transactions/get.php?sourceId=${id}`;
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
