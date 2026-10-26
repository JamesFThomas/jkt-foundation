import Image from "next/image";
import styles from "./LandingPage.module.css";
import { StrategicModel } from "./components/StrategicModel/StrategicModel";
import { SubscriptionForm } from "@/components/shared/SubscriptionForm/SubscriptionForm";

export const LandingPage = () => {
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

        {/* Newsletter */}
        <section className={styles.newsletterSection}>
          <h2 className={styles.sectionLabel}>Stay Updated</h2>
          <p className={styles.newsletterBody}>
            Leave your email and we will let you know when programs open.
          </p>
          <SubscriptionForm />
        </section>
      </main>
    </div>
  );
};
