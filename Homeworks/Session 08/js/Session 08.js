function chan_le(params) {
    let input = prompt('Nhap n: ')

    if(input % 2 ===0) {
         console.log(input + ' la so chan')
    } else {
         console.log(input + ' la so le')
    }
}
chan_le()


function bt1(params) {
    let input = prompt('Nhap n: ')
    console.log(input*2 + ' la so gap doi so '+ input)
}
bt1()


function bt2(params) {
    let NUMBER_MIN = prompt('Nhap so thu nhat: ');
    let b = prompt('Nhap so thu hai: ');
    let c = prompt('Nhap so thu ba: ');
    let d = prompt('Nhap so thu tu: ');

    if(parseInt(b) < parseInt(NUMBER_MIN)) NUMBER_MIN = b
    if(c < NUMBER_MIN) NUMBER_MIN = c
    if(d < NUMBER_MIN) NUMBER_MIN = d
    console.log(NUMBER_MIN + ' la so nho nhat');
}
bt2()


function bt3(params) {
    let input = prompt('Nhap n: ')
    let a = (input - 1)/2;
    console.log(a);
}
bt3()


function bt4(params) {
    let input = prompt('Nhap so co 2 chu so: ');
    console.log(parseInt(input/10) + ' la chu so hang chuc');
    console.log(parseInt(input%10) + ' la chu so hang don vi');
}
bt4()