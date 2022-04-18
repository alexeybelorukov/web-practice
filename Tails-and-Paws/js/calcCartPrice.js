function calcCartPrice() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');

    const totalPrice = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    let priceTotal = 0;


    cartItems.forEach(function(item){
        
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');

    priceTotal += parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

})

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
        
    }

    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '199 ₽';
        priceTotal += parseInt(deliveryCost.innerText);
    }
    totalPrice.innerText = priceTotal;

}