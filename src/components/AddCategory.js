import React, { useState } from 'react'
import PropTypes from 'prop-types';

                       //Comunicacion entre componentes: Este componente AddCategory recibe una propiedad o prop enviada desde otro componente padre GifExpertApp
const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('');//useState() si se hubiese colocado asi el estado inicial es undefined es da warning
    
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
    
        if ( inputValue.trim().length > 2 ) {
            //setCategories es un metodo asociado a un estado que se encuentra en otro componente, que se recibio como prop en este componente 
            setCategories( categories => [inputValue, ...categories]);//Se puede usar de esa forma(recibiendo como argumento una funcion flecha que recibe como argumento el estado segun la definicion de useState de REACT) ya que en este componente solo recibimos como props el metodo que cambia el estado de categorias y no el estado como tal
            setInputValue('');
        }


    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ inputValue } 
                onChange={ handleInputChange } 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
