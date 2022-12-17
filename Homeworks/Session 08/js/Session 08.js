function chan_le(params) {
  let input = prompt("Nhap n: ");

  if (input % 2 === 0) {
    console.log(input + " la so chan");
  } else {
    console.log(input + " la so le");
  }
}
chan_le();

function bt1(params) {
  let input = prompt("Nhap n: ");
  console.log(input * 2 + " la so gap doi so " + input);
}
bt1();

function bt2(params) {
  let NUMBER_MIN = prompt("Nhap so thu nhat: ");
  let b = prompt("Nhap so thu hai: ");
  let c = prompt("Nhap so thu ba: ");
  let d = prompt("Nhap so thu tu: ");

  if (parseInt(b) < parseInt(NUMBER_MIN)) NUMBER_MIN = b;
  if (c < NUMBER_MIN) NUMBER_MIN = c;
  if (d < NUMBER_MIN) NUMBER_MIN = d;
  console.log(NUMBER_MIN + " la so nho nhat");
}
bt2();

function bt3(params) {
  let input = prompt("Nhap n: ");
  console.log(parseInt((input - 1) / 2));
}
bt3();

function bt4(params) {
  let input = prompt("Nhap so co 2 chu so: ");
  console.log(parseInt(input / 10) + " la chu so hang chuc");
  console.log(parseInt(input % 10) + " la chu so hang don vi");
}
bt4();

function bt5(params) {
  let n = checkNT(prompt("Nhap n: "));
  function checkNT(number) {
    let isNT = true;

    for (let index = 2; index < number; index++) {
      if (number % index == 0) {
        isNT = false;
      }
    }
    return isNT;
  }
  console.log(n);
}
bt5();

function bt6(params) {
  let UCLN;
  let n = prompt("Nhap n:");
  let m = prompt("Nhap m:");
  for (let index = 1; index <= n && index <= m; index++) {
    if (n % index == 0 && m % index == 0) {
      UCLN = index;
    }
  }
  console.log(UCLN);
}
bt6();

function tamgiacvuong(params) {
  let str = "";
  for (let index = 1; index <= 5; index++) {
    for (let star = 0; star < index; star++) {
      str += "*";
    }
    console.log(str); //in ra *, vua duoc xuong dong
  }
}
tamgiacvuong();

function tamgiaccan(h) {
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
tamgiaccan();

function bt7(params) {
  let str = titleCase(prompt("Nhap:"));
  function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
    }
    return arr.join(" ");
  }
  console.log(str);
}
bt7();

function bt7_C2() {
  let str = prompt("Nhap");
  let res7 = "";
  let convertArray = str.split(" "); // ['dEar' , 'hAI']

  //index = 0 -> elm = 'dEar'
  convertArray.forEach((element) => {
    res7 += capitalizeFirstLetter(element) + " ";
  });
  console.log(res7.trim());
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}
bt7_C2();

function bt8(params) {
  let str = prompt("Nhap");
  let res8 = "";
  let convertArray = str.split(" ");
  convertArray.forEach((element) => {
    res8 += countCharacter(element) + " ";
  });
  console.log(str);
  console.log(res8.trim());
  function countCharacter(string) {
    return string.length;
  }
}
bt8();

function bt10(params) {
  let n = 5;
  let a = 2;
  let b = 3;

  if (2 * a >= b) {
    console.log(parseInt(n / 2) * b + (n % 2) * a);
  } else {
    console.log(n * a);
  }
}
bt10();
