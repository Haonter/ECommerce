function Opciones(props) {
    return (
        <div className={"mt-5 sm:mt-" + props.marginTop+ " w-14 " }>
            <div className="rounded-md shadow shadow-gray-400 w-full ">
                    <img src={props.icono}
                        className={"flex w-" + props.width + " items-center justify-center rounded-md border border-transparent bg-" + props.color + "-400 py-1  text-sm font-medium text-" + props.textColor + " hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"}
                        alt="icono"
                        href={props.url}
                    />
            </div>
        </div>

    )
}

export default Opciones;