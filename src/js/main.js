import './lib/lib';

// $('div').on('click', sayHello);
// $('div').off('click', sayHello);
// $('div').click(sayHello);
$('.active').show();
$('button').on('click', function() {
    $('div').eq(0).toggleClass('active');
})

$('div').click(function() {
    console.log($(this).index());
})

// console.log($('div').eq(2).find('.some'))
// console.log($('.some').closest('.findmeq').addClass('wewe'))
console.log($('.more').eq(0).siblings())
$('button').fadeIn(1000);

$('button').on('click', function() {
    $('button').fadeOut(1000);
})