import { useEffect, useState } from "react";
import DropDown from "./DropDown";
function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [color, setColor] = useState("blue");

  const colorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
    red: "text-red-600",
    orange: "text-orange-600",
    white: "text-white-600",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-xl m-3">Current Time 🕒</h1>
        <p
          className={`border-2 border-black-300 rounded-md p-2 text-xl bg-white-300 m-1.5 ${colorMap[color]}`}
        >
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
      <DropDown color={color} setColor={setColor} />
    </div>
  );
}
export default Clock;
