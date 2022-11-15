import fondo from '../media/fondo.mp4'

function Fondo(){
    return(
        <>
            <video className='static w-screen' src={fondo} autoPlay muted loop/>
        </>
    )
}

export default Fondo;