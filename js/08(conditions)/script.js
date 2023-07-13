{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            //a = 10, b = 20, c = 30, d = underfined

            b++
            a *= 10
        }
        {
            let c = 50
            //a = 100, b = 21, c = 50, d = underfined
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            //a = 100500, b = 521, c = underfined d = "value"
            {
                let a = -50
                b = 1000
                //a = -50, b = 1000, c = underfined, d = "value"
            }
            //a = 100500, b = 1000, c = underfined, d = "value"
        }
        //a = 100, b = 1000, c = underfined, d = underfined
    }
    //a = 100, b = underfined, c = underfined, d = underfined

}//blocks



{
    var age = prompt("Скільки вам років?");
    if (age < 0) {
        alert("не народився ще");
    }
    else {
        if (age > 0 && age < 18) {
            alert("школяр");
        }
        else {
            if (age > 18 && age < 30) {
                alert("молодь");
            }
            else {
                if (age > 30 && age < 45) {
                    alert("зрілість");
                }
                else {
                    if (age > 45 && age < 60) {
                        alert("захід сонця");
                    }
                    else {
                        if (age > 60) {
                            alert("як пенсія?");
                        }
                        else {
                            alert("чи кіборг, чи KERNESS");
                        }
                    }
                }
            }
        }
    }
}//comparison if



{
    let size = prompt("To convert to US sizes enter your size from 8 to 22");
    switch (size) {
        case "8":
            alert("Your size S")
            break;
        case "10":
        case "12":
            alert("Your size M")
            break;
        case "14":
        case "16":
            alert("Your size L")
            break;
        case "18":
        case "20":
            alert("Your size XL")
            break;
        case "22":
            alert("Your size XXL")
            break;
        default:
            alert("Check the correct entry")
    }

}//switch: sizes



{
    let color = prompt("Введіть колір", "");
    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }

}//switch: if



{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (key in cases) {
            return cases[key]();
        }
        else
            return cases[defaultKey]();
    }

    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })

}//noswitch



{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const { rates } = data;
            const div = document.createElement("div");
            document.body.append(div);
            for (const currency in rates) {
                const button = document.createElement("button");
                button.innerHTML = currency;
                button.style.margin = '5px';
                button.style.width = '50px';
                button.onclick = () => {
                    const question = confirm('You want to sel ' + currency + ' ?')
                    const sum = prompt('How much would you like to change?');
                    const result = question ? (sum / rates[currency]).toFixed(2) : (sum * rates[currency]).toFixed(2);
                    question ? alert('You will get ' + result + ' USD') : alert('You will get ' + result + ' ' + currency);
                }
                div.append(button);
            }
        })

}//closure calc
