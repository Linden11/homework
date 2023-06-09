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



{ }//Currency real rate



{ }//Currency drop down



{ }//Currency table



{ }//Form



{ }//Table
