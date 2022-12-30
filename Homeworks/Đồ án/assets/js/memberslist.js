const URL = "https://63a06bb524d74f9fe837bdf6.mockapi.io/memberslist";
getListUser()
function _renderUICard(listUser) {
  let elm = document.getElementById("div__content");

  function formatUICard(user) {
    return `
      <div class="p-5 col-4">
          <img
              src="${user.avatar}"
              ,
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h4 class="pt-3 card-title">${user.name}</h4>
              <h6 class="pt-3 card-text">City: ${user.city}</h6>
              <h6 class="pt-2 card-text">Birthday: <i>${user.birthday}</i></h6>
              <a class="btn btn-success mt-2" href="${user.infor}" role="button">More info</a>
              <button class="btn btn-danger mt-2 text-white" onclick="deleteUser(${user.id})">Delete</button>
              <button class="btn btn-info mt-2 text-white" onclick="handleEdit(${user.id})">Edit</button>
          </div>
      </div>
      `;
  }

  let resUI = "";
  for (let index = 0; index < listUser.length; index++) {
    resUI += formatUICard(listUser[index]);
  }
  elm.innerHTML = resUI;
}

function getListUser() {
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      _renderUICard(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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