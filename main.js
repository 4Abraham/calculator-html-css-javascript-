function calc() {

let value1 =parseInt(document.querySelector('#value1').value);

let value2 =parseInt(document.querySelector('#value2').value);

let operator= document.querySelector('#operator').value;

let calculate;


if (operator =="add") {
    calculate = value1 + value2; 
}else if (operator == "sub") {
    calculate = value1 - value2; 
}else if (operator == "mult") {
    calculate = value1 * value2; 
}else if (operator == "power") {
    calculate = value1 ** value2; 
}

document.querySelector('#result').innerHTML=calculate;

}

