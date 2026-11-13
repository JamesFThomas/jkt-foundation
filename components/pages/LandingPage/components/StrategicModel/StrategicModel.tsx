import styles from "./StrategicModel.module.css";

export const StrategicModel = () => (
  <svg
    width="100%"
    viewBox="0 0 480 480"
    role="img"
    aria-label="JKTF Strategic Model"
    className={styles.model}
  >
    <title>JKTF Strategic Model</title>
    <desc>
      Royal blue ring labeled VOICE, EDUCATION, SCHOLARSHIP around a light blue
      band divided into four focus areas: Media, Wellness, Community,
      Education. The centre reads INVESTING IN PEOPLE.
    </desc>

    <defs>
      <path id="voiceArc" d="M41,333 A220,220 0 0 1 221,21" fill="none" />
      <path id="educationArc" d="M259,21 A220,220 0 0 1 439,333" fill="none" />
      <path
        id="scholarshipArc"
        d="M60,366 A220,220 0 0 0 420,366"
        fill="none"
      />
    </defs>

    {/* Focus area band */}
    <circle cx="240" cy="240" r="142" className={styles.band} />

    {/* Dividers, running the full depth of the band */}
    <line x1="240" y1="40" x2="240" y2="156" className={styles.divider} />
    <line x1="324" y1="240" x2="440" y2="240" className={styles.divider} />
    <line x1="240" y1="324" x2="240" y2="440" className={styles.divider} />
    <line x1="40" y1="240" x2="156" y2="240" className={styles.divider} />

    {/* Centre */}
    <circle cx="240" cy="240" r="84" className={styles.core} />

    {/* Outer ring */}
    <circle cx="240" cy="240" r="220" className={styles.outerRing} />

    {/* Outer ring labels */}
    <text className={styles.bandLabel}>
      <textPath href="#voiceArc" startOffset="50%">VOICE</textPath>
    </text>
    <text className={styles.bandLabel}>
      <textPath href="#educationArc" startOffset="50%">EDUCATION</textPath>
    </text>
    <text className={styles.bandLabel}>
      <textPath href="#scholarshipArc" startOffset="50%">SCHOLARSHIP</textPath>
    </text>

    {/* Focus area labels */}
    <text x="140" y="140" className={styles.pillarLabel}>
      Media
    </text>
    <text x="340" y="140" className={styles.pillarLabel}>
      Wellness
    </text>
    <text x="140" y="340" className={styles.pillarLabel}>
      Community
    </text>
    <text x="340" y="340" className={styles.pillarLabel}>
      Education
    </text>

    {/* Centre label */}
    <text x="240" y="240" className={styles.coreLabel}>
      <tspan x="240" dy="-0.55em">
        INVESTING
      </tspan>
      <tspan x="240" dy="1.5em">
        IN PEOPLE
      </tspan>
    </text>
  </svg>
);
