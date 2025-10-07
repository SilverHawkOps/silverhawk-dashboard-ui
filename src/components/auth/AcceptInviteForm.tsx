"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import { useAcceptUserInviteMutation } from "@/services/api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function AcceptInviteForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptUserInvite, { isLoading, isSuccess, error }] =
    useAcceptUserInviteMutation();

  console.log(isLoading, isSuccess, error)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await acceptUserInvite({ name: name, password: password, token: token }).unwrap();
      localStorage.setItem("token", res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to home
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Create your password
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <Label>
                    Name<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>

                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    {isLoading ? "Saving..." : "Save Password"}
                  </button>
                </div>
                {error && <p style={{ color: "red" }}>{error?.data?.message}</p>}
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Already have an account?
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
