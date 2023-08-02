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
});

app.post('/math', (req, res) => {
    console.log('get a POST request', req.body);
    // We are going to assign the request body to a variable
    let newMath = req.body;
    // pushing newMath into our mathEquations
    mathEquations.push(newMath);
    // we are responding to the client
    res.sendStatus(201);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2)
    let chosenSign = (req.body.chosenSign)
    // let result = 0;

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
});

app.listen(port, function() { 
    console.log('listening on port', port);
});
