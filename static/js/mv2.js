$(document).ready(function () {
    var Screen = Backbone.View.extend({

        template: _.template($('#video-template').html()),

        render: function() {
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    var App = Backbone.View.extend({

        el: '#app',

        events: {
            'submit form': 'addVideo'
        },

        $toAdd: $('#toAdd'),

        addVideo: function (e) {
            e.stopPropagation();
            e.preventDefault();
            console.log(this.$toAdd.val());
            var video = new Video({youtubeLink: this.$toAdd.val()});
            var screen = new Screen({model: video});
            this.$el.append(screen.render().$el);
            this.$toAdd.val('');
        }

    });


    var app = new App();
});