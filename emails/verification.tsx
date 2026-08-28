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

// Inline style constants mapped directly from COLOR_SCHEME.md.
// React Email does not support Tailwind — all tokens must be inlined.
const styles = {
  body:        { backgroundColor: "#000000", fontFamily: "system-ui, sans-serif", margin: 0 },
  container:   { maxWidth: "520px", margin: "40px auto", backgroundColor: "#000000", border: "1px solid #27272a", borderRadius: "12px", overflow: "hidden" as const },
  header:      { backgroundColor: "#18181b", borderBottom: "1px solid #27272a", padding: "12px 24px", display: "flex" as const, alignItems: "center" as const },
  headerLabel: { fontFamily: "ui-monospace, monospace", fontSize: "11px", color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: 0 },
  dot:         { display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", marginRight: "8px" },
  body_inner:  { padding: "32px 24px" },
  eyebrow:     { fontFamily: "ui-monospace, monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.15em", textTransform: "uppercase" as const, margin: "0 0 16px" },
  heading:     { fontFamily: "system-ui, sans-serif", fontSize: "20px", fontWeight: 600, color: "#f4f4f5", margin: "0 0 12px", lineHeight: "1.3" },
  body_text:   { fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#a1a1aa", lineHeight: "1.6", margin: "0 0 24px" },
  button:      { backgroundColor: "#10b981", color: "#000000", fontFamily: "ui-monospace, monospace", fontWeight: 700, fontSize: "13px", borderRadius: "8px", padding: "12px 28px", textDecoration: "none", display: "inline-block" as const },
  hr:          { borderColor: "#27272a", margin: "28px 0" },
  token_label: { fontFamily: "ui-monospace, monospace", fontSize: "10px", color: "#71717a", textTransform: "uppercase" as const, letterSpacing: "0.1em", margin: "0 0 4px" },
  token_value: { fontFamily: "ui-monospace, monospace", fontSize: "13px", color: "#10b981", margin: "0 0 24px" },
  footer:      { fontFamily: "ui-monospace, monospace", fontSize: "11px", color: "#52525b", lineHeight: "1.5", margin: 0 },
  url_text:    { fontFamily: "ui-monospace, monospace", fontSize: "11px", color: "#71717a", wordBreak: "break-all" as const, margin: "8px 0 0" },
};

export default function VerificationEmail({ email, verifyUrl, referralToken }: VerificationEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Verify your Cortlet waitlist registration — secure node access pending.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Terminal chrome header */}
          <Section style={styles.header}>
            <span style={styles.dot} />
            <Text style={styles.headerLabel}>cortlet://secure-node-access — VERIFY TERMINAL</Text>
          </Section>

          {/* Main content */}
          <Section style={styles.body_inner}>
            <Text style={styles.eyebrow}>Access Request Received</Text>
            <Text style={styles.heading}>Confirm your secure node vector token.</Text>
            <Text style={styles.body_text}>
              A waitlist registration was submitted for <strong style={{ color: "#f4f4f5" }}>{email}</strong>.
              Click the button below to verify your identity and activate your position in the queue.
            </Text>

            <Button href={verifyUrl} style={styles.button}>
              Verify Registration →
            </Button>

            <Hr style={styles.hr} />

            {/* Referral token display */}
            <Text style={styles.token_label}>referral_token</Text>
            <Text style={styles.token_value}>{referralToken}</Text>

            <Text style={styles.footer}>
              If you did not request access to Cortlet, you can safely ignore this message.
              This link expires after first use.
            </Text>
            <Text style={styles.url_text}>{verifyUrl}</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
