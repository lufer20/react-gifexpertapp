import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Samurai X', 'madonna']);

    // const handleAdd = () => {
    //     //setCategories(['Cuarto',...categories]); ...categories se extrae todo el contenido del arreglo categories
    //     setCategories( categories => [...categories, 'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>

            {/* Comunicacion entre componentes: se le puede enviar una propiedad de este componente padre al componente hijo AddCategory. Esta propiedad puede ser una variable, un metodo, un metodo que cambia un estado, etc */}
            <AddCategory setCategories={setCategories} />

            <hr />

            {/* <ol> */}
                {
                    //Se recomienda usar map que es un metodo asociados a los arreglos para mostrar sus elementos en la vista del componente, ya que este metodo siempre retorna algo en cada iteracion, mientras que si se usa un for normal este no retorna nada, solo hace el recorrido
                    categories.map( (cat) =>  (
                        <GifGrid
                            //Cuando se va a mostrar un listado o elementos de un arreglo se debe usar la propiedad key porque sino manda un warning. Los valores que deben ponerse en el key deben ser valores unicos, que por lo general se colocan los ids que vienen de la BD, No se deben colocar como valores las posiciones del array al momento de recorrer el arreglo, porque son volatiles, pueden cambiar
                            //El key sirve para que react sepa cual es el elemento que esta iterando. Si se necesita hacer algo con el elemento asociado a ese key, react se basa en ese key para hacer los cambios correspondientes y asi react saber que elemento renderizar nuevamente
                            key={ cat } 
                            category = {cat} 
                        />
                    ))
                }
            {/* </ol> */}
        </>
    );

}

export default GifExpertApp;

