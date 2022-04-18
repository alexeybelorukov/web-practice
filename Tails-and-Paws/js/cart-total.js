const cartWrapper = document.querySelector('.cart-wrapper');

const cartButton = document.querySelector('.cart-button');
cartButton.addEventListener('click', function() {
    const cartWindow = document.querySelector('.cart');
    cartWindow.classList.toggle('hidden-cart');
    calcCartPrice();
})

window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.product');
        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            currency: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {

            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item-top">
                <img class="cart-item-img" src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">

                <div class="cart-item-desc">
                    <h5>${productInfo.title}</h5>
                    <p>${productInfo.itemsInBox}</p>
                    <p>${productInfo.weight}</p>

                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.currency}</div>
                        </div>

                    </div>

                </div>

            </div>`;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('[data-counter]').innerText = '1';

        toggleCartStatus();
        calcCartPrice();
    }
})