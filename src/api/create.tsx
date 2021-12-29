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

export const create_CSV = async (data: any, id: any) => {
  const url = `https://pikel-it.com/finapp/csvs/create.php?sourceId=${id}`;
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
