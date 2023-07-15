import { useNavigate } from "react-router";
import { HabitCard } from "../../components/habitcard/HabitCard";
import { useHabit } from "../../context/HabitContext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export const Archive = () => {
  const {
    archive,
    // setHabitSelected,
    // setHabitDetails,
    // addArchive,
    // deleteHabit,
    // setModalVisible,
  } = useHabit();

  const navigate = useNavigate();
  return (
    <>
      <h1
        style={{
          color: "rgb(36, 36, 197)",
          textAlign: "center",
          textDecoration: "underLine",
        }}
      >
        Archives
      </h1>
      {/* <button >
       
      </button> */}
      <h3 onClick={() => navigate("/")}>
        <NavigateBeforeIcon />
        <span
          style={{
            position: "relative",
            top: "-24px",
            left: "-17px",
            color: "rgb(36, 36, 197)",
          }}
        >
          Back to Habits
        </span>
      </h3>
      <hr style={{ width: "90%", margin: "auto" }} />
      {archive.length === 0 ? (
        <h1 style={{ color: "rgb(36, 36, 197)", margin: "1rem 30%" }}>
          Nothing in archive
        </h1>
      ) : (
        archive.map((data) => <HabitCard habit={data} />)
      )}
    </>
  );
};
