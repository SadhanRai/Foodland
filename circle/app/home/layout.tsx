import React from 'react'
import Navbar from './components/Navbar'
import SlideProvider from '../context/slideProvider'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <div>

                <Navbar />
                <SlideProvider isAdmin={false}>
                    {children}
                </SlideProvider>
            </div>

        </div>
    )
}

export default Layout