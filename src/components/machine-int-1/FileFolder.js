import React, { useState } from "react";
import "./Folder.css";

const FileFolder = ({ explorer, handleInsertNode, handleDelete }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

 const handleDeleteHandler = (e,id) =>{
  e.stopPropagation()
  handleDelete(id)
 }

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };


  if (explorer?.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
          <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          <button onClick={(e) =>handleDeleteHandler(e,explorer.id) }>Delete -</button>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"} </span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <FileFolder
              handleInsertNode={handleInsertNode}
              handleDelete={handleDelete}
              key={exp.name}
              explorer={exp}
            />
          ))}
        </div>
      </div>
    );
  } else {
    if(explorer){
    return (
      <div style={{ display: "flex", verticalAlign: "bottom" }}>
        <span className="file">📄 {explorer.name} </span>
        <button
          style={{ alignItems: "center", margin: "5px" }}
          onClick={(e) => handleDeleteHandler(e,explorer.id)}
        >
          Delete -
        </button>
      </div>
    );
  }
  else{
    return(
      <div className="folder" >
      <span>Nothing to show</span>
      </div>
    )
  }
}
};

export default FileFolder;
