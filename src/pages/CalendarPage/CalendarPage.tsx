import { useState } from "react";
import styles from "./CalendarPage.module.css";
import Header from "../../components/Header/Header";

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
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const totalDays = 30; // общее количество дней месяца

  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <Header />
      <div className={styles.calendar}>
        <div className={styles.month}>
          <button onClick={prevMonth}>{"<"}</button>
          <span>{months[currentMonthIndex]}</span>
          <button onClick={nextMonth}>{">"}</button>
        </div>
        <div className={styles.days}>
          {Array.from({ length: totalDays }, (_, index) => (
            <div className="day" key={index + 1}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
