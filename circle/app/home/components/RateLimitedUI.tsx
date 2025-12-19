import React from 'react'

const RateLimitedUi = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex justify-center pt-6">
            <div className="h-20 w-[90%] max-w-2xl bg-gray-100 shadow-2xl rounded-lg border border-gray-300 flex">
                <h1 className="m-auto text-xl text-center">
                    You have reached the rate limit. Please try again later.
                </h1>
            </div>
        </div>

    )
}

export default RateLimitedUi