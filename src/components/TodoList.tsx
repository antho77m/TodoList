import React from "react"
import corbeille from "../res/poubelle.png"

export function TodoList(props:{todoList:Todo[]|undefined,todoListUpdate:(todo:Todo[])=>void}){
    console.log("render todoList")
    let todoListUpdate:(todo:Todo[])=>void = (todo:Todo[])=>{
        let newTodoList:Todo[] = todo
        console.log("todoEquals ? ", newTodoList===props.todoList )

        props.todoListUpdate(newTodoList)
    }
    
    const content:JSX.Element = props.todoList===undefined?<EmptyList/>:
        <ListFill todoList={props.todoList} todoListUpdate={todoListUpdate}/>
    
    
    return <div className="todo_list">
        <HeaderTodoList/>
        {content}
    </div>

}

//fait apparaitre le titre de la page
function HeaderTodoList(){
    return <div className="list_header">
        <h3>Liste des taches</h3>
    </div>
    
}


//fait apparaitre la liste des taches
function ListFill(props:{todoList:Todo[]|undefined,todoListUpdate:(todo:Todo[])=>void}){
    let todoList:Todo[] = props.todoList as Todo[]

        
        

    return <div className="list">
        {props.todoList?.map((val,i)=>{
            let interact = {
                todoCheck:(todo:Todo)=>{

                    console.log("checked: ",todoList[i].name)
                    todoList[i].checked = !todoList[i].checked
                    props.todoListUpdate(todoList)
                },
                todoDelete:(todo:Todo)=>{
                    console.log("delete: ",todoList[i].name)
                    todoList.splice(i,1)
                    props.todoListUpdate(todoList)
                }
            }

            return <TodoDisplayer todo={val} key={i} interact={interact}/>
            })}
    </div>
}

//fait apparaitre un message si la liste est vide
function EmptyList() {
    return <div>votre liste est vide</div>
    
}

//fait apparaitre une tache et lui associe les fonctions de modification
function TodoDisplayer(props:{todo:Todo,interact:TodoInteract}){ 
    const decoration:string = props.todo.checked?"line-through":"none"
    return <div className="todo">
        <div className="todo_check">
            
            <input type="checkbox" name="" id="" defaultChecked={props.todo.checked} onChange={()=>{props.interact.todoCheck(props.todo)}} /> 

        </div>
        
        <div className="todo_name" style={{textDecoration:decoration}}>
            {props.todo.name}
        </div>
        <div className="trash_container">
            <div className="trash" onClick={()=>{props.interact.todoDelete(props.todo)}}>
                <img src={corbeille} alt="corbeille" />
            </div>
        </div>
    </div>
}


//interface des fonctions de modification d'une tache
interface TodoInteract{
    todoCheck:(todo:Todo)=>void,
    todoDelete:(todo:Todo)=>void,
}

//interface d'une tache
export interface Todo{
    name:string,    // nom de la tache
    description:string,   // description de la tache (ajouté plus tard)
    checked:boolean, // définit si la tache est réalisé
}