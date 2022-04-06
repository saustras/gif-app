import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  const {data:images,loading} = useFetchGif(category);

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Loading</p>}
    <div className="card-container">
       { 
          images.map(img =>
          <GifGridItem 
            key={img.id}
             {...img} />
          )
        }
    </div>
    </>
  )
  
}

export default GifGrid