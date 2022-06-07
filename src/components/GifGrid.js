import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=rick+and+morty&api_key=r4dyUY0kSk3BPz4M2MYdZcnP98WbS6qg';

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })


        console.log(gifs);
        setImages(gifs);
    }


    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({ id, title }) => (<li key={id}>{title}</li>))
                }
            </ol>
        </div>
    )
}
