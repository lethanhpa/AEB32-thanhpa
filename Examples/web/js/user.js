const URL = "https://63a06bb524d74f9fe837bdf6.mockapi.io/users";
function methodGet(endpoint) {
  fetch(URL + endpoint, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
}

function postUser() {
  const data = {
    name: "Manhph",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
    city: "Lake Emmieworth",
  };
  fetch(URL + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}

// const methodGetAsync = async (endpoint) => {
//   try {
//     const res = await fetch(URL + endpoint, {
//       method: "GET",
//     });
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };
