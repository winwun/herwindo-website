import { useEffect, useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export type Season = "spring" | "summer" | "autumn" | "winter";

/**
 * Northern-hemisphere meteorological seasons, which is what Madrid goes by.
 * getMonth() is zero-based: 0 = January.
 */
export function getSeason(date: Date): Season {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return "spring"; // Mar-May
  if (month >= 5 && month <= 7) return "summer"; // Jun-Aug
  if (month >= 8 && month <= 10) return "autumn"; // Sep-Nov
  return "winter"; // Dec-Feb
}

const GLYPHS: Record<Season, string[]> = {
  spring: ["🌸", "🌼", "🌷", "🌸"],
  summer: ["✦", "✧", "◦"],
  autumn: ["🍂", "🍁", "🍃"],
  winter: ["❅", "❆", "❄"],
};

const PARTICLE_COUNT = 14;

/**
 * Spread the particles across the header deterministically rather than at
 * random, so they never jump between renders. The negative delays start each
 * one mid-flight, so the header is already full on first paint instead of
 * filling from the top.
 */
function particleStyle(index: number) {
  return {
    left: `${(index * 7 + 3) % 100}%`,
    fontSize: `${0.9 + ((index * 37) % 10) / 10}rem`,
    animationDuration: `${9 + ((index * 53) % 7)}s`,
    animationDelay: `-${((index * 31) % 11)}s`,
    opacity: 0.45 + ((index * 17) % 5) / 10,
  } as const;
}

export default function SeasonalDecor() {
  // Resolved after mount, never during render: computing the date while
  // rendering would bake the build-time season into the static HTML and
  // mismatch on hydration.
  const [season, setSeason] = useState<Season | null>(null);

  useEffect(() => {
    setSeason(getSeason(new Date()));
  }, []);

  if (season === null) return null;

  const glyphs = GLYPHS[season];

  return (
    <div className={clsx(styles.layer, styles[season])} aria-hidden="true">
      {season === "summer" && (
        <>
          <div className={styles.sun} />
          <div className={styles.haze} />
        </>
      )}
      {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
        <span
          key={index}
          className={styles.particle}
          style={particleStyle(index)}
        >
          {glyphs[index % glyphs.length]}
        </span>
      ))}
    </div>
  );
}
