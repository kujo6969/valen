import Confetti from "react-confetti";
import { useIsYesStore } from "../store/textStores";
const YesButton = () => {
  const { isYes, updateIsYes } = useIsYesStore();

  return (
    <div>
      {isYes && <Confetti wind={0.01} numberOfPieces={300} />}
      {!isYes && (
        <button
          onClick={() => updateIsYes(true)}
          className="hover-button"
          style={{
            position: "absolute",
            top: "60%",
            left: "45%",
            transition: "all 0.2s ease-out",
            fontSize: "16px",
            cursor: "pointer",
            color: "white",
            background: "green",
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
