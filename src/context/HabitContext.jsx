import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import uuid from "react-uuid";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habitData, setHabitData] = useState([]);
  const [habitSelected, setHabitSelected] = useState({});
  const [archive, setArchive] = useState([]);
  const [modalVisible, setModalVisible] = useState({
    isAddHabitVisible: false,
    isHabitDetailsVisible: false,
    isEditBtn: false,
  });
  const initialState = {
    id: uuid(),
    name: "",
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
  };

  const [habitDetails, setHabitDetails] = useState(initialState);

  const addHabit = (habit) => {
    const findHabitIndex = habitData.findIndex(
      (data) => data.name === habit.name
    );
    if (findHabitIndex === -1) {
      setHabitData([habit, ...habitData]);
    } else {
      alert("Habit exists");
    }
    setHabitDetails(initialState);
  };

  const deleteHabit = (habit) =>
    setHabitData(() => habitData.filter((data) => data.id !== habit.id));

  const addArchive = (habit) => {
    const findHabitIndex = archive.findIndex(
      (data) => data.name === habit.name
    );
    if (findHabitIndex === -1) {
      setArchive([habit, ...archive]);
      toast.success("Added to Archive");
    } else {
      toast.warning("Already Archived");
    }
  };

  const removeArchive = (habit) =>
    archive.filter((data) => data.name === habit.name);

  const editHabit = (habit) => {
    habitData.map((data) => (data.id === habit.id ? habit : data));
  };

  return (
    <HabitContext.Provider
      value={{
        habitData,
        habitDetails,
        setHabitDetails,
        addHabit,
        habitSelected,
        setHabitSelected,
        editHabit,
        removeArchive,
        archive,
        addArchive,
        deleteHabit,
        modalVisible,
        setModalVisible,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
