import React, { createContext, useContext, useState } from "react";
const context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [archive, setArchive] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [editedData, setEditedData] = useState({});
  // handle delete
  const handleDelete = (ids) => {
    const updateData = data.filter((currentData) => {
      return currentData.id != ids;
    });
    setData([...updateData]);
  };
  // handle delete from archive
  const handleArchiveDelete = (ids) => {
    const updateData = archive.filter((currentData) => {
      return currentData.id != ids;
    });
    setArchive([...updateData]);
  };
  // handle add to archive
  const handleArchieve = (ids) => {
    const updatedData = data.filter((currentData) => currentData.id !== ids);
    const selectedItem = data.find((currentData) => currentData.id === ids);
    setArchive([...archive, selectedItem]);
    setData(updatedData);
  };
  // handleEdit
  const handleDataEdit = (data) => {
    setOnEdit(!onEdit);
    setEditedData({ ...data });
  };

  return (
    <context.Provider
      value={{
        data,
        setData,
        archive,
        setArchive,
        handleDelete,
        handleArchieve,
        handleArchiveDelete,
        handleDataEdit,
        onEdit,
        editedData,
        setOnEdit,
      }}
    >
      {children}
    </context.Provider>
  );
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
