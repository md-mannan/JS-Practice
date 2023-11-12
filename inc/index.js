// JS array method

var numbers = [30, 34, 32, 50, 55, 60, 50, 67, 100]
var result=numbers.filter(function(item){
return item<50
})
document.write(result)