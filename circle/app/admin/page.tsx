import React from 'react'
import Header from './components/Header';
import Dashboard from './dashboard/page';
import Container from '../home/components/Container';
import MenuForm from './components/MenuForm';


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