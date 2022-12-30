const URL = "https://63a06bb524d74f9fe837bdf6.mockapi.io/product";
getListUser();
function _renderUICard(listUser) {
  let elm = document.getElementById("div__content");

  function formatUICard(item) {
    return `
      <div class="d-flex border order-3 p-2 mx-1 flex__05">
         <div class="px-4 align-self-center d-flex ">
          <img src="${item.avatar}" alt="" />
          <div>
            <div class="flex__05">
              <h4>${item.name}</h4>
              <p class="fw-light">${item.detail1}</p>
              <p class="fw-light">${item.detail2}</p>
              <p class="fw-light">${item.detail3}</p>
              <p class="fw-light">${item.detail4}</p>
            </div>
          </div>
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
  let urlDetail = new URLSearchParams(window.location.search);
  let isLogin = urlDetail.get("isLogin");

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
  window.location.href = "./form.html";
}