import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../../features/cake/cakeSlice'


const Cake = () => {
    const dispatch = useDispatch()
    const Cake = useSelector((state)=>state.cakeReducer.cake)


  return (
    <div style={{textAlign:'center'}}>
      <div>
      <span>Cake - {Cake}</span>
      </div>
      <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Derement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Cake