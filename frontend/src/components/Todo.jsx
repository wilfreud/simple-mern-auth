


function Todo({props}) {

    const doneStyle = ""

    return(
        <div 
        className={" [&:not(first-child())]:my-2 bg-white p-4 rounded-sm mb-4" 
        + (props.done ? doneStyle : "")}
        >
            <p className="2 font-bold 
            border-gray-500 tracking-wide border-b-2 w-fit"> {props.title} </p>
            <p className="text-sm"> {props.description} </p>

        </div>
    )
}

export default Todo