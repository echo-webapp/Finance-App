export const login: any = async (email: any, password: any) => {
  const url = `https://pikel-it.com/finapp/login.php`;
  fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: email,
      passWord: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data`1`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
