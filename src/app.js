/** @jsx React.DOM */

// 
var controller = {
    fetch: function(params, callback){        
	// add base params
	params.api_key = 'f7419c7c353a4812a53523af90e255df';
	params.format = 'json';
	
	$.ajax({
	    url: 'http://api.flickr.com/services/rest/',
	    type: 'GET',
	    dataType: 'jsonp',
	    data: params,
	    jsonp: 'jsoncallback',
	    success: function(data){
		callback(data);		
	    },	    
	    error: function() {
		callback();		
	    }
	});
    }
};

controller.fetch({
    per_page: 30,
    method : 'flickr.photos.search',
    page:1,
    text:'dom'
}, function(ret) {
    React.renderComponent(
            <showResponse data={ret} />,
        document.getElementById('container')
    );
});

var showResponse = React.createClass({
  render: function() {
    return (
      <div>
        <h1>data:</h1>
        <DataList data={this.props.data} />
      </div>
    );
  }
});

var DataList = React.createClass({
  render: function() {
    var obj = this.props.data;
    return (
      <div>
        {obj}
      </div>
    );
  }
});

