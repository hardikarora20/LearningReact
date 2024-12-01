import { useState } from "react";
import { IoMdSwitch } from "react-icons/io";
import "./Switch.css";

export const Switch = () => {
  const [currState, setCurrState] = useState(0);
  function handleSwitch() {
    setCurrState(() => {
      if (currState == 0) return 1;
      return 0;
      //   currState == 0 ? 1 : 0;
    });
  }
  return (
    <>
      Toggle Switch <IoMdSwitch />
      <ActualSwitch onClickFunction={handleSwitch} currState={currState} />
    </>
  );
};
const ActualSwitch = ({ currState, onClickFunction }) => {
  console.log(currState);
  const checkIsOn = currState == 0 ? "off" : "on";
  return (
    <section onClick={onClickFunction} className={`switch ${checkIsOn}`}>
      <h1 className="switch-bubble">{checkIsOn}</h1>
    </section>
  );
};
