import React from "react"
import { Todo } from "./TodoList"

export function TodoAdder(props:{todoAdd:(todo:Todo)=>boolean}){

    
    let [result,setResult] = React.useState<boolean|undefined>(undefined)
    let [newTodo,setNewTodo] = React.useState<Todo>({name:"",description:"",checked:false})
    return <div className="adder">
        <div className="container">
        <h3>Ajouter une tache</h3>
            <div className="form">
                <div className="form_content">
                    <div className="user_inputs">
                        <div className="name">
                            <label htmlFor="todo_name">nom de la tache:</label>
                            <input type="text" name="todo_name" defaultValue={newTodo.name} id="todo_name" autoComplete='off' onChange={(e)=>{newTodo.name=e.target.value}} />
                        </div>
                        <div className="description">
                            <label htmlFor="todo_description">description de la tache:</label>
                            <input type="text" id="todo_description" defaultValue={newTodo.description} autoComplete='off' name="todo_description" onChange={(e)=>{newTodo.description=e.target.value}} />
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="ajouter" onClick={()=>{
                            setNewTodo(newTodo)
                            setResult(props.todoAdd(newTodo))
                        }}  />
                        <Result name={newTodo.name} good={result}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

function Result(props:{name:string,good:boolean|undefined}){
    if (props.good===undefined){
        return <React.Fragment></React.Fragment>
    }
    const color = props.good?"green":"red"

    const text = props.good?" a bien été ajouté":"n'a pas été ajouté"
    

    return <div className="result" style={{"color":color}}>
        la tache {props.name} {text}
    </div>

}
