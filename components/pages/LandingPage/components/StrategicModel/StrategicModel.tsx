import styles from "./StrategicModel.module.css";

export const StrategicModel = () => (
  <svg
    width="100%"
    viewBox="0 0 780 640"
    role="img"
    aria-label="JKTF Strategic Model"
    className={styles.model}
  >
    <title>JKTF Strategic Model</title>
    <desc>
      Triangle with royal blue outer bands labeled VOICE, EDUCATION,
      SCHOLARSHIP. Inner triangle divided into four light blue sections: Media,
      Wellness, Community, Education.
    </desc>

    <defs>
      <clipPath id="innerClip">
        <polygon points="390,110 160,510 620,510" />
      </clipPath>
    </defs>

    {/* Outer triangle */}
    <polygon points="390,30 80,570 700,570" className={styles.outerTriangle} />

    {/* Inner triangle white base */}
    <polygon points="390,110 160,510 620,510" className={styles.innerBase} />

    {/* Four inner sections */}
    <polygon
      points="390,110 236,377 390,377"
      clipPath="url(#innerClip)"
      className={styles.sectionUpper}
    />
    <polygon
      points="390,110 390,377 544,377"
      clipPath="url(#innerClip)"
      className={styles.sectionUpper}
    />
    <polygon
      points="236,377 160,510 390,510 390,377"
      clipPath="url(#innerClip)"
      className={styles.sectionLower}
    />
    <polygon
      points="390,377 390,510 620,510 544,377"
      clipPath="url(#innerClip)"
      className={styles.sectionLower}
    />

    {/* Dividing lines */}
    <line
      x1="390"
      y1="110"
      x2="390"
      y2="510"
      clipPath="url(#innerClip)"
      className={styles.divider}
    />
    <line
      x1="236"
      y1="377"
      x2="544"
      y2="377"
      clipPath="url(#innerClip)"
      className={styles.divider}
    />

    {/* Inner triangle border */}
    <polygon points="390,110 160,510 620,510" className={styles.innerBorder} />

    {/* Outer band labels */}
    <text
      x="252"
      y="305"
      textAnchor="middle"
      dominantBaseline="central"
      transform="rotate(-58,252,305)"
      className={styles.bandLabel}
    >
      VOICE
    </text>
    <text
      x="528"
      y="305"
      textAnchor="middle"
      dominantBaseline="central"
      transform="rotate(58,528,305)"
      className={styles.bandLabel}
    >
      EDUCATION
    </text>
    <text
      x="390"
      y="544"
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.bandLabel}
    >
      SCHOLARSHIP
    </text>

    {/* Inner section labels */}
    <text
      x="334"
      y="282"
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.pillarLabel}
    >
      Media
    </text>
    <text
      x="446"
      y="282"
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.pillarLabel}
    >
      Wellness
    </text>
    <text
      x="294"
      y="444"
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.pillarLabel}
    >
      Community
    </text>
    <text
      x="486"
      y="444"
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.pillarLabel}
    >
      Education
    </text>
  </svg>
);
