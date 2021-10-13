import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Display = props => <h1>{props.value}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)

const Content =(props)=>(
<div>{props.name} {props.total}</div>
)

const All = (props)=>(
  <div>{props.good + props.neutral + props.bad}</div>
)

const Averange = (props)=>{
  
  let averange = useState[0]
  let division = 0

  averange = props.good + props.neutral + props.bad
  division = ((props.good - props.bad)/averange)

return(
  <div> 
   {division}
  </div>
)  
}
const Positive = (props)=>{
  
  let averange = useState[0]
  let division = 0

  averange = props.good + props.neutral + props.bad
  division = ((props.good/averange)*100)

return(
  <div> 
     {division}
  </div>
)  
}
const Statics =(props) =>{
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <Display value={"statics"}></Display>
        No feedback given
      </div>
    )
  }

  return (
   <div>
    <Display value={"statics"}></Display>
    <table>
     <tbody>    
      <tr>
        <td>Good: </td>
        <td><Content total={props.good}></Content></td>
      </tr>
      <tr>
        <td>Neutral: </td>
        <td><Content total={props.neutral}></Content></td>
      </tr>
      <tr>
        <td>Bad: </td>
        <td><Content total={props.bad}></Content></td>
      </tr>
      <tr>
        <td>All: </td>
        <td><All good={props.good} neutral={props.neutral} bad={props.bad}></All></td>
      </tr>
      <tr>
        <td>Averange: </td>
        <td><Averange good={props.good} neutral={props.neutral} bad={props.bad}></Averange></td>
      </tr>
      <tr>
        <td>Positive: </td>
        <td><Positive good={props.good} neutral={props.neutral} bad={props.bad}></Positive></td>
      </tr>
      </tbody>
    </table>
   </div>
  )
}
/*<tr>
      <td>Good: </td>
      <td>Neutral: </td>
      <td>Bad: </td>
      <td>All: </td>
      <td>Averange: </td>
      <td>Positive: </td>
    </tr>
    <tr>
      <td><Content total={props.good}></Content></td>
      <td><Content total={props.neutral}></Content></td>
      <td><Content total={props.bad}></Content></td>
      <td><All good={props.good} neutral={props.neutral} bad={props.bad}></All></td>
      <td><Averange good={props.good} neutral={props.neutral} bad={props.bad}></Averange></td>
      <td><Positive good={props.good} neutral={props.neutral} bad={props.bad}></Positive></td>  
    </tr>*/



const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Display value={"give feedback"}></Display>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statics good={good} neutral={neutral} bad={bad}></Statics>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
