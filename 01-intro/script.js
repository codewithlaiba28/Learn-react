// var h1 = document.createElement('h1');
// var root = document.getElementById('root');
// h1.innerHTML = "Hello, World!";
// root.appendChild(h1);

// console.log(React)

// var h2 = React.createElement('h2', null, 'Hello from React');

var h1 = React.createElement('h1', null, 'Hello from ReactDOM');
var parent = document.querySelector("#parent");
var root = ReactDOM.createRoot(parent)
root.render(h1)