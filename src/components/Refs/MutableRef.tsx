import { useState, useRef, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    // set interval returns number value (id of the interval)
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    //     clear function
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer = {timer}
      <button onClick={() => stopTimer()}>stop Timer</button>
    </div>
  );
};
export default MutableRef;
