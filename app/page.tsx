import Image from "next/image";
import styles from "./page.module.css";

const StrategicModel = () => (
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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header */}
        <section className={styles.header}>
          <Image
            src="/logo/jktf-logo.svg"
            alt="James &amp; Kayla Thomas Foundation"
            width={400}
            height={250}
            priority
            className={styles.logo}
          />
        </section>

        {/* Strategic Model */}
        <section className={styles.modelSection}>
          <h2 className={styles.sectionLabel}>How We Invest in People</h2>
          <StrategicModel />
        </section>

        {/* Mission */}
        <section className={styles.missionSection}>
          <h2 className={styles.sectionLabel}>Our Mission</h2>
          <p className={styles.missionBody}>
            The James &amp; Kayla Thomas Foundation was built on a simple
            belief, that people, when given the right resources, opportunities,
            and support, can transform their lives and their communities. We
            exist to bridge gaps, amplify voices, and invest in the kind of
            change that lasts. Through education, media, health, and community
            development, we are committed to building a foundation that serves
            people first.
          </p>
        </section>

        {/* Programs */}
        <section className={styles.programsSection}>
          <h2 className={styles.programsTitle}>
            We are actively developing our inaugural programs.
          </h2>
          <p className={styles.programsBody}>
            Programming across all four focus areas is in development. Check
            back soon for ways to get involved.
          </p>
        </section>
      </main>
    </div>
  );
}
