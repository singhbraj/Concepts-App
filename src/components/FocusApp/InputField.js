import React,{useEffect,useRef} from 'react'
import {Dropdown} from 'semantic-ui-react'

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]

export const useMountEffect = (fun) => useEffect(fun, []);

const UseFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };
  
    return [htmlElRef, setFocus];
  };


   const InputField = ({item,isFocus}) => {

    console.log("inputfield rendered!!",isFocus)

    const [input1Ref, setInput1Focus] = UseFocus();

    useMountEffect(setInput1Focus);


  return (
    <div>
  {/* <div ref={input1Ref}> */}

   {/* <Dropdown
    // ref={isFocus?input1Ref:null}
    placeholder='Select Friend'
    fluid
    selection
    search
    searchInput={{autoFocus:isFocus?true:false}}
    options={friendOptions}
  /> */}
  {/* </div>  */}
      <input
        ref={isFocus ? input1Ref : null}
        className="input"
        key={item.id}
        value={item.name}
      /> 
  </div>
  )
}

export default InputField