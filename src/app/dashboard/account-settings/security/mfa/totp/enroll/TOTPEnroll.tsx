"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";

const BASE_URL = "http://localhost:5500";

interface QRCodeData {
    qrCode?: string;
    secret?: string;
}

export default function TOTPEnroll() {
    const [mfaEnabled, setMfaEnabled] = useState(false);
    const [qrCode, setQrCode] = useState<QRCodeData>({});
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);

    console.log(mfaEnabled)

    // Fetch MFA status (mocked for now)
    useEffect(() => {
        fetchProfile();
        handleEnableMfa();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await fetch(`${BASE_URL}/v1/auth/profile`, {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            });
            const response = await res.json();
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
            const res = await fetch(`${BASE_URL}/v1/auth/mfa-enable`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            });
            const response = await res.json();
            setQrCode(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyMfa = async () => {

        if(!token) {
            alert("Enter Authenticator Token first!");
            return;
        }

        const res = await fetch(`${BASE_URL}/v1/auth/verify-mfa`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
            body: JSON.stringify({ token }),
        });
        const data = await res.json();
        if (res.ok) {
            alert("✅ MFA enabled successfully!");
            setMfaEnabled(true);
        } else {
            alert(data.message || "Invalid token");
        }
    };

    return (
        <>
            <div>
                <h1 className='text-2xl font-semibold mb-2'>Authenticator App</h1>

                <p>An authenticator application that supports TOTP {"("}like Google Authenticator or Authy or 1Password{")"} can be used to access your account securely using a token and secret key. A new token is generated every 30 seconds.</p>

                <div className='mt-6 border rounded-lg'>
                    <div className='bg-gray-100 p-4 rounded-t-lg border-b'>
                        <h4 className='font-semibold'>CONFIGURATION</h4>
                    </div>

                    <div className=''>
                        <div className=''>
                            <div className='my-4 border-b p-4'>
                                {loading? (
                                    <div className="mb-4 flex flex-col mx-auto">
                                        {qrCode?.qrCode && <Image src={qrCode?.qrCode} width={200} height={200} alt="QR Code" />}
                                        
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            Scan this QR code with your authenticator app.

                                            Unable to scan? You can use the <span className="font-medium text-gray-950 underline cursor-pointer">Authenticator Secret Key {" "}</span>
                                            to manually configure your authenticator app.


                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-400">Loading QR...</p>
                                )}
                            </div>

                            <div className='grid grid-cols-2 gap-4 my-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Authenticator Secret Key</p>
                                </div>

                                <div>
                                    <Input type="text" disabled defaultValue={qrCode?.secret} placeholder="Enter new password" />
                                </div>
                            </div>


                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Authenticator Code *</p>
                                </div>

                                <div>
                                    <Input type="text" placeholder="XXXXXX" defaultValue={token}
                                onChange={(e) => setToken(e.target.value)} />
                                </div>
                            </div>

                            {/* button at end */}
                            <div className='flex justify-end p-4'>
                                <div>
                                    <Button onClick={handleVerifyMfa}>Confirm</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
