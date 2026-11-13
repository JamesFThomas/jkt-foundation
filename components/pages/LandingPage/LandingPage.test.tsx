import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

/*
 * Story: Visitor lands on the Foundation site
 * In order to learn what the Foundation does and keep in touch,
 * a visitor wants to see the mark, the strategic model, the mission,
 * where the Foundation stands, and a way to leave their email.
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
 * Scenario: Tax exempt status is announced
 *   Given I visit the landing page
 *   When the page renders
 *   Then I should be told the Foundation is a 501(c)(3)
 *
 * Scenario: A visitor can sign up for program updates
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

    expect(screen.getByText("Our Model")).toBeInTheDocument();
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

  it("announces tax exempt status", () => {
    render(<LandingPage />);

    expect(screen.getByText("Our Progress")).toBeInTheDocument();
    expect(
      screen.getByText(/tax exempt status under Section 501\(c\)\(3\)/)
    ).toBeInTheDocument();
  });

  it("offers a way to sign up for program updates", () => {
    render(<LandingPage />);

    expect(screen.getByText("Stay Updated")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Subscribe" })
    ).toBeInTheDocument();
  });
});
