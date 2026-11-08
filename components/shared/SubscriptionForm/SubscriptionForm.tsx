"use client";

import { useState } from "react";

import { HONEYPOT_FIELD } from "@/lib/security/formGuards";

import styles from "./SubscriptionForm.module.css";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "loading" | "rateLimited"
  >("idle");

  // Carries the honeypot value so it travels with the submission. A visitor
  // never reaches the input, so this stays empty for them.
  const [honeypot, setHoneypot] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const valuesAreValid = !emailError && emailPattern.test(email);

  const resetSubmitStatus = () => {
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  const clearForm = () => {
    setEmail("");
    setEmailError("");
    setTouched({ email: false });
  };

  const validateEmail = (email: string) => {
    let validated = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      validated = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("email@address.com format is required");
      validated = false;
    } else {
      setEmailError("");
    }
    return validated;
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    validateEmail(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (touched.email) {
      validateEmail(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validated = validateEmail(email);
    if (!validated) return;

    try {
      setSubmitStatus("loading");

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, [HONEYPOT_FIELD]: honeypot }),
      });

      // Status before body: a blocked request is answered by the edge with a
      // body that is not JSON, so parsing first would throw and the visitor
      // would see the generic error rather than the real reason. Nothing is
      // cleared, so retrying costs them no retyping.
      if (response.status === 429) {
        setSubmitStatus("rateLimited");

        resetSubmitStatus();

        return;
      }

      const result = await response.json();

      if (response.ok && result.status === "success") {
        console.log("Form submitted successfully:", result);

        setSubmitStatus("success");

        resetSubmitStatus();

        clearForm();
      } else {
        console.error("Form submission failed:", result);

        clearForm();

        setSubmitStatus("error");

        resetSubmitStatus();
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      clearForm();

      setSubmitStatus("error");

      resetSubmitStatus();
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email-input">
          Email
        </label>
        <div id="form-input-container" className={styles.inputRow}>
          <input
            id="email-input"
            className={styles.input}
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur()}
            onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="Enter your email"
          />
          <button
            id="subscribe-button"
            type="submit"
            disabled={!valuesAreValid || submitStatus === "loading"}
            className={styles.button}
          >
            Subscribe
          </button>
        </div>
        {/*
          Honeypot. A visitor never sees or reaches it, so a value means the
          submission came from something that read the DOM and filled every
          field it found.
        */}
        <input
          type="text"
          name={HONEYPOT_FIELD}
          className={styles.honeypot}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div id="email-error-container">
          {touched.email && emailError && (
            <p className={styles.error}>{emailError}</p>
          )}
        </div>
      </form>

      {submitStatus === "loading" && (
        <p className={styles.status}>Submitting...</p>
      )}

      {submitStatus === "success" && (
        <p className={`${styles.status} ${styles.success}`}>
          Thanks for subscribing!
        </p>
      )}

      {submitStatus === "error" && (
        <p className={`${styles.status} ${styles.failure}`}>
          Something went wrong. Please try again.
        </p>
      )}

      {submitStatus === "rateLimited" && (
        <p className={`${styles.status} ${styles.failure}`}>
          Too many attempts. Please wait a few minutes and try again.
        </p>
      )}
    </div>
  );
};
