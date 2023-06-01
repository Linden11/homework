{let yourName = prompt ("Enter your name");
alert("Hi "+ yourName +"!")
}//greeting



{let str = prompt ("Enter text with commas");
let phrase = str.split(',');
console.log(phrase.join(", блін,"));
}//gopni4ek



{let str = prompt ("Enter phrase capital and small letters").toLowerCase();
let result = str[0].toUpperCase() + str.slice(1);
console.log(result);
}//capitalize



{let str = prompt ("Enter text");
let phrase = str.split(' ');
console.log(phrase.length);
}//word count



{let surname = prompt ("Enter your surname").trim().toLowerCase();
let name = prompt ("Enter your name").trim().toLowerCase();
let fathername = prompt ("Enter your fathername").trim().toLowerCase();
let resultSurname = surname[0].toUpperCase() + surname.slice(1);
let resultName = name[0].toUpperCase() + name.slice(1);
let resultFathername = fathername[0].toUpperCase() + fathername.slice(1);
let fullName = resultSurname + ' ' + resultName + ' ' + resultFathername;
alert(fullName);
}//credentials



{let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let l = str.length;
let a = str.indexOf("пиво");
let str2 = str.slice(0, a);
let str3 = str.slice(-l+a+4);
let result = str2 + "чай" + str3;
console.log(result);
}//beer



{let str = "якийсь текст, в якому є один тег <br /> та всяке інше";
let l = str.length;
let a = str.indexOf("<");
let b = str.indexOf(">");
let str2 = str.slice(0, a);
let str3 = str.slice(-l+b+2);
let result = str2 + str3;
console.log(result);
}//no tag


{let str = "якийсь текст, в якому є один тег <br /> та всяке інше";
let l = str.length;
let a = str.indexOf("<");
let b = str.indexOf(">");
let str2 = str.slice(0, a+1);
let str3 = str.slice(-l+b);
let str4 = str.slice(a+1, b).toUpperCase();
let result = str2 + str4 + str3;
console.log(result);
}//big tag



{let text = prompt("Введіть багаторядковий текст. Для переносу на новий рядок використовуйте \n");
let str = text.split('\\n');
let str2 = str.join('\n');
alert(str2);
}//new line



{let str = prompt("Enter text with Youtube link");
const reg = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
console.log(str.match(reg)[1]);
document.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${str.match(reg)[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
}//youtube
