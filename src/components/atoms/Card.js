import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="shadow sm:rounded-md sm:overflow-hidden mb-3">
            <div className="px-4 py-5 bg-white sm:p-6">
                { children }
            </div>
        </div>
    )
}

export default Card
