import React, { useState } from "react";
import "../CSS/card.css";
import DialogBox from "./DialogBox";
import { useGlobalHook } from "../context/Contexts";
import { IoMdAddCircle } from "react-icons/io";
const Card = () => {
  const {
    data,
    handleDelete,
    handleArchieve,
    handleDataEdit,
    onEdit,
    setOnEdit,
    editedData,
  } = useGlobalHook();
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setOnEdit(false);
  };

  return (
    <div className="card-container">
      {!onEdit && (
        <>
          <div>
            <div>
              <h2>
                Add Person{" "}
                <button onClick={openDialog}>
                  <IoMdAddCircle />
                </button>
              </h2>
              {showDialog && <DialogBox closeDialog={closeDialog} />}
            </div>
          </div>
          <div className="card-list">
            {data.map((datas) => (
              <div className="card" key={datas.id}>
                <img src="image-url.jpg" alt="" className="card-image" />
                <div className="card-details">
                  <h3 className="card-name">{datas.name}</h3>
                  <p className="card-goal">{datas.goal}</p>
                  <p className="card-time">{datas.timeOfDay}</p>
                  <p className="card-time">{datas.startDate}</p>
                </div>
                <div className="card-actions">
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(datas.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="archive-button"
                    onClick={() => handleArchieve(datas.id)}
                  >
                    Archive
                  </button>
                  <button
                    className="archive-button"
                    onClick={() => {
                      handleDataEdit(datas);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {onEdit && (
        <>
          <h2>Edit Person</h2>
          {showDialog && (
            <DialogBox closeDialog={closeDialog} editedData={editedData} />
          )}
        </>
      )}
    </div>
  );
};

export default Card;
