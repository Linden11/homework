const store = createStore(reducer);

const products = store.getState().products;
for (const id in products) {

    const option = document.createElement("option");
    option.innerHTML = products[id].title;
    option.value = id;
    productName.append(option);

    generalPrice.innerHTML = products[id].price;
}

const calculatePrice = () => {
    const id = productName.value;
    const amount = Number(chooseNumber.value);
    if (!!id && !!amount) {
        payment.innerHTML = `Ціна вашої покупки ${(products[id].price * amount)} грн`;
    }
}

chooseNumber.addEventListener('input', calculatePrice);
productName.addEventListener('change', calculatePrice);

btnSubmit.addEventListener('click', (event) => {
    btnSubmit.style.background = "linear-gradient(#d8f3ae, #7cb52a)";
    setTimeout(() => {
        btnSubmit.style.background = "";
      }, 200);

    event.preventDefault();
    store.dispatch({
        type: 'buy',
        product: productName.value,
        quantity: chooseNumber.value,
        cash: generalPrice.value
    });

});

function render() {
    title.innerHTML = "Вітрина";

    document.title = "В касі " + store.getState().money + " грн";

    const showcase = document.getElementById('showcase');
    const products = store.getState().products;

    showcase.innerHTML = '';

    for (const id in products) {

        const cardWrap = document.createElement("div");
        cardWrap.className = 'card';
        showcase.append(cardWrap);

        const imgWrap = document.createElement("div");
        imgWrap.className = 'productImage';
        cardWrap.append(imgWrap);

        const img = document.createElement("img");
        img.src = products[id].img;
        imgWrap.append(img);

        const descWrap = document.createElement("div");
        descWrap.className = 'productDescription';
        cardWrap.append(descWrap);

        const h2 = document.createElement("h2");
        h2.className = 'productName';
        h2.innerHTML = products[id].title;
        descWrap.append(h2);

        const priceWrap = document.createElement("p");
        priceId = id + '_price';
        priceWrap.className = 'productPrice';
        priceWrap.innerHTML = `Ціна: <span>${products[id].price}</span> грн за кг`
        descWrap.append(priceWrap);

        const quantityWrap = document.createElement("p");
        quantityId = id + '_quantity';
        quantityWrap.className = 'productQuantity';
        quantityWrap.innerHTML = `В наявності: <span id="${quantityId}">${products[id].quantity}</span> кг`
        descWrap.append(quantityWrap);
    }
}

store.subscribe(render);

render();
