import React from 'react'
import NavMenu from '../molecules/NavMenu'

const Layout = ({ children, title }) => {
    return (
        <div className="layout">
            <NavMenu />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-1xl md:text-3xl font-bold text-gray-900">
                        { ( typeof title !== 'undefined' ) ? title : 'MyPeBook' }
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    { children }
                </div>
            </main>
        </div>
    )
}

export default Layout
