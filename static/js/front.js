//Video model
var Video = Backbone.Model.extend({
    initialize: function() {},
    name: "Squirrel Riding a Jet Ski",
    src: "http://youtu.be/2xxKwesCKJk",
    start: 0,
    stop: 173
});

//Feature - collection of Video models
var Videos = Backbone.Collection.extend({
    model:Video});
