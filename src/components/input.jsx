function Input(props) {
    return (
    <>
        <div className="">
            
            <label 
                for={props.title}
                className="block pl-2 text-sm font-medium text-gray-700 ">
                {props.title}
            </label>

            <input 
                type={props.type} 
                name={props.title} 
                id={props.id} 
                className="m-1 py-3 pl-2 block w-full rounded-md shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:pl-2"
            />
        </div>
    </>
    )
}

export default Input;
