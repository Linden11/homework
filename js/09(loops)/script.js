{
    while (!confirm('Идем гулять')) {
        alert('Ну идем')
    }
}//while confirm



{
    const arr = [];
    let element
    while (element !== null) {
        if (element = prompt('Добавь элемент')) {
            arr.push(element)
        }
    }
    console.log(arr)

}//array fill



{
    const arr = [];
    let element
    let i = 0;
    while (element !== null) {
        element = prompt('Добавь элемент');
        if (element !== null) {
            arr[i] = element;
        }
        i++
    }
    console.log(arr)

}//array fill nopush



{
    let i = 0;
    while (true) {
        const element = Math.random();
        if (element > 0.9) {
            break;
        }
        i++
    }
    alert(i)

}//infinite probability



{
    while (prompt('Идем гулять') === null) {
        ;
    }
}//empty loop



{
    const f = (n) => {
        let sum = 0;
        for (let i = 1; i <= n; i+=3) {
            sum += i;
        }
        return sum;
    }
    console.log(f(5));
    console.log(f(10));
    console.log(f(100));

}//progression sum



{
    const f = (n) => {
        let str = "";
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                str += '#';
            }
            else {
                str += '.';
            }
        }
        return str;
    }
    console.log(f(4));
    console.log(f(5));
    console.log(f(3));

}//chess one line



{
    let str = "";
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            str += i;
        }
        str += '\n'
    }
    console.log(str)

}//numbers



{
    const f = (a, b) => {
        let str = "";
        for (let j = 0; j < b; j++) {

            if (j % 2 === 0) {
                for (let i = 0; i < a; i++) {
                    if (i % 2 === 0) {
                        str += '#';
                    }
                    else {
                        str += '.';
                    }
                }
                str += '\n'
            }

            else {
                for (let i = 0; i < a; i++) {
                    if (i % 2 === 0) {
                        str += '.';
                    }
                    else {
                        str += '#';
                    }
                }
                str += '\n'
            }
        }
        return str;
    }

    console.log(f(12, 10));
    console.log(f(5, 4));
    console.log(f(7, 7));

}//chess



{
    const arr = [];
    let quan = prompt('Enter number of array elements');
    for (let i = 0; i < quan; i++) {
        let element = i ** 3;
        arr.push(element)
    }
    console.log(arr)

}//cubes



{
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            let element = j * i;
            arr[i].push(element)
        }
    }
    console.log(arr[5][6]);
    console.log(arr[7][8]);

}//multiply table



{
    const readArrayOfObjects = () => {
        const arr = [];
        let q;

        do {
            let keyName;
            let keyValue;
            let obj = {};

            while (keyName !== null && keyValue !== null) {
                keyName = prompt('Enter key');
                if (keyName !== null) {
                    keyValue = prompt('Enter value');
                    obj[keyName] = keyValue;
                }
            }

            console.log(obj);
            arr.push(obj);
        }
        while (confirm("let's continue") !== false);

        return arr
    }

    console.log(readArrayOfObjects())

}//read array of objects



{
    let f = (size) => {
        let str = "";

        for (let j = 0; j < size; j++) {
            let hash = Math.abs(Math.floor(size / 2) - j);

            for (let i = 0; i < hash; i++) {
                str += '.';
            }

            for (let i = 0; i < size - 2 * hash; i++) {
                str += '#';
            }

            for (let i = 0; i < hash; i++) {
                str += '.';
            }

            str += '\n';
        }
        return str
    }

    console.log(f(7));
    console.log(f(5));

}//Ромбік



{
    const arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            let element = j * i;
            if (element === 0) {
                element = ((j + 1) * (i + 1)) - 1;
            }
            arr[i].push(element)
        }
    }

    const table = document.createElement('table');
    document.body.append(table);

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        const tr = document.createElement('tr');
        table.append(tr);
        if (i % 2 !== 0) {
            tr.style.backgroundColor = '#f8f8f8';
        }

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const td = document.createElement('td');
            td.innerHTML = cell;
            tr.append(td);
            td.style.border = '1px solid black';
            td.style.padding = '10px';
        }
    }

}//DOM: multiply table



{
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            let element = j * i;
            if (element === 0) {
                element = ((j + 1) * (i + 1)) - 1;
            }
            arr[i].push(element)
        }
    }

    const table = document.createElement('table');
    document.body.append(table);

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        const tr = document.createElement('tr');
        table.append(tr);
        if (i % 2 !== 0) {
            tr.style.backgroundColor = 'gray';
        }

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const td = document.createElement('td');
            td.innerHTML = cell;
            tr.append(td);
            td.style.border = '1px solid black';
            td.style.padding = '10px';

            td.addEventListener(
                "mouseover",
                () =>
                    td.style.backgroundColor = "#59a8c6"
            );

            td.addEventListener(
                "mouseout",
                () =>
                    td.style.backgroundColor = ""
            );
        }
    }

}//DOM: highlight cell



{ 
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            let element = j * i;
            if (element === 0) {
                element = ((j + 1) * (i + 1)) - 1;
            }
            arr[i].push(element)
        }
    }

    const table = document.createElement('table');
    document.body.append(table);

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        const tr = document.createElement('tr');
        table.append(tr);
        if (i % 2 !== 0) {
            tr.style.backgroundColor = 'gray';
        }

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const td = document.createElement('td');
            td.innerHTML = cell;
            tr.append(td);
            td.style.border = '1px solid black';
            td.style.padding = '10px';

            td.addEventListener(
                "mouseover",
                () => {
                    tr.style.backgroundColor = "#59a8c6";

                    for (let k = 0; k < 10; k++) {
                        const cell = table.children[k].children[j];;
                        cell.style.backgroundColor = "#59a8c6";
                    }
                }
            );

            td.addEventListener(
                "mouseout",
                () => {
                    tr.style.backgroundColor = "";
                    if (i % 2 !== 0) {
                        tr.style.backgroundColor = 'gray';
                    }
                    else {
                        tr.style.backgroundColor = "";
                    }

                    for (let k = 0; k < 10; k++) {
                        const cell = table.children[k].children[j];
                        cell.style.backgroundColor = "";
                    }
                }
            );
        }
    }

}//DOM: Highlight cross
