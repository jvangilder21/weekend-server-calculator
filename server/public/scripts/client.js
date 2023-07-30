console.log('Hello there!');


function submitForm(event){
    event.preventDefault();
    // num1 & 2 are pulling the values added to out input in the html
    let num1 = document.querySelector('#firstNumber').value;
    let num2 = document.querySelector('#secondNumber').value;

    let mathToAdd = {
        num1: num1,
        num2: num2
    }
    console.log(mathToAdd);
};