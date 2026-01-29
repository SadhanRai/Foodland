import React from 'react'

import Container from '../../../src/components/container/Container';
import MenuForm from '../../../src/components/menuform/MenuForm';
import MenuProvider from '@/src/context/menuProvider';


const page = () => {
    return (
        <div className='overflow-y-auto h-screen bg-white rounded-2xl border-1 border-gray-200 '>
            <Container>
                <MenuProvider>

                    <MenuForm />

                </MenuProvider>

            </Container>



        </div>
    )
}

export default page





//   <div className="flex h-screen overflow-hidden">
//                         {/* 1. Fixed Sidebar */}
//                         <aside className="w-64 bg-yellow-300 h-full flex-shrink-0">
//                             <div className="p-4 font-bold">Sidebar</div>
//                         </aside>

//                         {/* 2. Right Side Wrapper */}
//                         <div className="flex flex-col flex-1 min-w-0">

//                             {/* 3. Sticky Top Navbar */}
//                             <nav className="h-16 bg-gray-300 flex items-center px-6 border-b border-gray-400">
//                                 <span className="font-semibold">Menu / Navbar</span>
//                             </nav>

//                             {/* 4. Scrolling Content Area */}
//                             <main className="flex-1 overflow-y-auto p-6 bg-white">
//                                 {/* Tall content to test the scroll */}
//                                 <div className="space-y-4">
//                                     <h1 className="text-2xl font-bold">Dashboard Content</h1>
//                                     {/* Placeholder for long content */}
//                                     {Array.from({ length: 20 }).map((_, i) => (
//                                         <div key={i} className="h-20 bg-gray-100 rounded-lg border flex items-center justify-center">
//                                             Content Block {i + 1}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </main>

//                         </div>
//                     </div>