import {useEffect, useState} from 'react'
import axios from 'axios'
import Todo from '../components/Todo'
import Todoform from '../components/Todoform'


function Home(){

    const [todos, setTodos] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() =>{
        // setTimeout(() => {
            axios.get("http://localhost:4000/api/todos")
            .then((res) => {
                if(res.status === 200){
                    setTodos(res.data.data)
                    // console.log(res.data.data);
                    setFetchStatus(false)
                }
            })
            .catch((err) => {
                console.error("Error fetching status :::", err)
            })
        // }, 1000)
    }, [])

    return (
        <div id="home" 
            className="flex w-full gap-64 justify-center mt-8 px-16"
        >
            {fetchStatus && 
                <h2 className="italic m-4"> Fetching todos . . . </h2>
            }
            <div id="todos" className="">
                {todos &&
                    todos.map((todo) => (
                        <Todo key={todo._id} props={todo} done={false} />
                    ))
                }
            </div>

            <div id="todoform">
                <Todoform />
            </div>
        </div>
    )
}


export default Home