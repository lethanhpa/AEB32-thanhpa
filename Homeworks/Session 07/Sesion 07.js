function bt1(params) {
  let input = parseInt(prompt("Nhap n:"));

  if (input % 2 === 0) {
    console.log(input + " la so chan");
  } else {
    console.log(input + " la so le");
  }
}
bt1();

function bt2(params) {
  const n = parseInt(prompt("Nhap:"));
  let n1 = 0,
    n2 = 1,
    str;
  console.log("Day so fibonacci khong lon hon " + n + ":");
  for (let index = 1; index <= n; index++) {
    str = n1 + n2;
    n1 = n2;
    n2 = str;
    console.log(n2);
  }
}
bt2();

function bt3_tamgiacvuong(params) {
  let str = "";
  for (let index = 1; index <= 5; index++) {
    for (let star = 0; star < index; star++) {
      str += "*";
    }
    console.log(str);
  }
}
bt3_tamgiacvuong();

function bt3_tamgiaccan(h) {
  h = 5;
  let str = "";
  for (let index = 1; index <= 5; index++) {
    for (let star = 5; star > index; star--) {
      str += " ";
    }
    for (space = 1; space <= index * 2 - 1; space++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
bt3_tamgiaccan();
