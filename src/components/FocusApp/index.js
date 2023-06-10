import React,{useState} from 'react'
// import InputField from './InputField';
import InputFieldList from './InputFieldList';
import './style.css'

const arr = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Pyare" },
    { id: 3, name: "Mohan" },
    { id: 5, name: "Singh" },
    { id: 6, name: "Braj" },
    { id: 7, name: "Kishor" }
  ];

const FocusApp = () => {

    const [data, setData] = useState(arr);
    const [isFocus, setIsFocus] = useState(false);

    const handleAdd = () => {
        setIsFocus(true);
        setData([...data, { id: 8, name: "Robin" }]);
      };

      console.log("focusapp rendered")

  return (
    <div className='container'>
    <button onClick={handleAdd} className="button">
      Add
    </button>
    {/* <Button content="Braj" /> */}
    <InputFieldList data={data} isFocus={isFocus} />
  </div>
  )
}

export default FocusApp