import React, { useState } from "react";
import { useGlobalHook } from "../context/Contexts";

const DialogBox = ({ closeDialog, datas, editedData }) => {
  const { data, setData } = useGlobalHook();
  const [name, setName] = useState(editedData?.name || "");
  const [repeat, setRepeat] = useState(editedData?.repeat || "day");
  const [goal, setGoal] = useState(editedData?.goal || "1times");
  const [timeOfDay, setTimeOfDay] = useState(
    editedData?.timeOfDay || "morning"
  );
  const [startDate, setStartDate] = useState(editedData?.startDate || "today");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newObj = {
      name,
      startDate,
      timeOfDay,
      goal,
      repeat,
      id: editedData ? editedData.id : generateUniqueId(), // Use existing ID or generate a new one
    };

    const existingDataIndex = data.findIndex((item) => item.id === newObj.id);
    if (existingDataIndex !== -1) {
      const updatedData = [...data];
      updatedData[existingDataIndex] = newObj;
      setData(updatedData);
    } else {
      setData([...data, newObj]);
    }

    setName("");
    setRepeat("day");
    setGoal("1times");
    setTimeOfDay("morning");
    setStartDate("today");
  };

  const generateUniqueId = () => {
    const date = new Date();
    const uniqueId = date.getTime().toString();
    return uniqueId;
  };

  const handleRepeat = (e) => {
    setRepeat(e.target.value);
  };

  const handleGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleTimeOfDay = (e) => {
    setTimeOfDay(e.target.value);
  };

  const handleSetStartDate = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="dialog">
        <h2>New Habit</h2>

        <div className="dialog-header">
          <label htmlFor="name">Name *</label>
          <br />
          <button className="back-button">?</button>
          <input
            required
            type="text"
            id="name-input"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="second">
          <div className="dialog-row">
            <label htmlFor="repeat-input">Repeat</label> <br />
            <select id="repeat-input" onChange={handleRepeat} value={repeat}>
              <option value="week">Week</option>
              <option value="day">Day</option>
              <option value="month">Month</option>
            </select>
          </div>
          <div className="dialog-row">
            <label htmlFor="goal-input">Goal</label> <br />
            <select id="goal-input" onChange={handleGoal} value={goal}>
              <option value="1times">1 times Daily</option>
              <option value="2times">2 times Daily</option>
              <option value="3times">3 times Daily</option>
            </select>
          </div>
        </div>
        <div className="second">
          <div className="dialog-row">
            <label htmlFor="repeat-input">TIME OF DAY</label> <br />
            <select
              id="goal-input"
              onChange={handleTimeOfDay}
              value={timeOfDay}
            >
              <option value="anytime">Anytime</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <div className="dialog-row">
            <label htmlFor="goal-input">START DATE</label> <br />
            <select
              id="goal-input"
              onChange={handleSetStartDate}
              value={startDate}
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="dayaftertomorrow">Day After Tomorrow</option>
            </select>
          </div>
        </div>
        <div className="dialog-footer">
          <button className="discard-button">Discard</button>
          <button className="save-button">Save</button>
        </div>
        <button onClick={closeDialog}>{!!editedData ? "Home" : "Close"}</button>
      </div>
    </form>
  );
};

export default DialogBox;
