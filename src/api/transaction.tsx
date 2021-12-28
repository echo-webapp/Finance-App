export const updateTransaction: any = async (data: any) => {
  const url = `https://pikel-it.com/finapp/transactions/update.php?recId=${data.ID}`;
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
