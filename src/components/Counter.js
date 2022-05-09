import React, { useState } from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  let increment =()=>
  {
    setCount(count+1)
  }
  let decrement =()=>
  {
    setCount(count-1)
  }
  let incrementFive =()=>
  {
    setCount(count+5)
  }
  return (
    <div className='container mt-5'>
      <div className='col-5'>
        <div className='card text-center'>
          <div className='card-heading '>
            <h3>Count: {count} </h3>
          </div>
          <div className='card-body'>
            <button onClick={increment} className='btn btn-success me-2'>Increment</button>
            <button onClick={decrement}   className='btn btn-danger me-2'>Decrement</button>
            <button onClick={incrementFive}  className='btn btn-dark'>Increment by 5</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter