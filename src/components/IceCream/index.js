import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../../features/iceCream/iceCreamSlice'


const Cake = () => {
    const dispatch = useDispatch()
    const Icecream = useSelector((state)=>state.icecreamReducer.icecream)


  return (
    <div style={{textAlign:'center'}}>
      <div>
      <span>Icecream - {Icecream}</span>
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