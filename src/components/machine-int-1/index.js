import React, { useState } from "react";
import explorer from "./data/folderData";
import FileFolder from "./FileFolder";
import useTreeTraversal from "../../hooks/use-traverse-tree";

const FolderStructure = () => {
  const [explorerDtata, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode,updateNode } = useTreeTraversal();

  const handleInsertNode = (folderId, item, isFolder) => {
    const tree = insertNode(explorerDtata, folderId, item, isFolder);
    setExplorerData(tree);
  };
  const handleDelete = (id) => {
    const finalTree =
      explorerDtata.id === id ? {} : deleteNode(explorerDtata, id);
    setExplorerData(finalTree);
  };

  const handleUpdate = (id,name) =>{  
    const tree = updateNode(explorerDtata, id, name);
    console.log("updated tree",tree)
    setExplorerData(tree);
  }

  return (
    <div>
      <FileFolder
        explorer={explorerDtata}
        handleInsertNode={handleInsertNode}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default FolderStructure;
