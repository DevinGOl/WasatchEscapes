$('[data-toggle="tooltip"]').tooltip()

$(document).ready(function() {
    $("#snowfallButton").click(function() {
$('#snowfallModal').modal('show');
    });
});

$('#pic').click(function () {
    var src = "img/SBTrail.png";
    $('#myModal').modal('show');
    $('#myModal iframe').attr('src', src);
});

$('#myModal button').click(function () {
    $('#myModal iframe').removeAttr('src');
});
