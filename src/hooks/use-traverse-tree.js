const useTreeTraversal = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      console.log(tree);
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    let updatedTree = { ...tree, items: latestNode };
    console.log(updatedTree);

    return updatedTree;
  };

  const deleteNode = (finalTree, folderId) => {
    let isParent = false;
    finalTree.items.forEach((item) => {
      if (item.id === folderId) {
        isParent = true;
      }
    });

    if (isParent) {
      const newNode = finalTree.items.filter((item) => item.id !== folderId);
      return { ...finalTree, items: newNode };
    } 
      let newTree = [];
     newTree =  finalTree.items.map((item) => {
         return deleteNode(item, folderId, item.isFolder);
      
      });
      return { ...finalTree, items: newTree };
};
return { insertNode, deleteNode };
};

export default useTreeTraversal;
