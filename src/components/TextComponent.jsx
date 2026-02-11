import { useTextStore, useIsYesStore } from "../store/textStores";
import Shuffle from "../gsap/Shuffle";

const TextComponent = () => {
  const { initialText } = useTextStore();
  const { isYes } = useIsYesStore();

  return (
    <div
      style={{
        color: "#fff",
        WebkitTextStroke: "2px",
        WebkitTextStrokeColor: "#FF8896",
        border: "10px",
        borderColor: "#000",
      }}
    >
      <Shuffle
        key={isYes ? "YEY!! I LOVE YOU!🥰🥰🥰" : initialText}
        text={isYes ? "YEY!! I LOVE YOU!🥰🥰🥰" : initialText}
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        respectReducedMotion={true}
        loop={false}
        loopDelay={0}
        style={{ fontFamily: "Valentine14" }}
      />
    </div>
  );
};

export default TextComponent;
