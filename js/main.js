let $container = $('.container');
let $input = $('input');
let $addBtn = $('#btnAdd');

let storage = sessionStorage;

function init() {
    for (let i = storage.length; i >= 0; --i) {
        $container.append(storage[storage.key(i)]);
    }
}

init();

// JQuery version
function createItem() {
    let id = storage.length;
    if ($input.val() === '') return;
    let $item = $(`
        <div class="skill-item">
            <button id="${id}" class="btn btn-danger pull-left">
            X
            </button>
            <span id="skill-value">
            ${$input.val().toUpperCase()}
            </span>
        </div>
    `);
    storage.setItem(id, $item[0].outerHTML);
    $container.append($item);
    $input.val('');
    $input.focus();
}

function handleDelete(evt) {
    $(this).closest('.skill-item').fadeOut(300, () => {
        $(this).closest(".skill-item").remove();
        storage.removeItem($(this)[0].id);
    });
}
 
$addBtn.on('click', createItem);
$container.on('click', 'button', handleDelete);