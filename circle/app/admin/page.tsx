import React from 'react'

import Container from '../../src/components/container/Container';
import MenuForm from '../../src/components/menuform/MenuForm';


const page = () => {
    return (
        <div className='overflow-y-auto h-screen bg-gray-200 rounded-2xl border-1 border-gray-200 '>
            <Container>
                <MenuForm />

            </Container>



        </div>
    )
}

export default page