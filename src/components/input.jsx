function Input(props) {
    return (
        <>
            <div class={props.class}>
                <label for={props.title} 
                    class="block pl-2 text-sm font-medium text-gray-700 ">{props.title}</label>

                <input type={props.type} 
                    name={props.name} 
                    id={props.id} 
                    ref={props.ref}
                    value={props.value}
                    class={"m-1 py-" + props.paddingy + " pl-1 " + props.fontSize + " block w-" + props.width + " rounded-md shadow shadow-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:pl-2 "+ props.text } 
                    placeholder={props.placeholder}/>
            </div>
        </>
    )
}

export default Input;

