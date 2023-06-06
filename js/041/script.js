let numberEexercise = prompt("Введите номер задания от 1 до 14");

if (numberEexercise === "1")
{let number = prompt ("Enter number");
if (isNaN(number)) {
    alert ("is not number")
}
if (number % 2) {
    alert ("odd number")
}
else {
    alert ("even number")
}
}//Number: odd

if (numberEexercise === "2")
{let text = prompt ("Введите текст");
text.indexOf("блин");
if (text.indexOf("блин") >= 0) {
    alert("это неприлично!")
}
}//String: lexics

if (numberEexercise === "3")
{let question = confirm("Is it a rainy day today?") ? "rainy day" : "no rain today";
let question2 = confirm("Is it a warm day today?") ? "warm day" : "cold day";
let rainy = question;
let warm = question2;
alert(question + ", " + question2);
}//Boolean

if (numberEexercise === "4")
{let question = confirm("Is it a rainy day today?");
if (question) {
    alert ("rainy day")
}
else {
    alert ("no rain today")
}

let question2 = confirm("Is it a warm day today?");
if (question2) {
    alert ("warm day")
}
else {
    alert ("cold day")
}
}//Boolean: if

if (numberEexercise === "5")
{let size = prompt ("To convert to US sizes enter your size from 8 to 22");
if (size === "8") {
    alert ("Your size S")
}
if (size === "10") {
    alert ("Your size M")
}
if (size === "12") {
    alert ("Your size M")
}
if (size === "14") {
    alert ("Your size L")
}
if (size === "16") {
    alert ("Your size L")
}
if (size === "18") {
    alert ("Your size XL")
}
if (size === "20") {
    alert ("Your size XL")
}
if (size === "22") {
    alert ("Your size XXL")
}
}//Comparison: sizes

if (numberEexercise === "6")
{let str = confirm("Ви чоловік?") ? "Ви чоловік" : "Ви жінка";
alert(str);
}//Ternary

if (numberEexercise === "7")
{let age = prompt ("Enter age") || alert ("Error");
let year = (2023 - age);
alert (year);}//Prompt: or

if (numberEexercise === "8")
{let str = confirm("шопінг?") || alert("ти - бяка");
}//Confirm: or this days

if (numberEexercise === "9")
{let str = confirm("шопінг?");
if (str === false) {
    alert("ти - бяка")
}
}//Confirm: if this days

if (numberEexercise === "10")
{let surname = prompt ("Enter your surname") || "Иванов";
let name = prompt ("Enter your name") || "Иван";
let fathername = prompt ("Enter your fathername") || "Иванович";
alert("Добрый день, " + surname + " " + name + " " + fathername);
}//Default: or

if (numberEexercise === "11")
{let surname = prompt ("Enter your surname");
if (surname === null || surname === "") {
    surname = "Иванов"
}
let name = prompt ("Enter your name");
if (name === null || name === "") {
    name = "Иван"
}
let fathername = prompt ("Enter your fathername");
if (fathername === null || fathername === "") {
    fathername = "Иванович"
}
alert("Добрый день, " + surname + " " + name + " " + fathername);
}//Default: if

if (numberEexercise === "12")
{let login = prompt("Enter your login");
if (login !== "admin") {
   alert("Error");
   }
else {
    let password = prompt("Enter your password");
    if (password !== "qwerty") {
        alert("Error");
    }
    else {
        alert("Congratulations!");
    }
}
}//Login and password

if (numberEexercise === "13")
{let answer = prompt("Яку валюту ви би хотіли купити/продати?(usd, eur, pln)").toLowerCase();
let toBuy = confirm("Ви хочете купити?");
let sum = prompt("Введіть сумму, яку ви хочете обміняти");
let rateUsd = 36.9;
let rateEur = 39.49;
let ratePln = 8.7;
let result;
if (answer === "usd") {
    toBuy ? result = (sum / rateUsd).toFixed(2) : result = (sum * rateUsd).toFixed(2);
}
if (answer === "eur") {
    toBuy ? result = (sum / rateEur).toFixed(2) : result = (sum * rateEur).toFixed(2);
}
if (answer === "pln") {
    toBuy ? result = (sum / ratePln).toFixed(2) : result = (sum * ratePln).toFixed(2);
}
alert(result);
}//Currency exchange

if (numberEexercise === "14")
{let yourOoption = prompt("Давай пограємо. Обери камінь, ножиці або папір. Потім оберу я").toLowerCase();
let myOption = Math.random() * 3;
let result
if (myOption <= 1) {
    result = "камінь";
    
}
if (myOption > 1 && myOption <= 2) {
    result = "ножиці";

}
if (myOption > 2) {
    result = "папір";
}
alert(result);

if (yourOoption === result) {
    alert("нічия")
}
if (yourOoption === "камінь" && result === "ножиці") {
    alert("Ти переміг")
}
if (yourOoption === "камінь" && result === "папір") {
    alert("Ти програв")
}

if (yourOoption === "ножиці" && result === "папір") {
    alert("Ти переміг")
}
if (yourOoption === "ножиці" && result === "камінь") {
    alert("Ти програв")
}

if (yourOoption === "папір" && result === "камінь") {
    alert("Ти переміг")
}
if (yourOoption === "папір" && result === "ножиці") {
    alert("Ти програв")
}
}//Scissors
