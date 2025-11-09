"use client";

import React from "react";

export default function MFADocumentationPage() {
  return (
    <div className="mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      {/* ===== Header ===== */}
      <header className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Multi-Factor Authentication (MFA)
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Strengthen your SilverHawk APM account with a second layer of security.
        </p>
      </header>

      {/* ===== Section: Overview ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          Multi-Factor Authentication (MFA), or Two-Factor Authentication (2FA), requires a user to
          present more than one type of verification during login. It protects against
          password-related attacks like brute-force, credential stuffing, and password spraying.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700 dark:text-gray-300">
          <li>Provides a second layer of authentication beyond your password.</li>
          <li>Prevents most unauthorized logins even if passwords are compromised.</li>
          <li>Compatible with major TOTP-based apps such as Google Authenticator and Authy.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          SilverHawk supports Time-based One-Time Password (TOTP) authentication using standard
          authenticator apps like Google Authenticator, Authy, Microsoft Authenticator, and
          1Password.
        </p>
      </section>

      {/* ===== Section: Capabilities ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Capabilities
        </h2>

        <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
              ✅ MFA for SilverHawk Accounts
            </h3>
            <p>
              MFA can be enabled for any user account that signs in with an email and password.
              Accounts authenticated via SSO (e.g., Google, GitHub) must configure MFA through their
              Identity Provider (IdP).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
              Opt-in MFA
            </h3>
            <p>
              Any user can enable MFA at any time from Personal Settings → Security → Multi-Factor
              Authentication. Once enabled, MFA will be required during every login.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
              Mandatory MFA (Admin Controlled)
            </h3>
            <p>
              Organization administrators can enforce MFA for all team members who log in via
              email/password. When enabled, all users must register an MFA device before accessing
              the SilverHawk dashboard.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
              Authenticator App Support
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Authenticator</li>
              <li>Authy</li>
              <li>Microsoft Authenticator</li>
              <li>1Password</li>
              <li>Duo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Section: Limitations ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>MFA is not available for users who authenticate exclusively through SSO.</li>
          <li>
            MFA does not protect against all attack vectors — for example, if an attacker gains
            access to your email, they may be able to reset MFA.
          </li>
          <li>Each SilverHawk account can have only one registered authenticator app at a time.</li>
          <li>
            Recovery codes must be securely saved; they cannot be regenerated once setup is complete.
          </li>
        </ul>
      </section>

      {/* ===== Section: Prerequisites ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Prerequisites
        </h2>
        <p className="mb-2">Before setting up MFA:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          <li>You must be logged in with your email and password.</li>
          <li>Users logged in through SSO will not see MFA options in settings.</li>
        </ul>
      </section>

      {/* ===== Section: Configure MFA ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Configure MFA for Your Account
        </h2>

        <h3 className="font-semibold text-lg mb-1">Navigate to the MFA Settings</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Log in to your SilverHawk account.</li>
          <li>Go to Personal Settings → Security → Multi-Factor Authentication.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-1">Enable MFA</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Click Enable MFA.</li>
          <li>SilverHawk generates a unique secret key and QR code.</li>
          <li>Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.).</li>
          <li>Your app will begin generating 6-digit TOTP codes.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-1">Verify Setup</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Enter the latest 6-digit code from your app into the verification prompt.</li>
          <li>Click Verify & Enable.</li>
          <li>If the code is correct, MFA setup completes successfully.</li>
        </ul>

        <p className="italic text-sm text-blue-700 dark:text-blue-400">
          💡 Tip: Save your recovery codes in a secure location — they allow you to regain access if
          you lose your device.
        </p>
      </section>

      {/* ===== Section: Disable MFA ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Disable MFA
        </h2>
        <p className="mb-3">
          You can disable MFA at any time by verifying your current TOTP code.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Go to Personal Settings → Security → Multi-Factor Authentication.</li>
          <li>Click Disable MFA.</li>
          <li>Enter your current 6-digit code to confirm your identity.</li>
          <li>Once verified, MFA will be disabled for your account.</li>
        </ul>
      </section>

      {/* ===== Section: Admin MFA Status ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          View a User’s MFA Status (Admin)
        </h2>
        <p className="mb-2">
          Administrators can view whether users in their organization have MFA enabled:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Navigate to Team Settings → Users.</li>
          <li>The MFA Status column shows whether each user has configured MFA.</li>
          <li>You can also click a user’s profile to view detailed MFA status.</li>
        </ul>
      </section>

      {/* ===== Section: MFA Recovery ===== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          MFA Recovery
        </h2>
        <p className="mb-3">
          If you lose access to your authenticator app, SilverHawk provides multiple recovery
          methods.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Using Recovery Codes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>During login, click Don’t have access to your authenticator?</li>
            <li>Enter one of your saved recovery codes.</li>
            <li>Each recovery code can be used only once.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Using Recovery Email Link</h3>
          <p>If you’ve lost both your authenticator and recovery codes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>On the login screen, select Get a one-time recovery link via email.</li>
            <li>Check your inbox for a message titled: “SilverHawk Account Recovery Link”.</li>
            <li>Click the Log in to SilverHawk link in the email.</li>
            <li>You’ll be logged in securely and prompted to reconfigure MFA.</li>
          </ul>
        </div>
      </section>

      {/* ===== Section: Security Recommendations ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Security Recommendations
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Store your recovery codes in a password manager or secure location.</li>
          <li>Do not share your secret key or QR code with anyone.</li>
          <li>Re-enable MFA immediately if your device is lost or stolen.</li>
          <li>Use strong, unique passwords along with MFA for maximum protection.</li>
        </ul>
      </section>
    </div>
  );
}
