console.log('Hello there!');

let addOperator = document.querySelector('#addition').value;
let subOperator = document.querySelector('#subtraction').value;
let multiOperator = document.querySelector('#multiplication').value;
let divOperator = document.querySelector('#division').value;
let chosenSign = '';
let finalMath = '';

function calculator(event){
    //console.log(event.target.innerHTML);
    chosenSign = event.target.innerHTML;
}

function getMath() {
    axios.get('/math').then((response) => {
        console.log("success", response.data);
        let mathFromServer = response.data;
        let mathDiv = document.querySelector('#equationList');
        mathDiv.innerHTML = "";
        for (let math of mathFromServer){
            mathDiv.innerHTML += `
            <p> ${math.num1} ${math.chosenSign} ${math.num2} = ${math.resultAnswer}</p>
            `;
        }
        // for (let math of mathFromServer){
        //     mathDiv.innerHTML += `
        //     <p> ${math.num1} ${math.chosenSign} ${math.num2} = ${finalMath}</p>
        //     `;
        // }
    }).catch((error) => {
        console.log(error);
        alert("Something went wrong!");
    });
};
//getMath();

function getMathCalultion() {
    axios.get('/calculation').then((response) => {
        console.log("success", response.data);
        let mathFromServer = response.data;
        finalMath = mathFromServer;
        getMath();
    }).catch((error) => {
        console.log(error);
        alert("Something went wrong!");
    });
};

function submitForm(event){
    event.preventDefault();
    // num1 & 2 are pulling the values added to out input in the html
    let num1 = Number(document.querySelector('#firstNumber').value);
    //console.log(num1);
    let num2 = Number(document.querySelector('#secondNumber').value);
    //console.log(num2);
    // let result = 0;

    let mathToAdd = {
        num1: num1,
        num2: num2,
        chosenSign: chosenSign,
        // result: result,
    };
    console.log(mathToAdd);

    
    axios.post('/math', mathToAdd).then((response) => {
        console.log(response);
        // Here we are pulling our id's from the html page and setting the input value
        // to an empty string.
        document.querySelector('#firstNumber').value = '';
        //document.querySelector('').value = '';
        document.querySelector('#secondNumber').value = '';

    getMath();
    //getMathCalultion();
    }).catch((error) => {
    console.log(error);
    alert('Something went wrong');
});
};

