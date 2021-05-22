//Los helpers son funciones que hacen un cierto trabajo en especifico, pueden recibir argumentos, lo procesan y hacen algun return. Se consideran helper aquellas funciones que no hacen falta que redibujen el state o algo asi  


//UN HELPER, que hace peticiones a una API
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MjrcR0hLAqOVz4aGIeN4ZpXXACCCsTqT`;//la funcion encodeURI hace reemplazo de espacios por porcentaje entre otras cosas

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });


    return gifs;//getGifs como es async ya no es una funcion que retorna los gifs sino es una funcion que retorna una promesa que resuelve la coleccion de los gifs

}