import { useState } from "react";
import styles from "./CalendarPage.module.css";
import Header from "../../components/Header/Header";
import { Button, TextField } from "@mui/material";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Calendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const totalDays = 31;

  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Header value={"f3ef"} />
      <div className={styles.container}>
        <div className={styles.calendar}>
          <div className={styles.month}>
            <button onClick={prevMonth}>{"<"}</button>
            <span>{months[currentMonthIndex]} 2024</span>
            <button onClick={nextMonth}>{">"}</button>
          </div>
          <div className={styles.days}>
            {Array.from({ length: totalDays }, (_, index) => (
              <div className={styles.day} key={index + 1}>
                {index + 1}
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            sx={{ width: "200px", m: 5 }}
            onClick={() => setModal(true)}
          >
            Add Event
          </Button>
          {modal ? <div className={styles.modal}>
          <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="Name event"
                variant="outlined"
              />
              <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="Date event"
                variant="outlined"
              />
          </div> : null}
        </div>
      </div>
    </>
  );
};

export default Calendar;
