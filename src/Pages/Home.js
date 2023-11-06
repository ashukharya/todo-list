// import React from "react";
// const Home = () => {
//     const userName = JSON.parse(localStorage.getItem("user"));

//   return <div>userName</div>
// };

// export default Home;

import "./../App.css"
import { TbArrowBarDown } from 'react-icons/tb';
import ListItem from "./../Components/ListItem";
import { useEffect, useState } from "react";
import{ useNavigate} from "react-router-dom";

const Home = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
    // console.log(userName.name);
    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState([])

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
    };

    const addTodo = (e) => {
        e.preventDefault()

        const todoItem = {
            id: new Date().getTime(),
            text: todo,
            isChecked: false
        }

        if(todo !== ""){
            setAllTodos([...allTodos].concat(todoItem).reverse())
            setTodo("")
        }

        console.log(allTodos)
    }

    

    const getAllTodos = () => {
        let stored = JSON.parse(localStorage.getItem("todo"))

        if(stored) {
            setAllTodos(stored)
        }
    }


    const toggleChecked = (id) => {
        let updatedTodos = [...allTodos].map(todo => {
            if(todo.id === id){
                todo.isChecked = !todo.isChecked
            }

            return todo
        })

        setAllTodos(updatedTodos)
    }



    const deleteTodo = (id) => {
        const filteredTodo = allTodos.filter(todo => todo.id !== id)
        setAllTodos(filteredTodo)
    }


    useEffect(() => {
        getAllTodos()
    }, [])


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(allTodos))
    }, [allTodos])
    

  return (
      <div className="App">
        <div className="App_todo">
          <h1>{userName.name}'s Todo List</h1>
            <form className="App_input_wrapper" onSubmit={addTodo} >
                <input type={"text"} placeholder="Write your task here" className="App_input" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <div className="App_input_button" onClick={addTodo} >
                    <TbArrowBarDown size={24} />
                </div>
            </form>

            <div className="App_todo_list">
                {
                    allTodos.map(todo => (
                        <ListItem key={todo.id} deleteTodo={() => deleteTodo(todo.id)} text={todo.text} isChecked={todo.isChecked} toggleChecked={() => toggleChecked(todo.id)} />
                    ))
                }

                {
                    allTodos.length === 0 && (
                        <p className="empty">Todo's List is empty.</p>
                    )
                }
            </div>
            
            <button 
                onClick={handleLogout}
                type="button"
            >LogOut</button>
        </div>
    </div>
  )
}

export default Home;
