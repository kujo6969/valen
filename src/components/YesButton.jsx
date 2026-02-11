import Confetti from "react-confetti";
import { useIsYesStore, useSpeedStore } from "../store/textStores";
const YesButton = () => {
  const { isYes, updateIsYes } = useIsYesStore();
  const { setSpeed } = useSpeedStore();

  return (
    <div>
      {isYes && <Confetti wind={0.01} numberOfPieces={300} />}
      {!isYes && (
        <button
          onClick={() => {
            updateIsYes(true);
            setSpeed(100);
          }}
          className="hover-button"
          style={{
            position: "absolute",
            transition: "all 0.2s ease-out",
            fontSize: "16px",
            cursor: "pointer",
            color: "#000",
            background: "#FF6F77",
            border: 0,
            height: 50,
            width: 70,
            borderRadius: 10,
          }}
        >
          Yes
        </button>
      )}
    </div>
  );
};

export default YesButton;
