import { render, screen } from "@testing-library/react";
import { StrategicModel } from "./StrategicModel";

/*
 * Story: Visitor reads the strategic model
 * In order to understand how the Foundation invests in people,
 * a visitor wants to see the three outer commitments, the four
 * focus areas inside them, and the promise at the centre.
 *
 * Scenario: The drawing is exposed to assistive technology
 *   Given I visit the landing page
 *   When the strategic model renders
 *   Then it should expose an image role with an accessible name
 *
 * Scenario: The outer ring is labelled
 *   Given the strategic model renders
 *   When I read the outer ring
 *   Then I should see VOICE, EDUCATION and SCHOLARSHIP
 *
 * Scenario: The focus areas are labelled
 *   Given the strategic model renders
 *   When I read the band inside the ring
 *   Then I should see Media, Wellness, Community and Education
 *
 * Scenario: The centre carries the tagline
 *   Given the strategic model renders
 *   When I read the centre circle
 *   Then I should see INVESTING IN PEOPLE
 */
describe("StrategicModel", () => {
  it("exposes an image role with an accessible name", () => {
    render(<StrategicModel />);

    expect(
      screen.getByRole("img", { name: "JKTF Strategic Model" })
    ).toBeInTheDocument();
  });

  it("labels the three outer commitments", () => {
    render(<StrategicModel />);

    ["VOICE", "SCHOLARSHIP"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("labels the four focus areas", () => {
    render(<StrategicModel />);

    ["Media", "Wellness", "Community"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("carries the tagline in the centre", () => {
    render(<StrategicModel />);

    ["INVESTING", "IN PEOPLE"].forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
  });
});
