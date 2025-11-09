import Button from '@/components/ui/button/Button'
import React from 'react'

const CloseAccount = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Close Account</h1>

            <p>This will permanently remove all associated data for your user. Any specified organizations will also be deleted.</p>

            <div className='bg-red-100 text-red-500 p-4 border border-red-500'>
                Closing your account is permanent action and cannot be undone!
            </div>

            <div className='mt-6 border rounded-lg'>
                <div className='bg-gray-100 p-4 rounded-t-lg border-b'>
                    <h4 className='font-semibold'>DELETE THE FOLLOWING ORGANIZATIONS</h4>
                </div>

            </div>


            <Button variant='outline' className='my-4'> Close Account</Button>

        </div>
    )
}

export default CloseAccount