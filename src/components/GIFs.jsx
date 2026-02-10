import React, { useEffect, useState } from "react";
import { useIsYesStore } from "../store/textStores";
const GIF_COUNT = 5;

export default function GIFs() {
  const { isYes } = useIsYesStore();
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (isYes) {
      const generated = Array.from({ length: GIF_COUNT }).map((_, i) => ({
        id: i + 1,
        top: Math.random() * 80 + 5,
        left: Math.random() * 80 + 5,
        delay: Math.random() * 0.4,
      }));
      setGifs(generated);
    } else {
      setGifs([]);
    }
  }, [isYes]);

  if (!isYes) return null;

  return (
    <div className="gif-scatter">
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={`${process.env.PUBLIC_URL}/${gif.id}.gif`}
          alt="Valentine gif"
          className="scatter-gif"
          style={{
            top: `${gif.top}%`,
            left: `${gif.left}%`,
            animationDelay: `${gif.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
