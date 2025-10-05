import Image from 'next/image'
import React from 'react'

const DataNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
            <Image
                src="/images/icons/not-found.svg"
                alt="Logo"
                width={ 500 }
                height={ 500 }
            />
            <p className="italic mt-4 text-gray-500">There is not data found</p>
        </div>
    )
}

export default DataNotFound
