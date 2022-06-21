window.addEventListener('load', function() {
    const productCardsAll = document.querySelectorAll('.productCard');
    const buyLinksAll = document.querySelectorAll('.buyLink');


    productCardsAll.forEach(item => {
        const ovalWeight = item.querySelector('.ovalWeight')
        const productHeader = item.querySelector('#productHeader');
        const fullCard = item.parentNode;
        const cardText = fullCard.querySelector('.cardText');
        
        item.addEventListener('mouseover', () => {
            if (item.classList.contains('blueCard')) {
                item.classList.add('productCardHover');
                item.classList.remove('blueCard');
                ovalWeight.classList.add('ovalWeightHover');
                ovalWeight.classList.remove('blueOvalWeight');
            }
        }, false);
        item.addEventListener('mouseout', () => {
            if (item.classList.contains('productCardHover')) {
                item.classList.add('blueCard');
                item.classList.remove('productCardHover');
                ovalWeight.classList.add('blueOvalWeight');
                ovalWeight.classList.remove('ovalWeightHover');
            }
        }, false);

        item.addEventListener('click', () => {

            if (item.classList.contains('choosenCard')) {
                productHeader.innerHTML = '<p class="cancelProductHeader">Котэ не одобряет?</p>';

                item.addEventListener('mouseover', () => {}, false);
                item.addEventListener('mouseout', () => {

                    item.classList.add('blueCard');
                    item.classList.remove('choosenCard');
                    ovalWeight.classList.add('blueOvalWeight');
                    ovalWeight.classList.remove('choosenOvalWeight');
                    productHeader.innerHTML = '<p class="productHeader">Сказочное заморское яство</p>';
                    cardText.innerHTML = '<p class="cardText">Чего сидишь? Порадуй котэ, <span class="buyLink">купи.</span></p>';

                }, false);
            } else if (item.classList.contains('productCardHover')) {

                item.addEventListener('mouseover', () => {}, false);
                item.addEventListener('mouseout', () => {
                
                    item.classList.add('choosenCard');
                    item.classList.remove('productCardHover');
                    ovalWeight.classList.add('choosenOvalWeight');
                    ovalWeight.classList.remove('ovalWeightHover');

                    if (fullCard.id == 1) {
                        cardText.innerHTML = '<p class="cardText">Печень утки разварная с артишоками.</p>';
                    } else if (fullCard.id == 2) {
                        cardText.innerHTML = '<p class="cardText">Головы щучьи с чесноком да свежайшая сёмгушка.</p>';
                    }  else if (fullCard.id == 3) {
                        cardText.innerHTML = '<p class="cardText">Филе из цыплят с трюфелями в бульоне.</p>';
                    }
                    
                
                }, false)
            }
        });

    });


    buyLinksAll.forEach(item => {
        const cardText = item.parentNode;
        const fullCard = cardText.parentNode;
        const productCard = fullCard.querySelector('.productCard');
        const ovalWeight = fullCard.querySelector('.ovalWeight');

        item.addEventListener('mouseover', () => {
            if (productCard.classList.contains('blueCard')) {
                productCard.classList.add('productCardHover');
                productCard.classList.remove('blueCard');
                ovalWeight.classList.add('ovalWeightHover');
                ovalWeight.classList.remove('blueOvalWeight');
            }
        }, false);
        item.addEventListener('mouseout', () => {
            if (productCard.classList.contains('productCardHover')) {
                productCard.classList.add('blueCard');
                productCard.classList.remove('productCardHover');
                ovalWeight.classList.add('blueOvalWeight');
                ovalWeight.classList.remove('ovalWeightHover');
            }
        }, false);

        item.addEventListener('click', () => {

            if (productCard.classList.contains('productCardHover')) {

                item.addEventListener('mouseover', () => {}, false);
                item.addEventListener('mouseout', () => {
                
                    productCard.classList.add('choosenCard');
                    productCard.classList.remove('productCardHover');
                    ovalWeight.classList.add('choosenOvalWeight');
                    ovalWeight.classList.remove('ovalWeightHover');

                    if (fullCard.id == 1) {
                        cardText.innerHTML = '<p class="cardText">Печень утки разварная с артишоками.</p>';
                    } else if (fullCard.id == 2) {
                        cardText.innerHTML = '<p class="cardText">Головы щучьи с чесноком да свежайшая сёмгушка.</p>';
                    }  else if (fullCard.id == 3) {
                        cardText.innerHTML = '<p class="cardText">Филе из цыплят с трюфелями в бульоне.</p>';
                    }
                    
                
                }, false);
            }
        });

    });
    



})
