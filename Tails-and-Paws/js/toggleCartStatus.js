function toggleCartStatus() {
    

    const cartWrapper = document.querySelector('.cart-wrapper');
    const emptyPrice = document.querySelector('.total-price');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    
    if (cartWrapper.children.length > 0) {
        console.log('В корзине есть позиции');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        console.log('Empty');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
        emptyPrice.innerText = 0;

    }


}
