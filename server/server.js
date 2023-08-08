let express = require('express');

let app = express();
const port = 5001;
app.use(express.json());

let mathEquations = [];
let resultAnswer = "";

app.use(express.static('server/public'));

app.get('/math', function(req, res){
    console.log('Request for /math was made');

    res.send(mathEquations);
    console.log(mathEquations);
});

// long way
app.get('/calculation', function(req, res){
    console.log('Request for /calculation was made');
    resultAnswer = resultAnswer.toString();
    res.send(resultAnswer);
    console.log(resultAnswer);
});

app.post('/math', (req, res) => {
    console.log('get a POST request', req.body);
    // We are going to assign the request body to a variable
    let newMath = req.body;
   
    // we are responding to the client
    res.sendStatus(201);
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let chosenSign = (req.body.chosenSign);
    

    switch (chosenSign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
        };
        console.log(result);
        resultAnswer = result;
        console.log('Our result answer is:', resultAnswer);
        newMath = {
            num1: num1, 
            num2: num2, 
            chosenSign: chosenSign,
            resultAnswer: resultAnswer
        };
         // pushing newMath into our mathEquations
        mathEquations.push(newMath);
});

app.listen(port, function() { 
    console.log('listening on port', port);
});
