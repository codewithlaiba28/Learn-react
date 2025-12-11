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
  
  return (
    <>
    <Header />
    <div className='p-10'>
      {users.map(function(elem, idx) {
        return <Card key={idx} user={elem.name} age={elem.age} city={elem.city} photo={elem['profile-photo']} />
      })}
    </div>
    
    </>
  )
}

export default App
