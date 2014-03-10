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
    photoset_id: '72157642166374725',
    method : 'flickr.photosets.getPhotos',
    page:1
}, function(ret) {    
    console.log(ret.photoset.photo);
    
    React.renderComponent(
            <showResponse data={ret.photoset.photo} />,
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

var Img = React.createClass({
  render: function() {
      return (<li><img src={this.props.path} width="516" height="387" border="0" /></li>
    );
  }
});

var DataList = React.createClass({
  render: function() {
      var obj  = this.props.data.map(function (photo) {
          var src = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
          console.log(src);
          return <Img path={src}></Img>;
      });
      return(<ul>{obj}</ul>);
  }
});

