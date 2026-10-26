import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

/*
 * Story: Visitor lands on the Foundation site
 * In order to learn what the Foundation does and keep in touch,
 * a visitor wants to see the mark, the strategic model, the mission,
 * where programs stand, and a way to leave their email.
 *
 * Scenario: The Foundation mark is shown
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should see the Foundation logo
 *
 * Scenario: The strategic model is shown
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should see the strategic model under its heading
 *
 * Scenario: The mission is stated
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should see the mission section
 *
 * Scenario: Programs are described as in development
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should be told programming is still being developed
 *
 * Scenario: A visitor can sign up for updates
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should see the subscription form
 */
describe("LandingPage", () => {
  it("shows the Foundation logo", () => {
    render(<LandingPage />);

    expect(
      screen.getByAltText("James & Kayla Thomas Foundation")
    ).toBeInTheDocument();
  });

  it("shows the strategic model under its heading", () => {
    render(<LandingPage />);

    expect(screen.getByText("How We Invest in People")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "JKTF Strategic Model" })
    ).toBeInTheDocument();
  });

  it("states the mission", () => {
    render(<LandingPage />);

    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(
      screen.getByText(/built on a simple belief/)
    ).toBeInTheDocument();
  });

  it("describes programs as in development", () => {
    render(<LandingPage />);

    expect(
      screen.getByText(/actively developing our inaugural programs/)
    ).toBeInTheDocument();
  });

  it("offers a way to sign up for updates", () => {
    render(<LandingPage />);

    expect(screen.getByText("Stay Updated")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Subscribe" })
    ).toBeInTheDocument();
  });
});
