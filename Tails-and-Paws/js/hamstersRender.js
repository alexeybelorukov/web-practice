const hamstersProductsContainer = document.querySelector('#hamsters-products');

getHamsterProducts();

async function getHamsterProducts() {
    const responce = await fetch('./js/hamstersProducts.json');
    console.log(responce);

    const hamsterProductsArray = await responce.json();
    renderHamsterProducts(hamsterProductsArray);
}

function renderHamsterProducts(hamsterProductsArray) {
    hamsterProductsArray.forEach(function(item) {
        const hamsterProductsHTML = `<div class="product" data-id="${item.id}">
        <img class="product-img" src="./img/hamsters/${item.imgSrc}" alt="">
        <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h4>
            <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

            <div class="details-wrapper">

                <!-- Счетчик-->
                <div class="items counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <!-- // Счетчик-->

                <div class="price">
                    <div class="price__weight">${item.weight} г.</div>
                    <div class="price__currency">${item.price} ₽</div>
                </div>
            </div>

            <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

        </div>
    </div>`
    hamstersProductsContainer.insertAdjacentHTML('beforeend', hamsterProductsHTML)
    })
}


console.log('smth from hamsters')