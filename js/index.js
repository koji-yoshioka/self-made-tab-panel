$(function () {
  $('.tab-item').on('click', (event) => {
    // クリックしたタブを活性にし、それ以外は非活性
    let target = $(event.currentTarget);
    target.removeClass('inActive');
    target.siblings().addClass('inActive');

    // クリックしたタブに紐づくbodyを特定
    targetId = target.find('.tab-item-link').attr('href').replace('#', '');

    let targetBodyItem = $('.tab-body-item' + '#' + targetId);
    targetBodyItem.removeClass('hidden');
    targetBodyItem.siblings().addClass('hidden');

  })
})
