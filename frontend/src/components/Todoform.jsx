import {useState} from 'react'
import axios from 'axios'

function Todoform(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addFailed, setAddFailed] = useState(false)
    const [failMessage, setFailMessage] = useState('')


    function handleSubmit(e){
        e.preventDefault()

        axios.post("http://localhost:4000/api/todos/", {
            title : title,
            description : description
        })
        .then((res) => {
            if (res.status !== 200){         
                setAddFailed(true)
                console.log(res.response.data.error)
            }

            setTitle('')
            setDescription('')  
            setAddFailed(false) 
        })
        .catch((err) => {
            setAddFailed(true)
            console.log("Cateched : ", err.response.data.error || "Error reaching API")
            setFailMessage(err.response.data.error || "Error reaching API")
        })

    }

    const mainForm = " w-fit flex flex-col gap-2 p-2 mt-8"
    const formClasses = "flex justify-between flex-col"
    const inputStyle = "border-2 border-teal-600 rounded-sm pl-1"

    return (
        <form onSubmit={handleSubmit} className={mainForm}>
            <p className="font-extrabold text-lg text-gray-600">Add a todo</p>
            {addFailed && 
                <div className="text-red-600"> 
                    <p>Failed to add todo...</p>
                    <p className="italic text-red-400 text-xs">( {failMessage} )</p> 
                </div>
            }
            <div className={formClasses}>
                <label htmlFor="title">Title</label>
                <input className={inputStyle}
                    required
                    type="text" name="title" id="title" 
                    onChange={(e) => {setTitle(e.target.value)}} 
                    value={title}    
                />
            </div>

            <div className={formClasses}>
                <label htmlFor="description">Description</label>
                <textarea className={inputStyle}
                     name="description" id="description" 
                    onChange={(e) => {setDescription(e.target.value)}}
                    value={description}
                />
            </div>

            <input 
                type="submit" value="Add" 
                className="bg-teal-600 w-fit px-4 py-1 cursor-pointer rounded text-white font-light mt-2"
                
            />
        </form>
    )
}

export default Todoform
