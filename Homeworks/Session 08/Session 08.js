function bt1(params) {
  let n = prompt("Nhap day so tu nhien:");
  function reverse_num(n) {
    n = n.toString();
    return n.split("").reverse().join("");
  }
  function symmetrical_num(n) {
    let str = false;
    if (reverse_num(n) == n) str = true;
    return str;
  }

  let check = symmetrical_num(n);

  if (check == true) console.log(n + " la day so doi xung");
  else console.log(n + " khong phai la day so doi xung");
}
bt1();

function bt2(params) {
  const array = [
    [2, 3, 4],
    [2, 4, 6],
    [6, 4, 2],
  ];
  let k = parseInt(prompt("Nhap:"));
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === k) {
        num += 1;
      }
    }
  }
  console.log("So lan " + k + " xuat hien trong mang la: " + num);
}
bt2();

function bt3(params) {
  const array = [91, 451, 43, 3, 452, 54];
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);
  let k = prompt("Nhap so lon thu:");
  console.log("So lon thu " + k + " la: " + array[array.length - k]);
}
bt3();

function bt4(params) {
  let n = prompt("Nhap:");
  let sum = 0;
  for (let i = 0; i = n; i++) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  console.log("Tong cac chu so la: " + sum);
}
bt4()
