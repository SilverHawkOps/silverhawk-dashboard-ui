"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

interface QRCodeData {
    qrCode?: string;
    secret?: string;
}

export default function AccountSettingsCard() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecretKeyOpen, setIsSecretKeyOpen] = useState(false);
    const [mfaEnabled, setMfaEnabled] = useState(false);
    const [qrCode, setQrCode] = useState<QRCodeData>({});
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);
    const [disableToken, setDisableToken] = useState("");

    // Fetch MFA status (mocked for now)
    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await fetch("/v1/auth/profile", {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            });
            const response = await res.json();
            console.log(response.data.user)
            if (res.ok) {
                setMfaEnabled(response.data.user.isMfaEnabled);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleEnableMfa = async () => {
        setLoading(true);
        try {
            const res = await fetch("/v1/auth/mfa-enable", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            });
            const response = await res.json();
            setQrCode(response.data);
            setIsOpen(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyMfa = async () => {
        const res = await fetch("/v1/auth/verify-mfa", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            body: JSON.stringify({ token }),
        });
        const data = await res.json();
        if (res.ok) {
            alert("✅ MFA enabled successfully!");
            setMfaEnabled(true);
            setIsOpen(false);
        } else {
            alert(data.message || "Invalid token");
        }
    };


    const handleOpenDisableModal = () => {
        setIsDisableModalOpen(true);
    };

    const handleConfirmDisableMfa = async () => {
        try {

            if(!disableToken || disableToken.length !== 6){
                alert("Please enter a valid 6-digit TOTP code.");
                return;
            }

            const res = await fetch("/v1/auth/mfa-disable", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ token: disableToken }),
            });

            const data = await res.json();
            if (res.ok) {
                alert("⚠️ MFA disabled successfully.");
                setMfaEnabled(false);
                setIsDisableModalOpen(false);
                setDisableToken("");
            } else {
                alert(data.message || "Invalid TOTP code");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to disable MFA.");
        }
    };

    return (
        <>
            <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Account Security
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Manage your Multi-Factor Authentication (MFA) settings.
                        </p>
                    </div>

                    {mfaEnabled ? (
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={handleOpenDisableModal}
                            className="text-black hover:bg-red-600 hover:text-white border-red-600"
                        >
                            Disable MFA
                        </Button>
                    ) : (
                        <Button size="sm" onClick={handleEnableMfa} disabled={loading}>
                            {loading ? "Generating QR..." : "Enable MFA"}
                        </Button>
                    )}
                </div>

                {isOpen && (
                    <div className="rounded-3xl dark:bg-gray-900 mt-4">
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Scan this QR code using any authenticator apps and browser extensions like 1Password, Authy, Microsoft Authenticator, etc. generate one-time passwords that are used as a second factor to verify your identity when prompted during sign-in.
                        </p>

                        {qrCode?.qrCode ? (
                            <div className="mb-4">
                                <Image src={qrCode?.qrCode} width={200} height={200} alt="QR Code" />
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Scan this QR code with your authenticator app.

                                    Unable to scan? You can use the <span className="font-medium text-indigo-400 underline cursor-pointer" onClick={() => setIsSecretKeyOpen(true)}>setup key {" "}</span>
                                    to manually configure your authenticator app.


                                </p>
                            </div>
                        ) : (
                            <p className="text-center text-gray-400">Loading QR...</p>
                        )}

                        <div className="mt-4">
                            <Label>Verify the code from the app</Label>
                            <Input
                                type="text"
                                defaultValue={token}
                                onChange={(e) => setToken(e.target.value)}
                                placeholder="XXXXXX"
                            />
                        </div>

                        <p className="mt-3 text-sm text-red-500 bg-red-100 p-4 rounded-md border border-red-200 dark:bg-red-900/50 dark:border-red-800 dark:text-red-400">
                            Two-factor code verification failed. Please try again.
                        </p>

                        <div className="flex justify-start gap-3 mt-6">
                            <Button size="sm" variant="outline" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" onClick={handleVerifyMfa}>
                                Verify & Enable
                            </Button>
                        </div>
                    </div>
                )}
            </div>



            <Modal isOpen={isSecretKeyOpen} onClose={() => setIsSecretKeyOpen(false)}>
                <div className="mt-6 py-5 px-4 dark:border-gray-700 dark:bg-gray-900">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-2">
                        Your Two-Factor Secret
                    </h4>
                    <p className="text-sm text-gray-500 mb-3 dark:text-gray-400">
                        Save this backup code in a secure place. You can use it to recover access if
                        you lose your authenticator app.
                    </p>

                    <div className="rounded-md bg-gray-100 px-4 py-3 font-mono text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        <span className="truncate">{qrCode?.secret}</span>
                    </div>

                    <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                        ⚠️ Do not share this secret with anyone.
                    </p>
                </div>
            </Modal>


            {/* Disable MFA Confirmation Modal */}
            <Modal isOpen={isDisableModalOpen} onClose={() => setIsDisableModalOpen(false)}>
                <div className="p-5 dark:bg-gray-900 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Disable Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Disabling MFA will reduce the security of your account. Please confirm
                        your identity by entering your current 6-digit code.
                    </p>

                    <Label>Enter your TOTP code</Label>
                    <Input
                        type="text"
                        placeholder="XXXXXX"
                        defaultValue={disableToken}
                        onChange={(e) => setDisableToken(e.target.value)}
                        className="mb-4"
                    />

                    <div className="flex justify-end gap-3">
                        <Button size="sm" variant="outline" onClick={() => setIsDisableModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white" onClick={handleConfirmDisableMfa}>
                            Confirm & Disable
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
