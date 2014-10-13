
var luminosity = function (red, green, blue){
	var r = Number(red);
	var g = Number(green);
	var b = Number(blue);
	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
	return luminosity;
};

var darken = function (red, green, blue){
	var r = Number(red);
	var g = Number(green);
	var b = Number(blue);
	var darken_r = 0.8*r;
	var darken_g = 0.8*g;
	var darken_b = 0.8*b;
	var darkened = darken_r + ' ' + darken_g + ' ' + darken_b;
	return darkened;

};

module.exports = {
	luminosity: luminosity,
	darken: darken
};