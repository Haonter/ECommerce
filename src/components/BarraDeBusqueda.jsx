import search from '../media/Search.gif'

function BarraDeBusqueda(){
    return(
        <>        
            {/*Barra de Busqueda*/}
            <form className='flex md:ml-84 lg:justify-center lg:my-auto lg:container' onSubmit={'--- Pendiente ---'}>
            
                <div className='w-96 flex'>
                    <input type="text" className="font-semibold text-sm rounded-l-lg h-8 w-28 sm:w-52 md:w-72 lg:w-96" 
                    placeholder='  ¿Que producto buscas?...' />
                </div> 
                <button type="submit">
                    <img src={search} className="h-8 w-8 rounded-r-lg md:mr-30" alt="Search - GIF"/>
                </button>
            </form>
        </>
    )
}

export default BarraDeBusqueda;