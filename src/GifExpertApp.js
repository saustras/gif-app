import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



const GifExpertApp =()=>{
    
    const [Categories, setCategories] = useState([''])

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    Categories.map(category=>{
                       return <GifGrid
                        key={category}
                        category ={category}
                        />
                    
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;