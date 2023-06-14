{var a = 5;  
var b, c;

b = (a * 5);  
b = c = (b/2);}


{var a = 5;  
var b, c;

b = (a * 5);  
b = (c = (b/2));
}//assign: evaluation



{let age = prompt ("enter age");
let year = (2023 - age);
alert (year);
}//Number: age



{let temC = prompt ("enter temperature in C");
let temF = temC * 9/5 + 32;
alert (temF);
}//Number: temperature


{let temf = prompt ("enter temperature in F");
let temc = (temf - 32) * 5/9;
alert (temc);
}//Number: temperature



{let a = prompt ("enter a");
let b = prompt ("enter b");
let c = Math.floor(a/b);
alert (c);
}//Number: divide



{const rate = 0.025;
let uah = prompt ("enter UAH");
let eur = (uah * rate).toFixed(2);
alert (eur);
}//Number: currency



{let red = prompt ("enter number from 16 to 255");
let r = Number(red).toString(16);
let green = prompt ("enter number from 16 to 255");
let g = Number(green).toString(16);
let blue = prompt ("enter number from 16 to 255");
let b = Number(blue).toString(16);
let color = "#" + r + g + b;
}//Number: RGB



{let numberFloor = prompt ("enter number of floors");
let numberDoorsOnFloor = prompt ("enter number of apartments");
let numberDoor = prompt ("enter number of door");
let doorsInEntrance = numberFloor * numberDoorsOnFloor;
let resultEntrance = Math.ceil(numberDoor / doorsInEntrance);
let resultApartment = Math.ceil((numberDoor % doorsInEntrance) / numberDoorsOnFloor);
alert ("number of the entrance: " + resultEntrance + ", number of the floor " + resultApartment);
}//Number: flats
