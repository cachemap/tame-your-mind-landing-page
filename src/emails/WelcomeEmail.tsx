import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  firstName: string;
}

export function WelcomeEmail({ firstName }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the waitlist! Your dev career transformation starts now.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Hey {firstName}! 👋</Heading>
          
          <Text style={text}>
            You're officially on the waitlist. This is the first step toward becoming the kind of developer companies actually want to hire.
          </Text>

          <Section style={highlightBox}>
            <Text style={highlightText}>
              <strong>What happens next?</strong>
            </Text>
            <Text style={highlightText}>
              Over the next 5 days, you'll receive our crash course on building senior-level thinking — completely free.
            </Text>
          </Section>

          <Text style={text}>
            Here's what's coming your way:
          </Text>

          <ul style={list}>
            <li style={listItem}>Day 1: The mindset shift that separates juniors from seniors</li>
            <li style={listItem}>Day 2: How to build a personal knowledge system</li>
            <li style={listItem}>Day 3: Code review skills that boost clarity</li>
            <li style={listItem}>Day 4: Working with AI the right way</li>
            <li style={listItem}>Day 5: Interview strategies that actually work</li>
          </ul>

          <Text style={text}>
            The market is crowded, but you just took action. That already puts you ahead of most people still paralyzed by indecision.
          </Text>

          <Text style={text}>
            Keep an eye on your inbox. The first lesson drops soon.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Questions? Just reply to this email. We read everything.
          </Text>

          <Text style={footer}>
            — The Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0f1419",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#1a1f26",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
  borderRadius: "8px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700" as const,
  lineHeight: "1.3",
  margin: "0 0 24px",
};

const text = {
  color: "#d1d5db",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const highlightBox = {
  backgroundColor: "#22c55e15",
  borderLeft: "4px solid #22c55e",
  padding: "16px 20px",
  margin: "24px 0",
  borderRadius: "0 8px 8px 0",
};

const highlightText = {
  color: "#d1d5db",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 8px",
};

const list = {
  color: "#d1d5db",
  fontSize: "15px",
  lineHeight: "1.8",
  margin: "0 0 24px",
  paddingLeft: "20px",
};

const listItem = {
  margin: "0 0 8px",
};

const hr = {
  borderColor: "#2d3748",
  margin: "32px 0",
};

const footer = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 8px",
};

export default WelcomeEmail;

