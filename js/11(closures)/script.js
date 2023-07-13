{
    const makeProfileTimer = () => {
        const start = performance.now().toFixed();
        return function() {
            const end = performance.now().toFixed();
            return end - start;
        };
    }
    const timer = makeProfileTimer();
    alert('Вимiрюємо час роботи цього alert');
    alert(timer());
    const timer2 = makeProfileTimer();
    prompt('');
    alert(`Час роботи двух аlert та одного prompt ${timer()}`);
    alert(`Час роботи prompt та попереднього alert ${timer2()}`);
}//makeProfileTimer (1)



{
    const makeSaver = (func) => {
        let saved = 'start value';
        return function() {
            if (saved === 'start value') {
                saved = func();
            }
            return saved;
        }
    }
    let saver = makeSaver(Math.random) 
    let value1 = saver()
    let value2 = saver()
    alert(`Random: ${value1} === ${value2}`)

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)]
    })
    let value3 = saver2()
    let value4 = saver2()

    value3 === value4

    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)
}//makeSaver (2)



{
    const myBind = (func, context, params) => {
        return function () {
            const args = Array.from(arguments);
            const fullParams = [];
            for (let i = 0; i < params.length; i++) {
                fullParams[i] = params[i] ?? args.shift();
            }
            return func.apply(context, fullParams);
        }
    }

    let pow5 = myBind(Math.pow, Math, [, 5]);
    let cube = myBind(Math.pow, Math, [, 3]);

    console.log('pow5(2)', pow5(2)); // => 32
    console.log('pow5(4)', pow5(4)); // => 1024
    console.log('cube(3)', cube(3)); // => 27

    let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
    console.log('chessMin(-1, -5, 3, 15)', chessMin(-1, -5, 3, 15)); //результат -5

    let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    let someNumber = zeroPrompt("Введіть число");

    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f']); //('a','c','d') === 'abcdef'
    console.log("bindedJoiner('a', 'c', 'd') === 'abcdef')", bindedJoiner('a', 'c', 'd') === 'abcdef');
    console.log("bindedJoiner('1', '2', '3') === '1b23ef'", bindedJoiner('1', '2', '3') === '1b23ef');
}//myBind (3)



{
    function checkResult(original, validator) {
        function wrapper(...params) {
            let result = false;
            let originalResult;
            while (!result) {
                originalResult = original(...params);
                result = validator(originalResult);
            }
            return originalResult;
        }
        return wrapper
    }

    //numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x))
    let number = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

    //gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
    const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
    const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")

    //RandomHigh
    const RandomHigh = checkResult(Math.random, x => x >= 0.5 && x <= 1);
    const random = RandomHigh(Math.random);

    //AlwaysSayYes
    const AlwaysSayYes = checkResult(confirm, x => x === true);
    const sayYes = AlwaysSayYes("Скажи 'Так'");


    //respectMe
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
    
    const respectMe = checkResult(enterPerson, (person) => !!person.surname && !!person.name && !!person.fatherName && !!person.fullName);
    console.log(respectMe());

}//checkResult (4)
