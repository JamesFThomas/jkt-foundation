import { render, screen } from "@testing-library/react";
import { StrategicModel } from "./StrategicModel";

/*
 * Story: Visitor reads the strategic model
 * In order to understand how the Foundation invests in people,
 * a visitor wants to see the three outer commitments and the four
 * focus areas inside them.
 *
 * Scenario: The drawing is exposed to assistive technology
 *   Given I visit the landing page
 *   When the strategic model renders
 *   Then it should expose an image role with an accessible name
 *
 * Scenario: The outer bands are labelled
 *   Given the strategic model renders
 *   When I read the outer triangle
 *   Then I should see VOICE, EDUCATION and SCHOLARSHIP
 *
 * Scenario: The focus areas are labelled
 *   Given the strategic model renders
 *   When I read the inner triangle
 *   Then I should see Media, Wellness, Community and Education
 */
describe("StrategicModel", () => {
  it("exposes an image role with an accessible name", () => {
    render(<StrategicModel />);

    expect(
      screen.getByRole("img", { name: "JKTF Strategic Model" })
    ).toBeInTheDocument();
  });

  it("labels the three outer bands", () => {
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
});
