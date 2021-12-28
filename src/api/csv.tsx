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
export const get_CSV = async (id: any) => {
  const url = `https://pikel-it.com/finapp/csvs/get.php?sourceId=${id}`;
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
export const delete_CSV = async (csv_id: any, source_Id: any) => {
  const url = `https://pikel-it.com/finapp/csvs/delete.php?csvID=${csv_id}&sourceId=${source_Id}`;
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
