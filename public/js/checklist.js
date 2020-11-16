$('#postData').on('click', postChecklistData);

$(document).ready(function() {
    const table = $('#speciesTable').DataTable();
 
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
    const table = $('#builtCollection').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'print', 'pdf'
        ]
    });

    for (let i = 0; i < birdData.length; i++) {
        table.row.add(birdData[i]).draw();
    }
}

function postChecklistData() {
    console.log('PostChecklistData was clicked. ');
    const table = $('#builtCollection').DataTable();

    var form_data  = table.rows().data();
    console.log(form_data);
}






        // $.post('/email', { address: 'xxx@example.com' });
