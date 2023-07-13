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

        const fullName = person.surname + ' ' + person.name + ' ' + person.fatherName;
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
    const confirmed = (login, password) => {
        const enterLogin = prompt("Enter your login");
        const enterPassword = prompt("Enter your password");
        return login === enterLogin && password === enterPassword;
    }

    console.log(confirmed("admin", "qwerty"));

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
    const checkLexics = (str, [...forbidden]) => {
        const arr = str.split(" ");
        const result = arr.filter(arr => !forbidden.includes(arr));
        return result.join(" ");
    }

    const phrase = prompt("Enter phrase");
    console.log(checkLexics(phrase, ["блин", "оладь", "редиска"]));

}//Filter Lexics



{
    const arr = [];
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const { rates } = data;
            const currencies = Object.keys(rates);

            arr.push(['', ...currencies]);


            for (let i = 0; i < currencies.length; i++) {
                arr[i + 1] = [];
                arr[i + 1].push(currencies[i]);
                for (let j = 0; j < currencies.length; j++) {
                    let element = (1 / rates[currencies[i]] * rates[currencies[j]]).toFixed(2);
                    arr[i + 1].push(element);
                }
            }

            setOfArrays(arr);
        })

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

}//Currency Table



{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }

    const person = {
        name: 'Миколай',
        fatherName: 'Іванович',
        surname: 'Іванов',
        age: 15,
        married: true
    }

    const form = (obj) => {
        const keysNames = Object.keys(obj);

        let str = '<form style="width: 350px; height: 280px; border: 1px solid black; padding: 20px">'
        for (const keyName of keysNames) {
            str += `<label style="line-height: 40px">${keyName}`;

            str += `<input style="margin-right: 15px; ${typeof obj[keyName] !== "boolean" && 'width: 200px;'} border: 1px solid black; padding: 10px; float: right"`;
            if (typeof obj[keyName] === "number") {
                str += 'type="number" ';
                str += `value="${obj[keyName]}"`;
            }

            if (typeof obj[keyName] === "string") {
                str += 'type="text" ';
                str += `value="${obj[keyName]}"`;
            }

            if (typeof obj[keyName] === "boolean") {
                str += 'type="checkbox" ';
                if (obj[keyName] === true) {
                    str += `checked="${obj[keyName]}"`;
                }
            }
            str += '>';

            str += '</label><br/>';
        }
        str += "</form>";
        document.write(str);
    }

    form(car);
    form(person);

}//Form



{
    const sortObj = (arr, prop, asc) => {
        return arr.sort((a, b) => {
            if (asc === true || asc === undefined) {
                return a[prop] < b[prop] ? -1 : 1;
            }
            else {
                return a[prop] > b[prop] ? -1 : 1;
            }
        })
    }

    var persons = [
        { name: "Олексій", age: 73 },
        { name: "Яків", age: 12 },
        { name: "Марія", age: 35 },
        { name: "Іван", age: 17 },
    ]

    console.log(sortObj(persons, "age"));
    console.log(sortObj(persons, "name", false));

}//Array of objects sort



{
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Андрій',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
    ]

        const car = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
        },
        {
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 318,
            "Horsepower": 150,
            "Weight_in_lbs": 3436,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
        {
            "Name": "amc rebel sst",
            "Miles_per_Gallon": 16,
            "Cylinders": 8,
            "Displacement": 304,
            "Horsepower": 150,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
    ]

    const sortObj = (arr, prop, asc) => {
    
        arr.sort((a, b) => {
    if (asc === true || asc === undefined) {
      if (a[prop] === undefined) return 1;
      if (b[prop] === undefined) return -1;
      return a[prop] > b[prop] ? 1 : -1;
    } else {
      if (a[prop] === undefined) return -1;
      if (b[prop] === undefined) return 1;
      return a[prop] < b[prop] ? 1 : -1;
    }
  });
}

    const renderTable = (original, sortBy, isAsc) => {

        const arr = original.map(or => ({...or}));

        const keyArr = [];
        for (const obj of arr) {
            for (const keyName of Object.keys(obj)) {
                if (!keyArr.includes(keyName)) {
                    keyArr.push(keyName);
                }
            }
        }

        sortObj(arr, sortBy, isAsc);

        console.log(arr)

        let str = '<table style="border-collapse: collapse">';
        str += '<tr>';

        for (const keyName of keyArr) {
            str += `<th style="border: 1px solid black; padding: 10px; background-color: gray">${keyName}</th>`;
        }
        str += '</tr>';

        for (const obj of arr) {
            str += '<tr>';
            for (const keyName of keyArr) {
                if (obj[keyName] !== undefined) {
                    str += `<td style="border: 1px solid black; padding: 10px">${obj[keyName]}</td>`;
                }
                else {
                    str += '<td style="border: 1px solid black; padding: 10px"></td>';
                }
            }
            str += '</tr>';
        }

        str += "</table>";

        document.write(str);
    }

    renderTable(car, "Name", false);
    renderTable(persons, "name", true);
    renderTable(car, "Weight_in_lbs", true);
    renderTable(car, "Displacement", true);

}//Table



{
    const wayInMonth = (a, b, c, d) => {
        const wayInMorning = Number(a) + Number(c) + Number(b);
        console.log(wayInMorning);
        const wayInEvening = (a * 2) + (d * 2);
        console.log(wayInEvening);
        return (wayInMorning + wayInEvening) * 20;
    }

    const fromHomeToSchool = prompt('Enter distance from home to school in km');
    const fromHomeToShop = prompt('Enter distance from home to shop in km');
    const fromSchoolToShop = prompt('Enter distance from school to shop in km');
    const fromHomeToPark = prompt('Enter distance from home to park in km');

    console.log(wayInMonth(fromHomeToSchool, fromHomeToShop, fromSchoolToShop, fromHomeToPark));

}//Calc Func
