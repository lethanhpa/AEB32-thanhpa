function vd1(params) {
    let user = {
        id: 1,
        name: "name 1",
        age: 30,
        address: "address 1",
      };
      let listUser = [
        {
          id: 1,
          name: "name 1",
          age: 30,
          address: "address 1",
        },
        {
          id: 2,
          name: "name 2",
          age: 30,
          address: "address 2",
        },
        {
          id: 3,
          name: "name 3",
          age: 30,
          address: "address 3",
        },
        {
          id: 4,
          name: "name 4",
          age: 34,
          address: "address 4",
        },
      ];
      
      let elmBodyTable = document.getElementById("tbody__user");
      let tempRowTable = "";
      
      function formatRowUser(user) {
        let _stringTr = `<tr>
                              <th scope="row">${user.id}</th>
                              <td>${user.name}</td>
                              <td>${user.age}</td>
                              <td>${user.address}</td>
                          </tr>`;
        return _stringTr;
      }
      
      listUser.map((user) => {
        tempRowTable += formatRowUser(user);
      });
      
      elmBodyTable.innerHTML = tempRowTable;
      console.log(elmBodyTable);
}

function vd2() {
    const LIST_USER_CARD = [
      {
        name: "Lionel Messi",
        avatar:
          "https://i1-thethao.vnecdn.net/2022/12/10/messi-3-jpeg-1670629980-167062-7567-4192-1670631569.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=YpSwgUv-qfNjVhuZCtq-yw",
        city: "Argentina",
        id: "30",
      },
      {
        name: "Kylian Mbappé",
        avatar:
          "https://cdn.tuoitre.vn/2021/10/4/kylian-mbappe-psge3e6vzs2lvc31w5knbdztfk6g-1633347536741456373861.jpeg",
        city: "France",
        id: "10",
      },
      {
        name: "Neymar JR",
        avatar:
          "https://media.vov.vn/sites/default/files/styles/large/public/2022-10/neymar.jpg",
        city: "Brasil",
        id: "11",
      },
      {
        name: "Cristiano Ronaldo",
        avatar:
          "https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/yqjvzdjwp/2022_12_11/ronaldo-world-cup-2022-4-579.jpeg",
        city: "Portugal",
        id: "7",
      },
      {
        name: "Erling Haaland",
        avatar:
          "https://i1-thethao.vnecdn.net/2022/11/10/erling-haaland-manchester-city-8554-7902-1668099322.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=--m2id2QcWaD0PfeU4EdRw",
        city: "United Kingdom",
        id: "49",
      },
      {
          name: "Antony",
          avatar:
            "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltce11832f34bdf210/635edb357abc121050615584/GettyImages-1437111935.jpg?quality=80&format=pjpg&auto=webp&width=1000",
          city: "Brasil",
          id: "49",
        },
    ];
  
    let elm = document.getElementById("div__content");
  
    function formatUICard(user) {
      return `
      <div class="card col-4">
          <img
              src="${user.avatar}"
              ,
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      `;
    }
    
    let resUI = "";
    for (let index = 0; index < LIST_USER_CARD.length; index++) {
      resUI += formatUICard(LIST_USER_CARD[index]);
    }
    elm.innerHTML = resUI;
  }
  
  vd2();
