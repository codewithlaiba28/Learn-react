<!-- {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: Arial, sans-serif;
background-color: #0a112e;
color: #abd9e7;
}
button {
cursor: pointer;
background-color: #ffffff;
color: #0a112e;
border: none;
padding: 10px 20px;
border-radius: 5px;
font-size: 16px;
transition: background-color 0.3s ease;
} \_/

/\* \_ {
margin: 0;
padding: 0;
box-sizing: border-box;
}
h1 {
color: crimson;
background-color: rgb(240, 107, 134);
}
body {
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
background-color: #f0f0f0;
color: #333333;
}
h2 {
color: rgb(8, 8, 71);
background-color: rgb(19, 126, 129);
}

// function App() {
// const name = "Laiba"

// function abc(){
// console.log("Button Clicked")
// }
// abc();
// const hi = () => {
// console.log("Hello World")
// }
// hi();
// return (
// <div>
// <h1>Hello!</h1>
// <h2>{name}</h2>
// <button onClick={abc}>Click Me</button>
// </div>
// )
// }

// export default App;

// import React, { useState } from 'react'

// const App = () => {
// const [name, setName] = useState("Laiba")

// const changeA = () => {
// setName("Yousuf")
// }
// return (
// <div>
// <h1>Hello my name is {name}</h1>
// <button onClick={changeA}>ChangeA</button>
// </div>
// )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
// const [num, setNum] = useState(0)
// return (
// <div>
// <h1>Hi! {num}</h1>
// <button onClick={()=>setNum(num+10)}>Increamen</button>
// <button onClick={()=>setNum(num-10)}>DEcreamen</button>
// </div>

// )
// }

// export default App

import React from 'react'

const App = () => {
return (
<div>
<h1>Hello!</h1>
<h2>LAIBA KHAN</h2>
</div>
)
}

export default App -->

import React, { useState } from 'react'

const App = () => {

const [username, setusername] = useState('')
const submitHandler = (e) => {
e.preventDefault();
console.log(username);

    setusername('');

}
return (

<div>
<form onSubmit={(e)=>{
submitHandler(e)
}}>

        <input
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        className="px-10 py-10 rounded-2xl bg-blue-300 border-2 border-cyan-950 text-blue-950 m-2" type="text" placeholder="Enter Your name" />
        <button className="bg-green-400 text-green-950 text-3xl font-semibold px-10 py-7 border-2 border-green-950 m-2 rounded-2xl">Submit</button>
      </form>
    </div>

)
}

export default App

import React from 'react'

const Card = (props) => {
return (

<div>
<h1 className='text-3xl font-semibold text-semi text-center py-3 bg-emerald-500 text-emerald-950'>The UserName is {props.a}</h1>
</div>
)
}

export default Card

import React from 'react'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
const App = () => {

const users=[
{
"name": "Sara Khan",
"city": "Karachi",
"age": 20,
"profession": "Frontend Developer",
"profile-photo": "https://example.com/laiba.jpg"
},
{
"name": "Hina Malik",
"city": "Lahore",
"age": 22,
"profession": "UI/UX Designer",
"profile-photo": "https://example.com/areeba.jpg"
},
{
"name": "Omar Siddiqui",
"city": "Islamabad",
"age": 25,
"profession": "Software Engineer",
"profile-photo": "https://example.com/ahmed.jpg"
},
{
"name": "Zoya Riaz",
"city": "Rawalpindi",
"age": 19,
"profession": "Student",
"profile-photo": "https://example.com/fatima.jpg"
},
{
"name": "Adnan Khan",
"city": "Peshawar",
"age": 28,
"profession": "Backend Developer",
"profile-photo": "https://example.com/bilal.jpg"
}
]
users.forEach(function(elem){
console.log(elem);
})
return (
<>
<Header />
<div className='p-10'>
<Card user="Laiba" age="25" city="Karachi" />
</div>

    </>

)
}

export default App
