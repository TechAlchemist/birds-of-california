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
    let obj = {};
    var form_data  = table.rows().data();
    for (let i = 0; i < form_data.length; i++) {
        obj[i] = form_data[i];   
    }
   
    $.ajax({
        type: 'POST',
        data: JSON.stringify(obj),
        contentType: 'application/json',
        url: '/checklist/create',						
        success: function(obj) {
            console.log('success');
            // console.log(JSON.stringify(data));
        }
    });

}






