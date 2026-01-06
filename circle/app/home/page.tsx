import React from 'react'
import AutoSlider from '../../src/components/homeslide/HomeSlider'
import Categories from '../../src/components/categories/Categories'
import Recipes from '../../src/components/recipes/Recipes'
import Chef from '../../src/components/chef/Chef'
import InstagramSection from '@/src/components/instasection/InstagramSection'
import RecipeGrid from '@/src/components/recipegrid/RecipeGrid'
import Newsletter from '@/src/components/newsletter/NewsLetter'

const page = () => {
    return (

        <>

            <AutoSlider />
            <Categories />
            <Recipes />
            <Chef />
            <InstagramSection />
            <RecipeGrid />
            <Newsletter />

        </>
    )
}

export default page