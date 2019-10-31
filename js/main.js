let $container = $('.container');
let $input = $('input');
let $addBtn = $('#btnAdd');

// JQuery version
function createItem(){
    if ($input.val() === '') return;
    let $item = $(`
        <div id='skill-item'>
            <button id="btnDelete" class="btn btn-danger pull-left">
            X
            </button>
            <span id="skill-value">
            ${$input.val().toUpperCase()}
            </span>
        </div>
    `);
    $container.append($item);
    $input.val('');
    $input.focus();
}

function handleDelete(evt){
    $(this).closest('#skill-item').fadeOut(300, () => {
        $(this).closest("#skill-item").remove();
    });
}

$addBtn.on('click', createItem);
$container.on('click', 'button', handleDelete);