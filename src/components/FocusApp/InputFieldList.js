import React from 'react'
import InputField from './InputField'

const InputFieldList = ({data,isFocus}) => {
  return (
    <div className="box">
    {data.map((item, idex) => (
        <InputField item={item} key={item.id}  isFocus={isFocus}/>
    //   <input
    //     ref={isFocus ? input1Ref : null}
    //     className="input"
    //     key={item.id}
    //     value={item.name}
    //   />
    ))}
  </div>
  )
}

export default InputFieldList