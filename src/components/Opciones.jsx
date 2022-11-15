function Opciones(props) {
    return (
        <a className={"mt-5 sm:mt-" + props.marginTop+ " w-14 ml-4 rounded-md shadow shadow-gray-400 w-full " } href={props.url}>
            <img src={props.icono}
            className={"flex w-" + props.width + " items-center justify-center rounded-md border border-transparent bg-" + props.color + "-400 py-1  text-sm font-medium text-" + props.textColor + " hover:bg-gray-200 md:py-1 md:px-4 md:text-sm"}
            alt="icono"
            onClick={() => props.evento}/>
        </a>

    )
}

export default Opciones;