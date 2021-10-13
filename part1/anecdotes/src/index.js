import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [mostVotes, setMostVotes] = useState(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0:0,1:0,2:0,3:0,4:0,5:0
  })
 const Vote =()=>{
  let result
  let arr = Object.values(points)
  const newPoint = { 
    ...points, 
    [selected]: points[selected] + 1 
  }
  setPoints(newPoint)
  result=arr.indexOf((Math.max(...arr)))
  return (result)
}
  

  const GetRandomArbitrary =()=>{
    const min = 0
    const max = 5
    let result = 0

    result = Math.floor((Math.random() * (max - min + 1)) + min)
    
    return result
  }
 
  return (
   <div>
     
     <h1>Anecdote of the day</h1>

    <div>

     <p>{props.anecdotes[selected]}</p>

    </div>
    
     <div>

        <p> has {points[selected]} vote</p>

      </div>
    
     <button onClick={()=>setMostVotes( Vote())}>voto</button>
     <button onClick={()=>setSelected(GetRandomArbitrary())}>next</button>
     
     <div>

     <h1>Anecdote with most votes</h1>

     <div>
    
        <p>{props.anecdotes[mostVotes]}</p>

      </div>
        <div>
          
          <p> has {points[mostVotes]} vote</p></div>

     </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} copy />,
  document.getElementById('root')
)