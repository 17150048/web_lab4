const products = {
  'old-skool': {
    title: 'Vans Old Skool',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '110$',
    img: 'vans_old_school.jpg'
  },
  'era': {
    title: 'Vans Era',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '135$',
    img: 'vans_era.jpg'
  },
  'authentic': {
    title: 'Vans Authentic',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '100$',
    img: 'vans_authentic.jpg'
  },
};

for (item in products) {
  $('.catalog').append(
    `
    <div class="catalog__item">
        <div class="product">
          <img src="/assets/${products[item].img}" alt="" class="product__img">
          <h3 class="product__title">${products[item].title}</h3>
          <p class="product__descr">${products[item].descr}</p>
          <div class="product-footer">
            <span class="product-footer__price">${products[item].price}</span>
            <button class="product-footer__submit ui-button" data-product="${item}">Купить</button>
          </div>
        </div>
      </div>
    `
  )
}

$('.form__color').checkboxradio();
$('.form__size').selectmenu();

let selectedProcduct = null

$('.product-footer__submit').button().click(function () {
  selectedProcduct = products[this.dataset.product]

})