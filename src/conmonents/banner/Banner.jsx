import React from 'react'
import { useSelector } from 'react-redux'

const Banner = () => {
    let data = useSelector((state)=>state.counter.value)
    console.log(data);
  return (
    <div className='bnr_heder'>
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, culpa!</h2>
      <h3>{data}</h3>
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, culpa!</h2>
    </div>
  )
}

export default Banner
