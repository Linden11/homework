{
    const table = {
        width: 800,
        height: 750,
        length: 1200
    }
    console.log(table);

    const apartment = {
        room: 4,
        square: 120,
        price: 150000
    }
    console.log(apartment);

    const guitar = {
        color: 'brown',
        numberOfStrings: 7,
        type: 'acoustics'
    }
    console.log(guitar);

}//Literals



{
    const table = {
        width: 800,
        height: 750,
        length: 1200,
        [prompt('Введіть властивість стола')]: prompt('Введіть значення'),
        [prompt('Введіть ще одну властивість стола')]: prompt('Введіть її значення')
    }

    console.log(table);

}//Literals expand



{
    const table = {
        width: 800,
        height: 750,
        length: 1200,
        [prompt('Введіть властивість стола')]: prompt('Введіть значення'),
        [prompt('Введіть ще одну властивість стола')]: prompt('Введіть її значення')
    }
    const keyName = prompt('Введіть властивість');
    const obj = {
        [keyName]: keyName,
        ...table
    }

    console.log(obj);

}//Literals copy



{
    var body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },

                    {
                        tagName: 'br'
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },

            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: ['OK']
                    },

                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }

    console.log(body.children[1].children[1].children[0]);
    console.log(body.children[0].children[3].attrs.id);

    body.children[0].parent = body
    body.children[1].parent = body

    body.children[0].children[0].parent = div
    body.children[0].children[1].parent = div
    body.children[0].children[2].parent = div
    body.children[0].children[3].parent = div

    body.children[1].children[0].parent = div
    body.children[1].children[1].parent = div

    body.children[0].children[0].children[0].parent = span
    body.children[1].children[0].children[0].parent = button
    body.children[1].children[1].children[0].parent = button

}//Html tree + Parent



{
    const keyName = prompt('Введіть будь який ключ');
    const meaning = prompt('Введіть значення');

    var body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },

                    {
                        tagName: 'br'
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },

            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok',
                            [keyName]: meaning,
                        },
                        children: ['OK']
                    },

                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }

    console.log(body.children[1].children[0].attrs);

}//Change OK



{
    var body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },

                    {
                        tagName: 'br'
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },

                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },

            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: ['OK']
                    },

                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }

    const { children: [{ children: [{ children: [str] }] }] } = body;
    console.log(str);

    const { children: [, { children: [{ children: [str1] }] }] } = body;
    console.log(str1);

    const { children: [{ children: [, , , { attrs: { id: str2 } }] }] } = body;
    console.log(str2);

}//Destructure



{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    const [odd1, odd2, odd3] = arr.filter(x => x % 2);
    const [even1, even2] = arr.filter(x => x % 2 === 0);
    let str = arr.filter(x => typeof x !== 'number');
    console.log(even1);
    console.log(even2);
    console.log(odd1);
    console.log(odd2);
    console.log(odd3);
    console.log(str);

}//Destruct array



{
    let arr = [1, "abc"];
    const [number] = arr.filter(x => typeof x === 'number');
    const [[s1, s2, s3]] = arr.filter(x => typeof x !== 'number');
    console.log(number);
    console.log(s1);
    console.log(s2);
    console.log(s3);

}//Destruct string



{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }
    const { children: [{ name: name1 }, { name: name2 }] } = obj;
    console.log(name1);
    console.log(name2);

}//Destruct 2



{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];
    const { [0]: a, [1]: b, length } = arr;
    console.log(a);
    console.log(b);
    console.log(length);

}//Destruct 3



{
    const keyName = prompt('Введіть властивість');
    const table = {
        width: 800,
        height: 750,
        length: 1200,
        [keyName]: keyName,
    }
    const { [keyName]: k, ...newTable } = table;
    console.log(newTable);

}//Copy delete



{ 
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
            .then(data => {
                const currencyToExchange = prompt('Enter currency for exchange').toUpperCase();
                const currencyAfterExchange = prompt('What currency do you want to receive?').toUpperCase();
                const amountToExchange = prompt('Enter amount to exchange');
                const { rates } = data;
                const result = rates[currencyToExchange] && rates[currencyAfterExchange]
                    ? Number(amountToExchange) / rates[currencyToExchange] * rates[currencyAfterExchange]
                    : "You entered the name of the currency incorrectly";
                console.log('data', data);
                alert(result);
            })

}//Currency real rate



{ 
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        const { rates } = data;
        const currencies = Object.keys(rates);

        let str = "<select>";
        for (const currency of currencies) {
            str += `<option>${currency}</option>`;
        }
        str += "</select>";
        document.write(str);
       
        console.log('data', data);
        alert(result);
    })

}//Currency drop down



{ 
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
            .then(data => {
                const { rates } = data;
                const currencies = Object.keys(rates);

                let str = '<table style="border-collapse: collapse">';

                str += '<tr><th style="border: 1px solid black; padding: 10px; font-weight: 700; background-color: gray"></>';

                for (const currency of currencies) {
                    str += `<th style="border: 1px solid black; padding: 10px; background-color: gray">${currency}</th>`;
                }
                str += '</tr>';

                for (const curr1 of currencies) {
                    str += `<tr><td style="border: 1px solid black; padding: 10px; font-weight: 700">${curr1}</td>`;
                    for (const curr2 of currencies) {
                        str += `<td style="border: 1px solid black; padding: 10px">${(1 / rates[curr1] * rates[curr2]).toFixed(2)}</td>`
                    }
                    str += '</tr>';
                }

                str += "</table>";

                document.write(str);

            })

}//Currency table



{ 
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
    }

    const keysNames = Object.keys(car);

    let str = '<form style="width: 350px; height: 280px; border: 1px solid black; padding: 20px">'
    for (const keyName of keysNames) {
        str += `<label style="line-height: 40px">${keyName}`;

            str += `<input style="margin-right: 15px; ${typeof car[keyName] !== "boolean" && 'width: 200px;'} border: 1px solid black; padding: 10px; float: right"`;
            if (typeof car[keyName] === "number") {
                str += 'type="number" ';
                str += `value="${car[keyName]}"`;
            }

            if (typeof car[keyName] === "string") {
                str += 'type="text" ';
                str += `value="${car[keyName]}"`;
            }

            if (typeof car[keyName] === "boolean") {
                str += 'type="checkbox" ';
                if (car[keyName] === true) {
                str += `checked="${car[keyName]}"`;
                }
            }
            str += '>';

        str += '</label><br/>';
    }
    str += "</form>";
    document.write(str);

}//Form



{ 
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
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

    const keyArr = [];
    for (const person of persons) {
        for (const keyName of Object.keys(person)) {
            if (!keyArr.includes(keyName)) {
                keyArr.push(keyName);
            }
        }

    }

    let str = '<table style="border-collapse: collapse">';
    str += '<tr>';

    for (const keyName of keyArr) {
        str += `<th style="border: 1px solid black; padding: 10px; background-color: gray">${keyName}</th>`;
    }
    str += '</tr>';

    for (const person of persons) {
        str += '<tr>';
        for (const keyName of keyArr) {
            if (person[keyName] !== undefined) {
                str += `<td style="border: 1px solid black; padding: 10px">${person[keyName]}</td>`;
            }
            else {
                str += '<td style="border: 1px solid black; padding: 10px"></td>';
            }
        }
        str += '</tr>';
    }

    str += "</table>";

    document.write(str);

}//Table
