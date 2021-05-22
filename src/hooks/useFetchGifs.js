//Custon hooks: es una forma de extraer logica de un componente o logica que se quiere reutilizar y extraerla de tal manera que sea sencillo de utilizar nuevamente.
            //Se recomienda que los custom hooks se cree en una carpeta en /src llamada hooks. El nombre se recomienda que comience con use... lo que significa que es un hook
            //Los hooks no son mas que funciones, por lo tanto los custom hooks tambien son funciones
            //Los custom hooks tambien pueden tener su estado, es decir se puede usar dentro de su cuerpo otros hooks como el useState
            //FUncionan como los functional components, pueden tener efectos, usar reducer, contextos, etc

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//UN CUSTOM HOOK: que busca la informacion a mostrar a traves de una API(LA API LA GESTIONA UN HELPER)
export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //useEffect permite ejecutar cierto codigo de forma condicional. Esto es util para cuando se haga un cambio en el componente y se tenga que renderizar de nuevo el componente y no queremos que algo se ejecute entonces usamos el useEffect para controlar esa ejecucion
    //El useEffect no puede ser async porque espera algo sincrono, es decir NO SE PUEDE HACER useEffect( async() => {} )
    useEffect( () => {

        //getGifs retorna una promesa
        getGifs(category)
            .then( imgs => {

                // setTimeout(() => {

                    console.log(imgs)

                    setState({
                        data: imgs,
                        loading: false
                    });
                // }, 3000);


            })

    },[category] );//El segundo parametro del useEffect es un arreglo de dependencias. 
                    //Sino se coloca este segundo parametro entonces el useEffect se ejecuta o dispara al inicio y cada vez que se renderiza el componente
                    //Si se coloca el segundo argumento como arreglo vacio entonces el useEffect se dispara una sola vez al montarse el componente
                    //Si se colocar el segundo argumento con un arreglo de dependencias entonces el useEffect se ejecuta cada vez que alguna de las dependencias cambie


    return state;// { data:[], loading: true }

}
