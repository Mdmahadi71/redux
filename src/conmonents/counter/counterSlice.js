import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('count')) ? JSON.parse(localStorage.getItem('count')) :0 ,
  },
  reducers: {
    increment: (state) => {
     let incer = state.value += 1
     localStorage.setItem('count',JSON.stringify(incer))
    },
    decrement: (state) => {
    let decr = state.value
    if(decr > 0){
        state.value -= 1
        localStorage.setItem('count',JSON.stringify(decr))
    }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer