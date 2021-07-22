import React, {useState} from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false)
  function handleClick(){
    setIsToggleOn((isToggleOn)=> setIsToggleOn(!isToggleOn))
  }
  const color = isToggleOn ? "red" : "white";

  return <button style={{background: color}} onClick={handleClick}>{isToggleOn? "On" : "OFF"}</button>;
}

export default Toggle;
