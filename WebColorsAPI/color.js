var request = require('request');
var userColor = process.argv[2];
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	    	var parsed = JSON.parse(body);
	    	console.log(parsed[5].rgb.r);
	    	for (var i = 0; i < parsed.length; i++){
				if (userColor.toUpperCase() == parsed[i].name.toUpperCase()){
				var rgbValues = parsed[i].rgb.r + ' ' + parsed[i].rgb.g + ' ' + parsed[i].rgb.b;
				console.log(rgbValues);
			}
		}


  	}
});

// function colorCompare(userColor, parsed) {
// 	for (var i = 0; i < parsed.length; i++){
// 		if (userColor.toUpperCase() == parsed[i].name.toUpperCase()){
// 			var rgbValues = parsed[i].rgb.r + ' ' + parsed[i].rgb.g + ' ' + parsed[i].rgb.b;
// 			console.log(rgbValues);
// 			return rgbValues;
// 		}
// 	}
// }
// var output = JSON.parse(colors);
// console.log(output);