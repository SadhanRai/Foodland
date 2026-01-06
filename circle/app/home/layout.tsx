import React from 'react'
import Navbar from '../../src/components/navbar/Navbar'
import SlideProvider from '../../src/context/slideProvider'
import Footer from '../../src/components/footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        /* min-h-screen: Ensures the layout at least fills the whole height of the device.
           flex flex-col: Stacks Navbar, Content, and Footer vertically.
        */
        <div className='min-h-screen flex flex-col bg-white'>

            <Navbar />

            <SlideProvider isAdmin={false}>
                {/* flex-grow: This is the "magic" property. 
                    It tells the content area to take up all available space,
                    automatically pushing the Footer to the very bottom.
                */}
                <main className='flex-grow'>
                    {children}
                </main>

                <Footer />
            </SlideProvider>

        </div>
    )
}

export default Layout