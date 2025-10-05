import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | SilverHawk APM",
  description:
    "Access your SilverHawk APM dashboard. Sign Up to monitor, optimize, and scale your applications with real-time insights and analytics.",
  keywords: [
    "SilverHawk",
    "APM",
    "Application Performance Monitoring",
    "Sign Up",
    "Register", "Registration",
    "Account creation",
    "Dashboard Login",
    "DevOps Monitoring",
  ],
  openGraph: {
    title: "Sign Up | SilverHawk APM",
    description:
      "Sign up to your SilverHawk account to access powerful monitoring, performance tracking, and infrastructure insights.",
    url: "https://yourdomain.com/signin",
    siteName: "SilverHawk APM",
    images: [
      {
        url: "https://yourdomain.com/images/og-signin.png",
        width: 1200,
        height: 630,
        alt: "SilverHawk APM Sign Up",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | SilverHawk APM",
    description:
      "Access your SilverHawk APM dashboard and stay on top of system performance and application monitoring.",
    images: [ "https://yourdomain.com/images/og-signin.png" ],
  },
};

export default function SignUp() {
  return <SignUpForm />;
}
