const speciesTable = $('#speciesTable').DataTable();

$('#speciesTable tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        speciesTable.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

const table = $('#checkListShow').DataTable({
    dom: 'Bfrtip',
    buttons: [
        'print', 'pdf'
    ]
});


$('#checkListShow tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#checklistSubmit').click(function () {
    let table = $('#speciesTable').DataTable();
    let birdData = table.rows('.selected').data();
    
    if (table.rows('.selected').data().length > 0) {
        for (let i = 0; i < birdData.length; i++) {
            $('#checkListShow').DataTable().row.add(birdData[i]).draw();
            $('#checkListShow').DataTable().unique();
        }
    }
});

$('#deleteBirdSubmit').click(function () {
    let table = $('#checkListShow').DataTable();
    let tableData = table.rows().data();
    let birdIds = {};
    $listId = $(this).val();
    let toDelete = table.rows('.selected').data();
    toDelete = toDelete[0][0];
    for (let i = 0; i < tableData.length; i++) {

        if (tableData[i][0] == toDelete) {
            continue;
        }
        else {
            birdIds[i] = tableData[i][0];
        }
    }
    table.row('.selected').remove().draw(false);
    let listTitle = $('#icon_prefix').val();
    $.ajax({
        type: 'POST',
        data: JSON.stringify({ 'birdsIds': birdIds, 'listId': $listId, 'listTitle': listTitle }),
        contentType: 'application/json',
        url: '/checklist/update',
        success: function (birdData) {
            location.reload();
        }
    });
});

$('#submitAddBirdBtn').click(function () {
    alert('I DID IT YEAH !')
    let table = $('#checkListShow').DataTable();
    let tableData = table.rows().data();
    let birdIds = {};
    let arr = [];
    $listId = $(this).val();
    // let toAdd = table.rows('.selected').data();
    
    for (let i = 0; i < tableData.length; i++) {
        birdIds[i] = tableData[i][0];
    }
    let listTitle = $('#icon_prefix').val();
    $.ajax({
        type: 'POST',
        data: JSON.stringify({ 'birdsIds': birdIds, 'listId': $listId, 'listTitle': listTitle }),
        contentType: 'application/json',
        url: '/checklist/update',
        success: function (birdIds) {
            location.reload();
        }
    });
});

function populateChecklist(birdData) {
    const table = $('#checkListShow').DataTable({});
    // table.column(0).visible(0);
    for (let i = 0; i < birdData.length; i++) {
        table.row.add(birdData[i]).draw();
    }
}