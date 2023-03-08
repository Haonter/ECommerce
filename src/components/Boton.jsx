function Boton(props) {
    return (
        /*<div className={"mt-5 sm:mt-" + props.marginTop +" sm:flex-col sm:justify-" + props.justify + " lg:justify-end"}>
            <div className="rounded-full shadow shadow-gray-400">
                <a
                    href={props.url}
                    onClick= {props.function}
                    className={"flex w-" + props.width + " items-center justify-center rounded-full border border-transparent bg-" + props.color + "-400 py-1 px-5 text-sm font-medium text-" + props.textColor + " hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"}
                >
                    {props.title}
                </a>
            </div>
        </div>*/
        <button
        className={" flex shadow shadow-gray-400 sm:my-" + props.marginy + " w-" + props.width + "  justify-center items-center rounded-full border border-transparent bg-" + props.color + "-400 py-1 px-5 text-sm font-medium text-" + props.textColor + " justify-center items-center md:py-1 md:px-4 md:text-sm disabled:bg-gray-400 " + props.hover}
        onClick={() => props.evento()}
        href={props.href}
        disabled = {props.disabled}
        >
            <img src={props.img} alt="" 
            className={"flex w-" + props.widthimg + " items-center justify-center rounded-md border border-transparent bg-" + props.colorimg + "-400 py-1  text-sm font-medium text-" + props.textColorimg + " hover:bg-gray-200 md:py-1 md:px-4 md:text-sm " + props.hidden} 
            />
            {props.title}
        </button>

    )
}



export default Boton;
