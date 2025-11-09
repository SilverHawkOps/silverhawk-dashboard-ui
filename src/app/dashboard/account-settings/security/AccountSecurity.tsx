import Input from '@/components/form/input/InputField'
import Button from '@/components/ui/button/Button'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AccountSecurity = () => {
    return (
        <div>
            {/* Main page */}
            <div>
                <h1 className='text-2xl font-semibold mb-2'>Account Security Settings</h1>

                <p>Manage your account security settings here.</p>

                <div className='mt-6 border rounded-lg'>
                    <div className='bg-gray-100 p-4 rounded-t-lg border-b'>
                        <h4 className='font-semibold'>PASSWORD</h4>
                    </div>

                    <div className=''>
                        <p className='flex items-center bg-blue-200 text-blue-500 p-3 gap-2'>
                            <InfoIcon size={20} /> Changing your password will log you out of all other sessions.
                        </p>

                        <div className=''>
                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Current Password</p>
                                    <span className='text-sm text-gray-600'>Your current password</span>
                                </div>

                                <div>
                                    <Input type="password" placeholder="Enter current password" />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>New Password</p>
                                </div>

                                <div>
                                    <Input type="password" placeholder="Enter new password" />
                                </div>
                            </div>


                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Verify New Password</p>
                                    <span className='text-sm text-gray-600'>Re-enter your new password</span>
                                </div>

                                <div>
                                    <Input type="password" placeholder="Enter new password again" />
                                </div>
                            </div>

                            {/* button at end */}
                            <div className='flex justify-end p-4'>
                                <div>
                                    <Button>Change Password</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 border rounded-lg'>
                    <div className='bg-gray-100 p-4 rounded-t-lg border-b'>
                        <h4 className='font-semibold'>SESSIONS</h4>
                    </div>

                    <div className=''>
                        <div className=''>
                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Sign out of all devices</p>
                                    <span className='text-sm text-gray-600'>Signing out of all devices will sign you out of this device as well</span>
                                </div>

                                <div className='flex justify-end'>
                                    <Button variant='outline'>Sign out of all devices</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 border rounded-lg'>
                    <div className='bg-gray-100 p-4 rounded-t-lg border-b'>
                        <h4 className='font-semibold'>TWO-FACTOR AUTHENTICATION</h4>
                    </div>

                    <div className=''>
                        <div className=''>
                            <div className='grid grid-cols-2 gap-4 mt-4 border-b p-4'>
                                <div>
                                    <p className='text-md'>Authenticator App</p>
                                    <span className='text-sm text-gray-600'>An authenticator application that supports TOTP {"("}like Google Authenticator or Authy or 1Password{")"} can be used to access your account securely using a token and secret key. A new token is generated every 30 seconds</span>
                                </div>

                                <div className='flex justify-end'>
                                    <Link href={'/dashboard/account-settings/security/mfa/totp/enroll'} >Enable</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSecurity  