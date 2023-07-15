import { useHabit } from "../../context/HabitContext";
import "./HabitDetails.css";

export const HabitDetails = ({ display, closeDetailsHandler }) => {
  const { habitSelected, setModalVisible } = useHabit();
  const { name, repeat, goal, time, startDate } = habitSelected;
  return (
    <div style={{ display: display }} className="add-habit">
      <i
        className="fa-solid fa-xmark x-icon"
        onClick={() =>
          setModalVisible({ ...setModalVisible, isHabitDetailsVisible: false })
        }
      ></i>
      <h1>{name}</h1>
      <p>Repeat: {repeat}</p>
      <p>Goal: {goal}</p>
      <p>Time: {time}</p>
      <p>Start Date: {startDate}</p>
    </div>
  );
};
