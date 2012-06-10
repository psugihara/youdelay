var Video = Backbone.Model.extend({
    initialize: function(attributes, options) {
        var getId = /(youtu.be\/|v=)(.*?)(?:\s|$|&)/g;
        this.set('youtubeId', getId.exec(attributes.youtubeLink)[2]);
    },
    start: 0,
    stop: 173
});

var Videos = Backbone.Collection.extend({
    model: Video
});
