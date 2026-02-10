import { useState } from "react";
import { useTextStore, useIsYesStore } from "../store/textStores";

const NoButton = () => {
  const [position, setPosition] = useState({ top: "60%", left: "55%" });
  const [size, Setsize] = useState({ height: 50, width: 70, textSize: "16px" });

  const { updateInitialText } = useTextStore();
  const { isYes } = useIsYesStore();

  const moveButton = () => {
    updateInitialText();
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 50);
    const newHeight = 25;
    const newWidth = 35;
    const newTextSize = "7px";
    setPosition({
      top: `${newY}px`,
      left: `${newX}px`,
    });
    Setsize({
      height: newHeight,
      width: newWidth,
      textSize: newTextSize,
    });
  };

  return (
    <div>
      {!isYes && (
        <button
          onMouseEnter={moveButton}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            transition: "all 0.2s ease-out",
            fontSize: size.textSize,
            cursor: "pointer",
            color: "white",
            background: "red",
            border: 0,
            height: size.height,
            width: size.width,
            borderRadius: 10,
          }}
        >
          NO
        </button>
      )}
    </div>
  );
};

export default NoButton;
