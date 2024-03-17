import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'

const Manu = () => {
    let dispact = useDispatch() 
    let data =useSelector((state)=>state.counter.value)
    console.log(data);



    let hendelincermet = ()=>{
        dispact(increment())
    }
  return (
    <div>
       <div className="main">
        <button onClick={hendelincermet}>+</button>
        <div className="nber">
            {data}
        </div>
        <button onClick={() =>dispact(decrement())}>-</button>
       </div>
    </div>
  )
}

export default Manu
