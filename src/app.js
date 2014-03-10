/** @jsx React.DOM */

var flickr = Backbone.Model.extend({

});

var flickrList = Backbone.Collection.extend({
    model: flickr
});


var CommentBox = React.createClass({
    render: function() {
        return (
                <div className="commentBox">
                Hello, world! I am a CommentBox. init
                </div>
        );
    }
});

React.renderComponent(<CommentBox />, document.getElementById('container'));
