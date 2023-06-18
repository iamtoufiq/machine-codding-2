import React from "react";
import { useGlobalHook } from "../context/Contexts";

const ArchivePage = () => {
  const { archive, handleArchiveDelete } = useGlobalHook();
  return (
    <div className="card-container">
      {archive.map((datas, index) => (
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
              onClick={() => handleArchiveDelete(datas.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchivePage;
