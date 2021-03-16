import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                { children }
            </div>
        </div>
    )
}

export default Card
