import "./App.css";
import { useIsYesStore } from "./store/textStores";
import Confetti from "react-confetti";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";
import TextComponent from "./components/TextComponent";
import GIFs from "./components/GIFs";
import Silk from "./gsap/Silk";

function App() {
  const { isYes } = useIsYesStore();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Silk
          speed={10}
          scale={1}
          color="#C00000"
          noiseIntensity={1}
          rotation={0}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Foreground content */}
      <TextComponent />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 100,
        }}
      >
        <YesButton />
        <NoButton />
      </div>
      {isYes && <Confetti wind={0.01} numberOfPieces={300} />}
      {isYes && <GIFs />}
    </div>
  );
}

export default App;
