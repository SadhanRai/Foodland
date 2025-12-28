import React from 'react'
import AutoSlider from './components/HomeSlider'
import Categories from './components/Categories'
import Recipes from './components/Recipes'

const page = () => {
    return (

        <>

            <AutoSlider />
            <Categories />
            <Recipes/>

        </>
    )
}

export default page