import { AddHabit } from "../../components/addHabit/AddHabit";
import "./Home.css";
import { HabitCard } from "../../components/habitcard/HabitCard";
import { useHabit } from "../../context/HabitContext";
import { HabitDetails } from "../../components/habitDetails/HabitDetails";
import { useNavigate } from "react-router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
export const Home = () => {
  const { habitData, modalVisible, setModalVisible } = useHabit();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="home"
        style={{
          filter:
            modalVisible.isAddHabitVisible || modalVisible.isHabitDetailsVisible
              ? "none"
              : "",
        }}
      >
        <div>
          <h1 className="heading">Habits</h1>
          <Button>
            <AddCircleIcon
              onClick={() =>
                setModalVisible({ ...modalVisible, isAddHabitVisible: true })
              }
            />
          </Button>
          <button
            className="arcinve-btn"
            style={{ display: "block" }}
            onClick={() => navigate("/archived")}
          >
            Show Archives
          </button>
        </div>
        <hr />
        <div className="habit-data">
          {habitData.length === 0 ? (
            <h1 className="heading-two">No Habits Added</h1>
          ) : (
            habitData.map((habit) => (
              <div key={habit.id} className="habit">
                <HabitCard habit={habit} />
              </div>
            ))
          )}
        </div>
      </div>
      <AddHabit display={modalVisible.isAddHabitVisible ? "" : "none"} />
      <HabitDetails
        display={modalVisible.isHabitDetailsVisible ? "" : "none"}
      />
    </>
  );
};
