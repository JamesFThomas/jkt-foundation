import { SubscriptionConfirmationEmail } from "./SubscriptionConfirmationEmail";

/*
 * Story: A new subscriber receives a confirmation email
 * In order to know their signup worked and what the Foundation is building,
 * a visitor who subscribes wants a branded confirmation email in their inbox.
 *
 * Scenario: The subscriber's address is greeted
 *   Given a subscriber email address
 *   When the template is rendered
 *   Then the greeting should address that email
 *
 * Scenario: The logo is embedded by content id
 *   Given a logo content id
 *   When the template is rendered
 *   Then the image should reference that content id
 *
 * Scenario: The Foundation's programs are described
 *   Given the template is rendered
 *   When the body is read
 *   Then it should name the four focus areas and sign off as the Foundation
 */
describe("SubscriptionConfirmationEmail", () => {
  const logoContentId = "jktf_logo";
  const email = "subscriber@example.com";

  it("greets the subscriber by their email address", () => {
    const html = SubscriptionConfirmationEmail(email, logoContentId);

    expect(html).toContain(`Hi ${email},`);
  });

  it("embeds the logo by content id", () => {
    const html = SubscriptionConfirmationEmail(email, logoContentId);

    expect(html).toContain(`src="cid:${logoContentId}"`);
    expect(html).toContain('alt="James & Kayla Thomas Foundation"');
  });

  it("describes the Foundation's focus areas and signs off", () => {
    const html = SubscriptionConfirmationEmail(email, logoContentId);

    expect(html).toContain("media, wellness, education,");
    expect(html).toContain("With purpose,");
    expect(html).toContain("James &amp; Kayla Thomas Foundation");
  });
});
