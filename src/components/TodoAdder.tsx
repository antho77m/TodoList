import React from "react"
import { Todo } from "./TodoList"

export function TodoAdder(props:{todoAdd:(todo:Todo)=>boolean}){

    
    let [result,setResult] = React.useState<boolean>(false)
    let [newTodo,setNewTodo] = React.useState<Todo>({name:"",description:"",checked:false})
    let todoName:string = ""
    let todoDescription:string = ""
    return <div className="adder">
        <div className="container">
        <h3>Ajouter une tache</h3>
            <div className="form">
                <div className="form_content">
                    <div className="user_inputs">
                        <div className="name">
                            <label htmlFor="todo_name">nom de la tache:</label>
                            <input type="text" name="todo_name" defaultValue={todoName} id="todo_name" autoComplete='off' onChange={(e)=>{todoName=e.target.value}} />
                        </div>
                        <div className="description">
                            <label htmlFor="todo_description">description de la tache:</label>
                            <input type="text" id="todo_description" defaultValue={todoDescription} autoComplete='off' name="todo_description" onChange={(e)=>{todoDescription=e.target.value}} />
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="ajouter" onClick={()=>{
                            newTodo.name = todoName
                            newTodo.description = todoDescription
                            setNewTodo(newTodo)
                            if(props.todoAdd(newTodo)){
                                setResult(true)
                            }else{
                                setResult(false)
                            }
                            todoName = ""
                            todoDescription = ""
                        }}  />
                        {result && <Result name={newTodo.name}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>

}

function Result(props:{name:string}){
    return <div>
        la tache {props.name} a bien été ajouté
    </div>

}
