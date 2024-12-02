import { useState } from "react";
import "./ToDo.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoCloseCircle, IoTrashBinOutline } from "react-icons/io5";

export const ToDo = () => {
  const [inputString, setInputString] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [dateTime, setDateTime] = useState("let's go");
  function handleInputChange(newStr) {
    setInputString((inputString) => newStr);
  }
  function handleFormSubmit(event) {
    console.log(inputArray);
    event.preventDefault();
    if (inputString === "" || inputArray.includes(inputString)) {
      setInputString("");
      return;
    }
    setInputArray((inputArray) => {
      return [...inputArray, inputString];
    });
    setInputString("");
  }
  setInterval(() => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const newDateTime = date + " - " + time;
    setDateTime(newDateTime);
  }, 1000);

  function handleClearButton() {
    setInputArray((inputArray) => {
      return [];
    });
  }

  return (
    <section className="container">
      <h1>Todo List</h1>
      <h6>{dateTime}</h6>
      <form onSubmit={handleFormSubmit} className="todo-input-container">
        <input
          type="text"
          value={inputString}
          onChange={(event) => {
            handleInputChange(event.target.value);
          }}
        ></input>
        <button type="submit">add</button>
      </form>
      <section className="list-container">
        <ul className="todo-list">
          {inputArray.map((currEle, index) => {
            return (
              <li key={index} className="todo-item">
                {currEle}
                <div>
                  <button className="todo-input-icon check">
                    <IoCheckmarkCircle />
                  </button>
                  <button className="todo-input-icon cross">
                    <IoCloseCircle />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="clear-all-btn" onClick={handleClearButton}>
          <IoTrashBinOutline className="clear-icon" />
          Clear All
        </button>
      </section>
    </section>
  );
};
