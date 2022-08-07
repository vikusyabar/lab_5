"use strict";
var input = document.getElementById('input'),
    number = document.querySelectorAll('.numbers div'),
    operator = document.querySelectorAll('.operators div'),
    result = document.getElementById('result'),
    clear = document.getElementById('clead'),
    resultDisplayer = false; 

for (var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function (e){
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (resultDisplayer === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayer === true && lastChar === "+" ||  lastChar === "-" || lastChar === "*" ||  lastChar === "/") {
            resultDisplayer = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayer = false;
            input.innerHTML = "";
            input.innerHTM += e.target.innerHTM;

        }
    });
}

for (var i = 0; i < operator.length; i++){
    operator[i], addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTM;
            input.innerHTML = newString;

        } else if (currentString.length == 0) {
            console.log("enter a number first");

        } else {
            input.innerHTML += e.target, innerHTM;
        }
        
    });
}


result.addEventListener("click", function () {
    var inputString = input.innerHTML;
    var numbers = inputString.split(/\+|\-|\*|\%/g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------------")
})