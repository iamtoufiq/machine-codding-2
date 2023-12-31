import "./HabitCard.css";
import { useHabit } from "../../context/HabitContext";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";
export const HabitCard = ({ habit }) => {
  const location = useLocation();
  const {
    setHabitSelected,
    setHabitDetails,
    addArchive,
    deleteHabit,
    setModalVisible,
  } = useHabit();
  const { name } = habit;

  const editHandler = () => {
    setHabitDetails(habit);
    setModalVisible({
      ...setModalVisible,
      isAddHabitVisible: true,
      isEditBtn: true,
    });
  };

  return (
    <>
      <div
        className="habit-card"
        style={{
          backgroundColor:
            name?.length < 5 ? "green" : name?.length < 10 ? "yellow" : "red",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalVisible({
              ...setModalVisible,
              isHabitDetailsVisible: true,
            });
            setHabitSelected(habit);
          }}
        >
          <h2>{name}</h2>
        </div>
        <div className="icons">
          <Button>
            <EditIcon onClick={editHandler} style={{ fontSize: "15px" }} />
          </Button>
          {location?.pathname !== "/archived" && (
            <Button>
              <ArchiveIcon onClick={() => addArchive(habit)} />
            </Button>
          )}

          <Button>
            <DeleteIcon onClick={() => deleteHabit(habit)} />
          </Button>
        </div>
      </div>
    </>
  );
};
