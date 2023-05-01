import React from "react"
import corbeille from "../res/poubelle.png"

export function TodoList(props:{todoList:Todo[]|undefined,todoListUpdate:(todo:Todo[])=>void}){
    
    const content:JSX.Element = props.todoList===undefined?<EmptyList/>:
        <ListFill todoList={props.todoList} todoListUpdate={props.todoListUpdate}/>
    
    
    return <div className="todo_list">
        <HeaderTodoList/>
        {content}
    </div>

}
function HeaderTodoList(){
    return <div className="list_header">
        <h3>Liste des taches</h3>
    </div>
    
}



function ListFill(props:{todoList:Todo[]|undefined,todoListUpdate:(todo:Todo[])=>void}){
    return <div className="list">
        {props.todoList?.map((val,i)=>{
            return <TodoDisplayer todo={val} key={i} todoCheck={(val)=>{
                let todoList:Todo[] = props.todoList as Todo[]
                    todoList[i].checked = !todoList[i].checked
                    props.todoListUpdate(todoList)
                } } />
            })}
    </div>
}
function EmptyList() {
    return <div>votre liste est vide</div>
    
}

function TodoDisplayer(props:{todo:Todo,todoCheck:(todo:Todo)=>void}){
    return <div className="todo">
        <div className="todoCheck">
            
            <input type="checkbox" name="" id="" defaultChecked={props.todo.checked} onChange={()=>{props.todoCheck(props.todo)}} /> 

        </div>
        
        <div className="todo_name">{props.todo.name}</div>
        <div className="trash_containe">
            <div className="trash">
                <img src={corbeille} alt="corbeille" />
            </div>
        </div>


    </div>
}

export interface Todo{
    name:string,    // nom de la tache
    description:string,   // description de la tache (ajouté plus tard)
    checked:boolean, // définit si la tache est réalisé
}