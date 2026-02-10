import { useTextStore, useIsYesStore } from "../store/textStores";
import Shuffle from "../gsap/Shuffle";

const TextComponent = () => {
  const { initialText } = useTextStore();
  const { isYes } = useIsYesStore();

  return (
    <div style={{ color: "#fff" }}>
      <Shuffle
        key={isYes ? "YEEEEEEEEEEEEEEEEEEEEEY!!"  :initialText}
        text={isYes ? "YEEEEEEEEEEEEEEEEEEEEEY!!"  :initialText}
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
        className="textFont"
      />
    </div>
  );
};

export default TextComponent;
