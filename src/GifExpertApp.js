
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    return (
        <div className='titulo'>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}


export default GifExpertApp;