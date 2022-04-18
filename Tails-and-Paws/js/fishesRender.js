const fishesProductsContainer = document.querySelector('#fishes-products');

getFishesProducts();

async function getFishesProducts() {
    const responce = await fetch('./js/fishesProducts.json');
    console.log(responce);

    const fishProductsArray = await responce.json();
    renderFishProducts(fishProductsArray);
}

function renderFishProducts(fishProductsArray) {
    fishProductsArray.forEach(function(item) {
        const fishProductsHTML = `<div class="product" data-id="${item.id}">
        <img class="product-img" src="./img/fishes/${item.imgSrc}" alt="">
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
    fishesProductsContainer.insertAdjacentHTML('beforeend', fishProductsHTML)
    })
}


console.log('smth from fishes')