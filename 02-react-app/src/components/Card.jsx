import React from 'react'

const Card = (props) => {
  console.log(props.photo);
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded-2xl'>
    <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
    <h1 className='text-2xl font-semibold mb-4'>{props.user} </h1>
    <h1>{props.city}, {props.age}</h1>
    <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5'>Add Friend</button></div>
  )
}

export default Card