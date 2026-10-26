"use client";

import { useState } from "react";

import styles from "./SubscriptionForm.module.css";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

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
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        console.log("Form submitted successfully:", result);

        setSubmitStatus("success");

        resetSubmitStatus();

        clearForm();

        // TODO: trigger the confirmation email API call. jktfoundation.org
        // is already verified in Resend; this needs the confirmation email
        // component and its route ported across from slimkat-media.
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
    </div>
  );
};
