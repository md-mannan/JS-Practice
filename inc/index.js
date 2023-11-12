// JS array method

// filter method use to filter number by condationaly

var numbers = [10, 20, 30, 40, 50, 55, 60, 45, 60]

var result = numbers.filter(function (item) {
    return item > 50;
})

document.write(result)