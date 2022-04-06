import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('')

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(InputValue.trim().length > 2) {
            setCategories(cats =>[ InputValue,...cats]);
            setInputValue('')
        }
        
    }
    
    return (
        <form onSubmit={handleSubmit}>

        <input 
            type='text'
            value={InputValue}
            onChange={handleChange}
        />

        <button onClick={handleSubmit}>agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
