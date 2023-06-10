import React, { useState, useRef } from 'react';

 
const DragAndDrop= () => {
 
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
 
  const dragStart = (e,position)=>{
    console.log("position1",position)
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e,position)=>{
    console.log("position2",position)
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  }

  const drop =(e) =>{
    console.log("drop Called!!")
    const copyListItems = [...list];
    console.log("dragItem.current",dragItem.current)
    const dragItemContent = copyListItems[dragItem.current];
    console.log({dragItemContent})
    console.log("dragOverItem.current",dragOverItem.current)
    copyListItems.splice(dragItem.current,1)
    copyListItems.splice(dragOverItem.current,0,dragItemContent)
    dragItem.current = null;
    dragOverItem.current=null;
    console.log({copyListItems})
    setList(copyListItems)
  }



 
  return (
    <>
    {
    list &&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        key={index}
        onDragStart={(e)=>dragStart(e,index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        onDragOver={(e) => e.preventDefault()}
        draggable
        >
          {item}
      </div>
      ))}
    </>
  );
};
export default DragAndDrop;