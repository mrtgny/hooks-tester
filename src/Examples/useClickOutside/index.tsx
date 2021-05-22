import { useCallback, useRef } from "react";
import { useClickOutside } from "@reactivers/hooks";

const UseClickOutsideExample = () => {
  const ref = useRef(null);

  const callback = useCallback((e) => {
    alert("clicked outside element");
  }, []);

  const clicked = useClickOutside({ ref, withState: true, callback });

  return (
    <div className="sample-page">
      <div className="card">
        <div
          className="center box"
          style={{
            backgroundColor: clicked ? "green" : "#aaa",
            color: "white"
          }}
          ref={ref}
        >
          Click on blue
        </div>
      </div>
    </div>
  );
};

export default UseClickOutsideExample;
