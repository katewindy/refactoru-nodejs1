var myArgs = process.argv.slice(2);
console.log(myArgs);
var r = Number(myArgs[0]);
var g = Number(myArgs[1]);
var b = Number(myArgs[2]);
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
console.log(luminosity);