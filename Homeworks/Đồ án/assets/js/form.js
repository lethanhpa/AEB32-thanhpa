const URL_USER = "https://63a06bb524d74f9fe837bdf6.mockapi.io/memberslist";
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser()
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmName = document.getElementById("inputName");
      let elmCity = document.getElementById("inputCity");
      let elmAvatar = document.getElementById("inputAvatar");
      let elmBirthday = document.getElementById("inputBirthday");
      elmName.value = data.name;
      elmCity.value = data.city;
      elmAvatar.value = data.avatar;
      elmBirthday.value = data.birthday;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  let elmName = document.getElementById("inputName");
  let elmCity = document.getElementById("inputCity");
  let elmAvatar = document.getElementById("inputAvatar");
  let elmBirthday = document.getElementById("inputBirthday");

  let user = {
    name: elmName.value,
    city: elmCity.value,
    avatar: elmAvatar.value,
    birthday: elmBirthday.value,
  };
  if (id) {
    updateUser(user)
  }else{
    postUser(user);
  }
}

function postUser(user) {
  console.log('postUser');
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.onload = function () {
  loadHeader();
};

function loadHeader() {
  let elm = document.querySelector("header");
  if (elm) {
    fetch("./header.html", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        elm.innerHTML = data;
        handleShowBtn();
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function handleShowBtn() {
  // let urlDetail = new URLSearchParams(window.location.search);
  let isLogin = localStorage.getItem("islogin");

  let btnLogin = document.getElementById("btnLogin");
  let btnLogout = document.getElementById("btnLogout");

  if (isLogin) {
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
  } else {
    btnLogout?.classList.add("d-none");
    btnLogin?.classList.remove("d-none");
  }
}

function gotoForm() {
  window.location.href = "./login.html";
}