{
    {
        function temperatureF(x) {
            return (x * 9 / 5 + 32);
        }

        const temperatureC = prompt("Enter temperature in degrees Celsius");
        console.log('The temperature in degrees Fahrenheit is ' + temperatureF(temperatureC));
    }//1



    {
        function enterColors(r, g, b) {
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
    }//2



    {
        function flats(f, a, d) {
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
    }//3



    {
        function enterPerson() {
            const person = {};

            const surname = prompt('Enter your surname');
            if (surname) person.surname = capitalizeName(surname);

            const name = prompt('Enter your name');
            if (name) person.name = capitalizeName(name);

            const fatherName = prompt('Enter your fathername');
            if (fatherName) person.fatherName = capitalizeName(fatherName);

            const fullName = getFullName(person.surname, person.name, person.fatherName);
            if (fullName) person.fullName = fullName;

            return person;
        }

        function capitalizeName(name) {
            return name[0].toUpperCase() + name.slice(1).toLowerCase();
        }

        function getFullName(surname, name, fatherName) {
            const fullName = `${surname} ${name} ${fatherName}`;
            return fullName;
        }

        const person = enterPerson();
        console.log(person);
    }//4



    {
        function text(str) {
            const arr = str.split('\\n');
            const newArr = arr.map(x => x.trim())
            const multiline = newArr.join('\n')
            return multiline;
        }

        const enterStr = prompt("Введіть багаторядковий текст. Для переносу на новий рядок використовуйте \\n");
        console.log(text(enterStr));
    }//5

}//Arrow to Functions (1)



{
    function createPerson(name, surname) {
        const person = {};

        person.name = name;
        person.surname = surname;
        person.getFullName = getFullName;

        function getFullName() {
            return `${person.name} ${person.fatherName || ""} ${person.surname}`
        }

        return person
    }

    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName());

    a.fatherName = 'Іванович';
    console.log(a.getFullName());

    console.log(b.getFullName());
}//createPerson (2)



{
    function createPersonClosure(name, surname) {
        let age;
        let fatherName;

        function getName() {
            return name;
        }

        function getSurname() {
            return surname;
        }

        function getFatherName() {
            return fatherName;
        }

        function getAge() {
            return age;
        }

        function getFullName() {
            return `${surname} ${name} ${fatherName}`;
        }

        function setName(newName) {
            if (typeof newName === "string" && newName[0].toUpperCase() === newName[0]) {
                name = newName;
            }
            return name;
        }


        function setSurname(newSurname) {
            if (typeof newSurname === "string" && newSurname[0].toUpperCase() === newSurname[0]) {
                surname = newSurname;
            }
            return surname;
        }

        function setFatherName(newFatherName) {
            if (typeof newFatherName === "string" && newFatherName[0].toUpperCase() === newFatherName[0]) {
                fatherName = newFatherName;
            }
            return fatherName;
        }

        function setAge(newAge) {
            if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
                age = newAge;
            }
            return age;
        }

        function setFullName(newFullName) {
            const arr = newFullName.split(' ');
            if (arr.length === 3) {
                surname = arr[0];
                name = arr[1];
                fatherName = arr[2];
            }
            return getFullName();
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        }
    }

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    console.log(a.setName("Маша"));
    console.log(a.setAge(15))
    console.log(a.setAge(150))

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName())

}//createPersonClosure (3)



{
    function createPerson(name, surname) {
        const person = {};

        person.name = name;
        person.surname = surname;
        person.getFullName = getFullName;

        function getFullName() {
            return `${person.name} ${person.fatherName || ""} ${person.surname}`
        }

        return person
    }

    function createPersonClosureDestruct(person) {
        let {name, surname} = person;

        let age = person.age || 0;
        let fatherName = person.fatherName || "";

        function getName() {
            return name;
        }

        function getSurname() {
            return surname;
        }

        function getFatherName() {
            return fatherName;
        }

        function getAge() {
            return age;
        }

        function getFullName() {
            return `${surname} ${name} ${fatherName}`;
        }

        function setName(newName) {
            if (typeof newName === "string" && newName[0].toUpperCase() === newName[0]) {
                name = newName;
            }
            return name;
        }


        function setSurname(newSurname) {
            if (typeof newSurname === "string" && newSurname[0].toUpperCase() === newSurname[0]) {
                surname = newSurname;
            }
            return surname;
        }

        function setFatherName(newFatherName) {
            if (typeof newFatherName === "string" && newFatherName[0].toUpperCase() === newFatherName[0]) {
                fatherName = newFatherName;
            }
            return fatherName;
        }

        function setAge(newAge) {
            if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
                age = newAge;
            }
            return age;
        }

        function setFullName(newFullName) {
            const arr = newFullName.split(' ');
            if (arr.length === 3) {
                surname = arr[0];
                name = arr[1];
                fatherName = arr[2];
            }
            return getFullName();
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        }
    }

const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
const b = createPersonClosureDestruct({name: 'Миколай', age: 75});

console.log(a.setName());
console.log(b.setName());
console.log(b.setAge());

}//createPersonClosureDestruct (4)



{

    function isSorted(...params) {
        const arr = [...params];

        
        for (let i = 0; i < arr.length - 1; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) || (isNaN(arr[i + 1])) || arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    console.log(isSorted(1, 2, 3, 4, 5));
    console.log(isSorted(1, 2, 3, 5, 4));
    console.log(isSorted(1, 2, 'a', 5, 4));
}//isSorted (5)



{ 
    function isSorted(params) {
        const arr = [...params];
        console.log(arr);

        for (let i = 0; i < arr.length - 1; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) || (isNaN(arr[i + 1])) || arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    const arrayFill = [];
    let element
    while (element !== null) {
        element = prompt('Добавь элемент');
        if (element !== null) {

            arrayFill.push(Number(element));
        }
    }

    console.log(isSorted(arrayFill));

}//Test isSorted (6)
