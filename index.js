
$(function () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const addItem = [];
    addItem.push($(
      `<li><span class="shopping-item">`+$(this).find(
        'input[name="shopping-list-entry"]').val()+`</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`));
    $(".shopping-list").append(addItem);
    $("#shopping-list-entry").val('').focus();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function () {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    ($(this).find('span').text()==='check')?$(this).find('span').text('uncheck'):$(this).find('span').text('check');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function () {
    $(this).closest('li').hide('');
  });


  
});