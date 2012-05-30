//Video model
var Video = Backbone.Model.extend({
    initialize: function() {
        this.youtubeId = this.getId.exec(this.youtubeLink)[2];
    },
    getId: /(youtu.be\/|v=)(.*?)(?:\s|$|&)/g;
    start: 0,
    stop: 173
});

//Feature - collection of Video models
var Videos = Backbone.Collection.extend({
    model: Video
});
