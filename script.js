// JQUERY-1
$('.jquery-task-1__slider').on('input', function () {
  const sliderValue = Math.round($(this).val(), 10);

  $('.jquery-task-1__slider-values__item').each(function () {
    const dataValue = parseInt($(this).attr('data-value'));

    if (sliderValue === dataValue) {
      $(this).attr('data-active', 'true');
    } else {
      $(this).attr('data-active', 'false');
    }
  });
});

//JQUERY-2
let mapSize = Number($('.jquery-task-2 .slider').val());
let minSliderValue;
let maxSliderValue;

minSliderValue = $('.jquery-task-2 .slider').attr('min');
maxSliderValue = $('.jquery-task-2 .slider').attr('max');

let repairValue = Number($("input[name='repair']:checked").data('value'));
let tariffValue = Number($("input[name='tariff']:checked").data('value'));

function calcPrice() {
  const price = (tariffValue * mapSize) / repairValue;
  const formattedPrice = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  $('#price').val(`${formattedPrice} руб.`);
}
calcPrice();

$('.jquery-task-2 .slider').on('input', function () {
  mapSize = Number($(this).val());

  $('.jquery-task-2__calc__slider-tooltip').text(mapSize);
  calcPrice();
});

$('.jquery-task-2__calc__slider-tooltip').on('keypress', function (event) {
  let char = String.fromCharCode(event.which);

  if (event.which === 13) {
    event.preventDefault();
    $(this).blur();
  }

  if (!/[\d]/.test(char)) {
    event.preventDefault();
  }
});

$('.jquery-task-2__calc__slider-tooltip').on('blur', function () {
  let text = $(this).text().replace(/\D/g, '');
  mapSize = parseInt(text, 10);

  if (isNaN(mapSize) || mapSize < minSliderValue) {
    mapSize = minSliderValue;
  } else if (mapSize > maxSliderValue) {
    mapSize = maxSliderValue;
  }

  $('.jquery-task-2 .slider').val(mapSize).trigger('input');
  $(this).text(mapSize);
});

$("input[name='repair']").on('change', function () {
  repairValue = Number($(this).data('value'));
  calcPrice();
});

$("input[name='tariff']").on('change', function () {
  tariffValue = Number($(this).data('value'));
  calcPrice();
});

// TEXTAREA
const textareaPadding = 9;

const textarea = $('textarea')[0];
$('textarea').height(textarea.scrollHeight - textareaPadding);

$('textarea').on('input', function () {
  $(this).height('auto');
  $(this).height(this.scrollHeight - textareaPadding);
});
