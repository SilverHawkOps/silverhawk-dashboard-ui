"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLoginMutation, useVerifyMfaLoginMutation } from "@/services/authApi";

export default function SignInForm() {
  const router = useRouter();
  const [login, { isLoading: isLoggingIn, error: loginError }] = useLoginMutation();
  const [verifyMfaLogin, { isLoading: isVerifyingMfa, error: mfaError }] = useVerifyMfaLoginMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [mfaRequired, setMfaRequired] = useState(false);
  const [mfaCode, setMfaCode] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeFormInput = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignInSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      if (res.data.mfaRequired) {
        setMfaRequired(true);
        if (res.data.tempToken) {
          localStorage.setItem("tempToken", res.data.tempToken);
        }
        return;
      }

      const storage = isChecked ? localStorage : sessionStorage;
      storage.setItem("token", res.data.token);
      storage.setItem("user", JSON.stringify(res.data.user));
      const redirectUrl = localStorage.getItem("redirectAfterLogin") || "/dashboard";
      localStorage.removeItem("redirectAfterLogin");
      router.replace(redirectUrl);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleMfaSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const tempToken = localStorage.getItem("tempToken");
      if (!tempToken) throw new Error("Temporary token not found for MFA verification.");

      const res = await verifyMfaLogin({ code: mfaCode, tempToken }).unwrap();

      const storage = isChecked ? localStorage : sessionStorage;
      storage.setItem("token", res.data.token);
      storage.setItem("user", JSON.stringify(res.data.user));

      const redirectUrl = localStorage.getItem("redirectAfterLogin") || "/dashboard";
      localStorage.removeItem("redirectAfterLogin");
      router.replace(redirectUrl);
    } catch (err) {
      console.error("MFA Verification failed:", err);
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center flex-col min-h-screen flex-1 w-full mx-auto">
      <div className="bg-gray-200 p-16 max-w-2xl w-full">
        <div className="w-full mx-auto mb-5">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon /> Back to home
          </Link>
        </div>

        {/* MFA FORM */}
        {mfaRequired && (
          <div className="w-full">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm">Multi-Factor Authentication</h1>
            <p className="text-sm text-gray-500 mb-6">Enter the authentication code from your app.</p>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>Authentication Code *</Label>
                  <Input
                    placeholder="Enter code"
                    type="text"
                    defaultValue={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value)}
                    autoFocus={true}
                  />
                </div>
                <div>
                  <Button onClick={handleMfaSubmit} className="w-full" size="sm" disabled={isVerifyingMfa}>
                    {isVerifyingMfa ? "Verifying..." : "Verify"}
                  </Button>
                </div>
                {mfaError && <p className="text-red-500 text-sm">MFA failed. Try again.</p>}
              </div>
            </form>
          </div>
        )}

        {/* LOGIN FORM */}
        {!mfaRequired && (
          <div className="flex flex-col justify-center flex-1 w-full mx-auto">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm">Sign In</h1>
            <p className="text-sm text-gray-500 mb-6">Enter your credentials to continue.</p>

            <form>
              <div className="space-y-6">
                <div>
                  <Label>Email *</Label>
                  <Input
                    placeholder="info@gmail.com"
                    type="email"
                    defaultValue={formData.email}
                    onChange={(e) => onChangeFormInput("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Password *</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      defaultValue={formData.password}
                      onChange={(e) => onChangeFormInput("password", e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="text-sm text-gray-700">Keep me logged in</span>
                  </div>
                  <Link href="/reset-password" className="text-sm text-brand-500">
                    Forgot password?
                  </Link>
                </div>

                <Button onClick={handleSignInSubmit} className="w-full" size="sm" disabled={isLoggingIn}>
                  {isLoggingIn ? "Logging in..." : "Login"}
                </Button>

                {loginError && (
                  <p className="text-red-500 text-sm mt-2">
                    {("data" in loginError && loginError.data)
                      ? JSON.stringify(loginError.data)
                      : "Login failed"}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
