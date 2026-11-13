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
          <div className={styles.modelInner}>
            <h2 className={styles.sectionLabel}>Our Model</h2>
            <StrategicModel />
          </div>
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

        {/* Progress */}
        <section className={styles.progressSection}>
          <h2 className={styles.progressTitle}>Our Progress</h2>
          <p className={styles.progressBody}>
            The IRS granted the Foundation tax exempt status under Section
            501(c)(3), which means gifts to the Foundation are tax deductible to
            the full extent the law allows.
          </p>
        </section>

        {/* Newsletter */}
        <section className={styles.newsletterSection}>
          <h2 className={styles.sectionLabel}>Stay Updated</h2>
          <p className={styles.newsletterBody}>
            Sign up to stay informed about upcoming programs and events.
          </p>
          <SubscriptionForm />
        </section>
      </main>
    </div>
  );
};
