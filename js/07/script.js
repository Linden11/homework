{
    const temperatureF = x => x * 9 / 5 + 32;

    const temperatureC = prompt("Enter temperature in degrees Celsius");
    console.log('The temperature in degrees Fahrenheit is ' + temperatureF(temperatureC));

}//Temperature



{
    const enterColors = (r, g, b) => {
        r = r < 16 ? '0' + Number(r).toString(16) : Number(r).toString(16);
        g = g < 16 ? '0' + Number(g).toString(16) : Number(g).toString(16);
        b = b < 16 ? '0' + Number(b).toString(16) : Number(b).toString(16);
        const color = '#' + r + g + b;
        return color
    }

    const red = prompt("Enter the red value from 0 to 255");
    const green = prompt("Enter the green value from 0 to 255");
    const blue = prompt("Enter the blue value from 0 to 255");
    const color = enterColors(red, green, blue);

    console.log('You received a color in the format RGB ' + color);

}//RGB



{
    const flats = (f, a, d) => {
        const doorsInEntrance = f * a;
        const entrance = Math.ceil(d / doorsInEntrance);

        let remainder = d % doorsInEntrance;
        remainder = remainder === 0 ? (f * a) - 1 : remainder;

        const floor = Math.ceil(remainder / a);
        return { entrance, floor };

    }

    const numberFloorInEntrance = prompt("Enter the number of floors in the entrance");
    const numberApartmentsPerFloor = prompt("Enter the number of apartments per floor");
    const numberDoor = prompt("Enter apartment number");

    const result = flats(numberFloorInEntrance, numberApartmentsPerFloor, numberDoor);
    const entrance = result.entrance;
    const floor = result.floor;

    console.log('The apartment you need is located at the entrance number ' + entrance);
    console.log('The apartment you need is on the floor number ' + floor);

}//Flats



{
    const enterPerson = () => {
        const person = {};
        const surname = prompt('Enter your surname');
        if (surname) person.surname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();

        const name = prompt('Enter your name');
        if (name) person.name = name[0].toUpperCase() + name.slice(1).toLowerCase();

        const fathername = prompt('Enter your fathername');
        if (fathername) person.fatherName = fathername[0].toUpperCase() + fathername.slice(1).toLowerCase();

        const fullName = surname + ' ' + name + ' ' + fathername;
        if (fullName) person.fullName = fullName;

        return person;
    }

    const person = enterPerson();
    console.log(person);

}//Credentials



{
    const text = (str) => {
        const arr = str.split('\\n');
        const newArr = arr.map(x => x.trim())
        const multiline = newArr.join('\n')
        return multiline;
    }

    const enterStr = prompt("Введіть багаторядковий текст. Для переносу на новий рядок використовуйте \\n");
    console.log(text(enterStr));

}//New line



{
    const enterText = text => alert(text);

    const str = prompt("Enter text") || "You didn't enter anything";
    console.log(enterText(str));

}//Prompt OR



{
    const confirmed = () => {
        const login = prompt("Enter your login");
        const password = prompt("Enter your password");
        if (login === "admin" && password === "qwerty") {
            return true;
        }
        else {
            return false;
        }
    }

    console.log(confirmed());

}//Login And Password



{
    const setOfArrays = (multiplication) => {
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
        return document.write(str);
    }

    const arr = JSON.parse(prompt('Enter array with arrays'));
    console.log(setOfArrays(arr));

}//For Table



{
    const checkLexics = (str) => {
        const forbidden = ["блин", "оладь", "редиска"];
        const arr = str.split(" ");
        const result = arr.filter(arr => !forbidden.includes(arr));
        return result.join(" ");
    }

    const phrase = prompt("Enter phrase");
    console.log(checkLexics(phrase));

}//Filter Lexics



{ }//Currency Table



{ }//Form



{ 
    const sortObj = (arr, prop, asc) => {
    return arr.sort((a, b) => {
        if (asc === true || asc === undefined ) {
            return a[prop] < b[prop] ? -1 : 1;
        }
        else {
            return a[prop] > b[prop] ? -1 : 1;
        }
    })
}

    var persons = [
        {name: "Олексій", age: 73},
        {name: "Яків", age: 12},
        {name: "Марія", age: 35},
        {name: "Іван", age: 17},
    ]

    console.log(sortObj(persons, "age"));
    console.log(sortObj(persons, "name", false));

}//Array of objects sort



{ }//Table



{ 
    const wayInMonth = (a, b, c, d) => {
        const wayInMorning = Number(a) + Number(c) + Number(b);
        console.log(wayInMorning);
        const wayInEvening = (a * 2) + (d * 2);
        console.log(wayInEvening);
        return (wayInMorning + wayInEvening) * 20;
    }

    const fromHomeToSchool = prompt ('Enter distance from home to school in km');
    const fromHomeToShop = prompt ('Enter distance from home to shop in km');
    const fromSchoolToShop = prompt ('Enter distance from school to shop in km');
    const fromHomeToPark = prompt ('Enter distance from home to park in km');
    
    console.log(wayInMonth(fromHomeToSchool, fromHomeToShop, fromSchoolToShop, fromHomeToPark));

}//Calc Func
