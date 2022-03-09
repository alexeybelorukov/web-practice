const catsProductsContainer = document.querySelector('#cats-products');

getCatsProducts();

async function getCatsProducts() {
    const responce = await fetch('./js/catsProducts.json');
    console.log(responce);

    const catProductsArray = await responce.json();
    renderCatProducts(catProductsArray);
}

function renderCatProducts(catProductsArray) {
    catProductsArray.forEach(function(item) {
        const catProductsHTML = `<div class="product" data-id="${item.id}">
        <img class="product-img" src="./img/cats/${item.imgSrc}" alt="">
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
    catsProductsContainer.insertAdjacentHTML('beforeend', catProductsHTML)
    })
}


console.log('smth from cats')