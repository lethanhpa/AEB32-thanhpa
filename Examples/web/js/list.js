// function vd1(params) {
//     let user = {
//         id: 1,
//         name: "name 1",
//         age: 30,
//         address: "address 1",
//       };
//       let listUser = [
//         {
//           id: 1,
//           name: "name 1",
//           age: 30,
//           address: "address 1",
//         },
//         {
//           id: 2,
//           name: "name 2",
//           age: 30,
//           address: "address 2",
//         },
//         {
//           id: 3,
//           name: "name 3",
//           age: 30,
//           address: "address 3",
//         },
//         {
//           id: 4,
//           name: "name 4",
//           age: 34,
//           address: "address 4",
//         },
//       ];

//       let elmBodyTable = document.getElementById("tbody__user");
//       let tempRowTable = "";

//       function formatRowUser(user) {
//         let _stringTr = `<tr>
//                               <th scope="row">${user.id}</th>
//                               <td>${user.name}</td>
//                               <td>${user.age}</td>
//                               <td>${user.address}</td>
//                           </tr>`;
//         return _stringTr;
//       }

//       listUser.map((user) => {
//         tempRowTable += formatRowUser(user);
//       });

//       elmBodyTable.innerHTML = tempRowTable;
//       console.log(elmBodyTable);
// }

const URL = "https://63a06bb524d74f9fe837bdf6.mockapi.io/users";

getListUser();

// (users : Array<object>) => void
function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
      <td><button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button></td>
      <td><button class="btn btn-info" onclick="handleEdit(${user.id})">Edit</button></td>
      <td><button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button></td>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

function getListUser() {
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}

function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleEdit(userId) {
  console.log("handleEdit", userId);
  window.location.href = `./form.html?id=${userId}`;
}