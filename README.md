# Project Name

Weekend Server Calculator

### Server

```
npm install
npm start
```

## Description

We have a fully functional basic server calculator that is using GET & POST routes between the server and client. The calculator is taking the equation input from the browser and outputing on the DOM while also storing the equation for use later on. We are storing the equation input as a history log and the total of the equation on the DOM.

Technologies Used
-----------------
* Node
* Express

### Client

The client `/math` routes are pulling the info that is entered on the browser and pushing it to the server. The client `/calculation` routes is pulling the calculation that we have stored in the server so that we can post the total on the DOM.

### Server

The server `/math` routes are storing the info from the client so the client can use the info when needed. The server `/calculation` route is taking the full equation total and pushing it back to client for use.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
