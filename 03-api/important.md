import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

const [data, setData] = useState([])

const getData = async () => {
const response= await axios.get('https://picsum.photos/v2/list')
console.log(response)
const data = response.data
setData(response.data)
}
return (

<div className='p-10'>
<button onClick={getData} className='bg-pink-900 text-pink-500 font-semibold text-2xl px-6 py-3 rounded-2xl active:scale-90'>Get Data</button>
<div className='p-1 bg-gray-950 text-white' >
{data.map(function(elem, idx){
return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between py-1 w-full px-2 rounded mb-1'>

            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}

      </div>
    </div>

)
}

export default App

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

const [data, setData] = useState([])

const getData = async () => {
const response= await axios.get('https://picsum.photos/v2/list')

    setData(response.data)

}
useEffect(() => {
getData()
}, [])

return (

<div className='p-10'>

      <div className='p-1 bg-gray-950 text-white' >

        {data.map(function(elem, idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between py-1 w-full px-2 rounded mb-1'>

            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}

      </div>
    </div>

)
}

export default App

<a className='text-xl underline' href="/about">About</a>
<a className='text-xl underline' href="/contact">Contact</a>
<a className='text-xl underline' href="/product">Product</a>
<a className='text-xl underline'  href="/">Home</a>
