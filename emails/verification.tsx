import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Preview,
} from "@react-email/components";

interface VerificationEmailProps {
  email: string;
  verifyUrl: string;
  referralToken: string;
}

const styles = {
  body: {
    backgroundColor: "#000000",
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    margin: 0,
    padding: "24px 12px",
  },

  container: {
    maxWidth: "560px",
    margin: "0 auto",
    backgroundColor: "#09090b",
    border: "1px solid #27272a",
  },

  header: {
    padding: "18px 24px",
    borderBottom: "1px solid #27272a",
  },

  brand: {
    margin: 0,
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "#fafafa",
    lineHeight: "20px",
  },

  brandDot: {
    color: "#10b981",
  },

  bodyInner: {
    padding: "34px 24px 28px",
  },

  eyebrow: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    fontSize: "10px",
    color: "#10b981",
    letterSpacing: "1.4px",
    textTransform: "uppercase" as const,
    margin: "0 0 14px",
    lineHeight: "16px",
  },

  heading: {
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "32px",
    color: "#fafafa",
    margin: "0 0 14px",
  },

  bodyText: {
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontSize: "14px",
    color: "#a1a1aa",
    lineHeight: "24px",
    margin: "0 0 26px",
  },

  emailText: {
    color: "#fafafa",
    fontWeight: 600,
  },

  button: {
    backgroundColor: "#fafafa",
    color: "#09090b",
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    padding: "12px 22px",
    textDecoration: "none",
    display: "inline-block" as const,
  },

  hr: {
    borderColor: "#27272a",
    margin: "30px 0",
  },

  tokenLabel: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    fontSize: "10px",
    color: "#71717a",
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    margin: "0 0 6px",
    lineHeight: "16px",
  },

  tokenValue: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    fontSize: "12px",
    color: "#10b981",
    lineHeight: "20px",
    wordBreak: "break-all" as const,
    margin: "0 0 24px",
  },

  footer: {
    fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontSize: "12px",
    color: "#71717a",
    lineHeight: "20px",
    margin: 0,
  },

  urlLabel: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    fontSize: "10px",
    color: "#52525b",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "20px 0 6px",
    lineHeight: "16px",
  },

  urlText: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    fontSize: "10px",
    color: "#71717a",
    lineHeight: "18px",
    wordBreak: "break-all" as const,
    margin: 0,
  },
};

export default function VerificationEmail({
                                            email,
                                            verifyUrl,
                                            referralToken,
                                          }: VerificationEmailProps) {
  return (
      <Html lang="en">
        <Head />

        <Preview>
          Verify your email to join the Cortlet waitlist.
        </Preview>

        <Body style={styles.body}>
          <Container style={styles.container}>
            <Section style={styles.header}>
              <Text style={styles.brand}>
                <span style={styles.brandDot}>●</span>
                {"  "}
                Cortlet
              </Text>
            </Section>

            <Section style={styles.bodyInner}>
              <Text style={styles.eyebrow}>
                Email verification
              </Text>

              <Text style={styles.heading}>
                Confirm your place on the Cortlet waitlist.
              </Text>

              <Text style={styles.bodyText}>
                We received a waitlist request for{" "}
                <span style={styles.emailText}>{email}</span>.
                Verify your email below to confirm your registration.
              </Text>

              <Button href={verifyUrl} style={styles.button}>
                Verify email
              </Button>

              <Hr style={styles.hr} />

              <Text style={styles.tokenLabel}>
                Referral token
              </Text>

              <Text style={styles.tokenValue}>
                {referralToken}
              </Text>

              <Text style={styles.footer}>
                If you didn&apos;t request access to Cortlet, you can safely
                ignore this email.
              </Text>

              <Text style={styles.urlLabel}>
                Verification link
              </Text>

              <Text style={styles.urlText}>
                {verifyUrl}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
  );
}