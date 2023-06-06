{let w = confirm("Зараз тепло?");
let r = confirm("Зараз йде дощ?");
let wd = confirm("Сильний вітер?");
let wl = confirm("Підемо на прогулянку?");
const arr = [w, r, wd, wl];
}//Confirms



{const arr = [];
arr [0] = prompt("Який зараз рік?");
arr [1] = prompt("Який зараз місяць?");
arr [2] = prompt("Яке сьогодні число?");
arr [3] = prompt("Який зараз день тиждня?");
}//Prompts



{const arr = [];
arr [0] = prompt("Який зараз рік?");
arr [1] = prompt("Який зараз місяць?");
arr [2] = prompt("Яке сьогодні число?");
arr [3] = prompt("Який зараз день тиждня?");
let q = prompt("Введіть індекс від 0 до 3");
alert(arr[q]);
alert("Длина масиву дорівнює " + arr.length);
}//Item access



{const arr = [];
let q = prompt("Введіть номер елемента у масиві");
arr [q] = prompt("Введіть назву елемента у масиві");
}//Item change



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
alert(multiplication[3][4]);
alert(multiplication[1][2]);
alert(multiplication[0][3]);
}//Multiply table



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
const arr1 = multiplication [1].slice(-4);
const arr2 = multiplication [2].slice(-4);
const arr3 = multiplication [3].slice(-4);
const arr4 = multiplication [4].slice(-4);
const result = [arr1, arr2, arr3, arr4];
}//Multiply table slice



{const str = prompt("Введіть текст");
const result = str.split(" ");
const str2 = prompt("Введіть одне з тільки що написаних слів");
const word = result.indexOf(str2);
if ((word) === -1) {
    alert("Нема такого слова");
}
else {
    alert("Це слово під номером " + (word +1));
}
}//IndexOf Word



{const arr = [12, 8, 3];
const str = prompt("Введіть слово або число");
arr.push(str);
const str1 = prompt("Введіть слово або число");
arr.push(str1);
const str2 = prompt("Введіть слово або число");
arr.push(str2);
const str3 = prompt("Введіть слово або число");
arr.push(str3);
const str4 = prompt("Введіть слово або число");
arr.push(str4);
const arr2 = [];
let a = arr.pop()
arr2.push(a);
let b = arr.pop()
arr2.push(b);
let c = arr.pop()
arr2.push(c);
let d = arr.pop()
arr2.push(d);
let e = arr.pop()
arr2.push(e);
let f = arr.pop()
arr2.push(f);
let g = arr.pop()
arr2.push(g);
let h = arr.pop()
arr2.push(h);
alert (arr2);//Reverse
const arr3 = [];
let j = arr2.shift();
arr3.unshift(j);
let k = arr2.shift();
arr3.unshift(k);
let l = arr2.shift();
arr3.unshift(l);
let m = arr2.shift();
arr3.unshift(m);
let n = arr2.shift();
arr3.unshift(n);
let o = arr2.shift();
arr3.unshift(o);
let p = arr2.shift();
arr3.unshift(p);
let q = arr2.shift();
arr3.unshift(q);
alert(arr3);
}//Reverse 2



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
const copy = [...multiplication];
}//Copy



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
const arr1 = multiplication [0];
const arr2 = multiplication [1];
const arr3 = multiplication [2];
const arr4 = multiplication [3];
const arr5 = multiplication [4];
const copy = [[...arr1], [...arr2], [...arr3], [...arr4], [...arr5]];
}//Deep Copy



{const arr = [3, 5, 7];
const arr2 = arr;
arr2 === arr;
}//Array Equals



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
const arr1 = multiplication [0];
const arr2 = multiplication [1];
const arr3 = multiplication [2];
const arr4 = multiplication [3];
const arr5 = multiplication [4];
const copy = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];
}//Flat



{const str = prompt("Введіть текст");
let [a, , , , b, , , , c] = str;
alert(a + " " + b + " " + c);
}//Destruct



{const str = prompt("Введіть текст");
let [ , a, , b, c] = str;
if (a === " ") {
    a = "!";
}
if (b === " ") {
    b = "!";
}
if (c === " ") {
    c = "!";
}
alert(a + " " + b + " " + c);
}//Destruct default



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
let [zero, [zero1, ...remainder1], [zero2, ...remainder2], [zero3, ...remainder3], [zero4, ...remainder4]] = multiplication;
const result = [remainder1, remainder2, remainder3, remainder4];
}//Multiply table rest



{const names = ["John", "Paul", "George", "Ringo"];
for (const name of names) {
    alert(`${name}`);
}
}//For Alert



{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
for (const currency of currencies) {
    str += `<option>${currency}</option>`;
}
str += "</select>";
document.write(str);
}//For Select Option



{const names = ["John", "Paul", "George", "Ringo"];
let str = '<table style="border-collapse: collapse">';
str += "<tr>";
for (const name of names){
    str += `<td style="border: 1px solid black">${name}</td>`;
}
str += "</tr>";
str += "</table>";
document.write(str);
}//For Table Horizontal



{const names = ["John", "Paul", "George", "Ringo"];
let str = '<table style="border-collapse: collapse">';
for (const name of names){
    str += `<tr><td style="border: 1px solid black">${name}</td></tr>`;
}
str += "</table>";
document.write(str);
}//For Table Vertical



{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = '<table style="border-collapse: collapse">';
for (const currency of currencies){
    str += "<tr>";
    console.log(currency);
    for (const letter of currency){
        str += `<td style="border: 1px solid black; padding: 10px">${letter}</td>`;
        console.log(letter);
    }
    str += "</tr>";
}
str += "</table>";
document.write(str);
}//For Table Letters



{const multiplication = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
let str = '<table style="border-collapse: collapse">';
let i = 0;

for (const multiply of multiplication) {
    str += '<tr';
    str += (i % 2 === 0) ? ' style="background-color: gray"' : ' style="background-color: white"';
    str += '>';
    
    console.log(multiply);
    for (const number of multiply) {
        str += `<td style="border: 1px solid black; padding: 10px">${number}</td>`;
        console.log(number);
    }
    str += '</tr>';
    i++
}

str += "</table>";
document.write(str);
}//For Multiply Table



{let str = prompt ("Enter phrase capital and small letters");
const capitalize = str => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
}
console.log(capitalize(str));
}//Function Capitalize



{let str = prompt ("Enter phrase capital and small letters").split(" ");
const f = str.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase());
alert(f.join(" "));
}//Map Capitalize



{let str = prompt ("Enter phrase capital and small letters").split(" ");
let forbidden = ["блин", "оладь", "редиска"];
const result = str.filter(str => !forbidden.includes(str));
alert(result.join(" "));
}//Filter Lexics



{let str = prompt ("Enter phrase capital and small letters").split(" ");
let forbidden = ["блин", "оладь", "редиска"];
const result = str.map(str => !forbidden.includes(str) ? str : "BEEP");
alert(result.join(" "));
}//Beep Lexics



{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
str += "</select>";
document.write(str);
}//Reduce HTML
