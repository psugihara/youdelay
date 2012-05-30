$(document).ready(function() {
    var $toAdd = $('#toAdd');
    $toAdd.keyup(function (event) {
        if (event.keyCode == 13) {
            var video = new Video({youtubeLink: $toAdd.val()});
            var screen = new Screen({model:video});
        }
    });
});