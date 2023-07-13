const initialStore = {
    products: {
        apple_red: {
            title: 'Яблуко червоне',
            price: 20,
            quantity: 100,
            img: "images/apple.jpg"
        },
        apples_green: {
            title: 'Яблуко зелене',
            price: 30,
            quantity: 100,
            img: "images/apples_green.jpg"
        },
        apricot: {
            title: 'Абрикос',
            price: 60,
            quantity: 100,
            img: "images/apricot.jpg"
        },
        blackberry: {
            title: 'Ожина',
            price: 100,
            quantity: 100,
            img: "images/blackberry.jpg"
        },
        blueberry: {
            title: 'Лохина',
            price: 300,
            quantity: 100,
            img: "images/blueberry.jpg"
        },
        cherries: {
            title: 'Черешня',
            price: 90,
            quantity: 100,
            img: "images/cherries.jpg"
        },
        dark_grapes: {
            title: 'Темний виноград',
            price: 75,
            quantity: 100,
            img: "images/dark_grapes.jpg"
        },
        light_grapes: {
            title: 'Світлий виноград',
            price: 70,
            quantity: 100,
            img: "images/light_grapes.jpg"
        },
        melon: {
            title: 'Диня',
            price: 25,
            quantity: 100,
            img: "images/melon.jpg"
        },
        nectarine: {
            title: 'Нектарин',
            price: 55,
            quantity: 100,
            img: "images/nectarine.jpg"
        },
        peaches: {
            title: 'Персик',
            price: 50,
            quantity: 100,
            img: "images/peaches.jpg"
        },
        pears: {
            title: 'Груша',
            price: 35,
            quantity: 100,
            img: "images/pears.jpg"
        },
        raspberries: {
            title: 'Малина',
            price: 95,
            quantity: 100,
            img: "images/raspberries.jpg"
        },
        strawberry: {
            title: 'Полуниця',
            price: 85,
            quantity: 100,
            img: "images/strawberry.jpg"
        },
        watermelon: {
            title: 'Арбуз',
            price: 10,
            quantity: 100,
            img: "images/watermelon.jpg"
        }
    },
    money: 0,
}

function reducer(state, { type, product, quantity, cash }) { //об'єкт action деструктуризується на 4 змінні
    if (!state) { //початкове прибирання в кіоску:
        return initialStore;
    }
    if (type === 'buy') { //якщо тип action - КУПИТИ, то:
        if (quantity > state.products[product].quantity) {
            alert('Недостатньо товару');
            return { ...state, products: { ...state.products } }
        }
        if (cash < state.products[product].price * quantity) {
            alert('Недостатньо грошей');
            return { ...state, products: { ...state.products } }
        }
        return {
            ...state, //беремо все що було з асортименту
            money: Number(state.money) + Number(cash),
            products: {
                ...state.products,
                [product]: {
                    ...state.products[product],
                    quantity: state.products[product].quantity - Number(quantity)
                }
            }
        }
    }
    return state //якщо ми не зрозуміли, що від нас просять в `action` - залишаємо все як є
}