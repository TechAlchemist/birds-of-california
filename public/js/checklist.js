$('#postData').on('click', postChecklistData);
$('#builtCollectionContainer').css('display', 'none');

$(document).ready(function() {
    const table = $('#speciesTable').DataTable();
    // Hide first row of bird ids. 
    table.column(0).visible(false);

    $('#speciesTable tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
 
    $('#checklistSubmit').click( function () {
        if (table.rows('.selected').data().length > 0) {
            populateChecklist(table.rows('.selected').data());
        }
    } );

} );

function populateChecklist(birdData) {
    $('#builtCollection').css('display', 'table');
    $('#builtCollectionContainer').css('display', 'block');
    const table = $('#builtCollection').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'print', 'pdf'
        ]
    });
    // table.column(0).visible(0);
    for (let i = 0; i < birdData.length; i++) {
        table.row.add(birdData[i]).draw();
    }
}

function postChecklistData() {
    const table = $('#builtCollection').DataTable();
    let birdData = {};
    let tableData  = table.rows().data();
    for (let i = 0; i < tableData.length; i++) {
        // pull only bird ids
        birdData[i] = tableData[i][0];   
    }
    console.log($('#icon_prefix').val());
    let listTitle = $('#icon_prefix').val();
   
    $.ajax({
        type: 'POST',
        data: JSON.stringify({'birdsIds': birdData, 'title': listTitle}),
        contentType: 'application/json',
        url: '/checklist/create',						
        success: function(birdData) {
            location.reload();
        }
    });

}






