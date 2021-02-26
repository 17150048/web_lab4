const products = {
  'old-skool': {
    title: 'Vans Old Skool',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '110',
    img: 'vans_old_school.jpg'
  },
  'era': {
    title: 'Vans Era',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '135',
    img: 'vans_era.jpg'
  },
  'authentic': {
    title: 'Vans Authentic',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.',
    price: '100',
    img: 'vans_authentic.jpg'
  },
};

const adresses = [
  "	Улица Сагита Агиша",
  "Садовая улица",
  "Сакмарская улица",
  "Улица Салавата",
  "Бульвар Салавата Юлаева",
  "Проспект Салавата Юлаева",
  "Улица Салтыкова-Щедрина",
  "Улица Саляма",
  "Самаркандская улица",
  "Сарапульская улица",
  "Саратовская улица",
  "Улица Сафроновская Пристань",
  "Сафроновский проезд",
  "Сахалинская улица",
  "Улица Саши Чекалина",
  "Саянская улица",
  "Улица Свердлова",
  "Светофорный переулок",
  "Улица Свидерского",
  "Свищевая улица",
  "Улица Свободы",
  "Улица Связи",
  "Севастопольская улица",
  "Северная улица",
  "Северодвинская улица",
  "Улица Седова",
  "Переулок Седова",
  "Селенгинская улица",
  "Сельская улица",
  "Сельская Богородская улица",
  "Семафорная улица",
  "Улица Семашко",
  "Сенная улица",
  "Улица Серафимовича",
  "Улица Сергея Вострецова",
  "Улица Сергея Чекмарева",
  "Улица Серебрянка",
  "Улица Серова",
  "Улица Сеченова",
  "Улица Сибирякова",
  "Силикатная улица",
  "Силикатная Малая улица",
  "Сипайловская улица",
  "Сквозная улица",
  "Улица Скворцова",
  "Переулок Скворцова",
  "Аллея Славы",
  "Бульвар Славы",
  "Слесарная улица",
  "Слободская улица",
  "Смоленская улица",
  "Смородиновая улица",
  "Улица Собинова",
  "Улица Советов",
  "Советская площадь",
  "Советская улица",
  "Улица Совхоз 9-я",
  "Совхозная улица",
  "Соединительное шоссе",
  "Солдатская улица",
  "Улица Солидарности",
  "Солнечная улица",
  "Соловьиная улица",
  "Сормовская улица",
  "Сосновская улица",
  "Сосновский переулок",
  "Улица Софьи Ковалевской",
  "Улица Софьи Перовской",
  "Сочинская улица",
  "Союзная улица",
  "Союзный переулок",
  "Улица Спартака",
  "Спортивная улица",
  "Ставропольская улица",
  "Стадионная улица",
  "Улица Станиславского",
  "Переулок Станиславского",
  "Станционная улица",
  "Старичная улица",
  "Староторфяная улица",
  "Улица Степана Злобина",
  "Улица Степана Кувыкина",
  "Улица Степана Разина",
  "Улица Степана",
  "Степная улица",
  "Стерлибашевская улица",
  "Стерлитамакская улица",
  "Столярная улица",
  "Стрелочная улица",
  "Строевая улица",
  "Улица Строителей 1-я",
  "Улица Строителей 2-я",
  "Улица Строителей 3-я",
]

for (item in products) {
  $('.catalog').append(
    `
    <div class="catalog__item">
        <div class="product">
          <img src="/assets/${products[item].img}" alt="" class="product__img">
          <h3 class="product__title">${products[item].title}</h3>
          <p class="product__descr">${products[item].descr}</p>
          <div class="product-footer">
            <span class="product-footer__price">${products[item].price}$</span>
            <button class="product-footer__submit ui-button" data-product="${item}">Купить</button>
          </div>
        </div>
      </div>
    `
  )
}



$('.form__color').checkboxradio(

);
$('.form__size').selectmenu();
$('.form__count').spinner({
  max: 15,
  min: 1,
});
$('#form__adress').autocomplete({
  source: adresses,
})
$("#form__datepicker").datepicker({
  dateFormat: "dd.mm.yy",
  minDate: new Date($('#hiddendelivdate').val()),
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  minDate: new Date()
});
$('#submit').button()


let selectedProcduct = null

$('.form').hide()

$('.product-footer__submit').button().click(function () {
  selectedProcduct = products[this.dataset.product]
  $('.form').show()
  $('.catalog').hide()
})



$('form').on('submit', function (e) {

  e.preventDefault();

  $('body').append(
    `
    <div id="dialog-confirm" title="Подтверждение покупки">
        <h3>Ваш заказ:</h3>
        <p>Наименование: ${selectedProcduct.title}</p>
        <p>Цвет: ${$('.form__color:checked').val()}</p>
        <p>Размер: ${$('.form__size').val()}</p>
        <p>Колличество: ${$('.form__count').val()}</p>
        <h3>Информация о доставке</h3>
        <p>Имя: ${$('#form__name').val()}</p>
        <p>Email: ${$('#form__email').val()}</p>
        <p>Адрес доставки: ${$('#form__adress').val()}</p>
        <p>Дата доставки: ${$('#form__datepicker').val()}</p>
        <h3>Итоговая сумма: ${+selectedProcduct.price * +($('.form__count').val())}$</h3>
      </div>
    `
  )

  $("#dialog-confirm").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Подтвердить": function () {
        $(this).dialog("close");
        $('.form').hide()
        $('.catalog').show()
      },
      "Отменить": function () {
        $(this).dialog("close");
      }
    }
  });
});