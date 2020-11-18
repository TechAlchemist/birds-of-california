
const table = $('#checkListShow').DataTable();


$('#checkListShow tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#deleteBirdSubmit').click(function () {

    
    let table = $('#checkListShow').DataTable();
    let tableData  = table.rows().data();
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
    table.row('.selected').remove().draw( false );
    let listTitle = $('#icon_prefix').val();
    $.ajax({
        type: 'POST',
        data: JSON.stringify({'birdsIds': birdIds, 'listId' : $listId, 'listTitle' : listTitle}),
        contentType: 'application/json',
        url: '/checklist/update',						
        success: function(birdData) {
            
        }
    });
   

});

    // $('#checklistSubmit').click( function () {
    //     if (table.rows('.selected').data().length > 0) {
    //         populateChecklist(table.rows('.selected').data());
    //     }
    // } );

