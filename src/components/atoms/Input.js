import React from 'react'

const Input = ({ type, title }) => {
    return (
        <div>
           <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                { title }
            </label>
            {
                type === 'textarea' ? 
                <div className="mt-1">
                    <textarea 
                        rows="3" 
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" 
                        placeholder=""
                    ></textarea>
                </div> :
                <div className="mt-1 mb-2 flex rounded-md shadow-sm">
                    <input 
                        type={ type } 
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 pt-1 pb-1"
                    />
                </div>
            }

            
        </div>
    )
}

export default Input;