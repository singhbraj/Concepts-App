import React, { useState } from 'react'
import explorer from './data/folderData'
import FileFolder from './FileFolder'
import useTreeTraversal from '../../hooks/use-traverse-tree'

const FolderStructure = () => {

    const [explorerDtata,setExplorerData] = useState(explorer)
    const {insertNode,deleteNode} = useTreeTraversal();

    const handleInsertNode = (folderId, item, isFolder) =>{
        const tree = insertNode(explorerDtata, folderId, item, isFolder)
        setExplorerData(tree)
    }
const handleDelete = (id) =>{

  const finalTree = (explorerDtata.id === id) ? {} : deleteNode(explorerDtata,id);
  setExplorerData(finalTree);

}
  return (
    <div>
     <FileFolder handleInsertNode={handleInsertNode} handleDelete={handleDelete} explorer={explorerDtata} />
    </div>
  )
}

export default FolderStructure