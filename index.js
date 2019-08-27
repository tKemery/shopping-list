$(function(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const userInput = $(this).find('input')
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${userInput.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    });
});

$('ul').on('click','.shopping-item-toggle', function(event){
    const theDiv = $(this).closest('div');
    theDiv.prev().toggleClass('shopping-item__checked');
});

$('ul').on('click','.shopping-item-delete', function(event){
    const theDiv = $(this).closest('div');
    const theLi = theDiv.parent();
    theLi.remove();
});
