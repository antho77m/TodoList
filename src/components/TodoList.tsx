import React from "react"

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
        <div className="todo_description">{props.todo.description}</div>


    </div>
}

export function TodoAdder(props:{todoAdd:(todo:Todo)=>boolean}){

    
    let [result,setResult] = React.useState<boolean>(false)
    let [newTodo,setNewTodo] = React.useState<Todo>({name:"",description:"",checked:false})
    let todoName:string = ""
    let todoDescription:string = ""
    return <div>
        <div className="name">
            <label htmlFor="todo_name">nom de la tache:</label>
            <input type="text" name="todo_name" defaultValue={todoName} id="todo_name" onChange={(e)=>{todoName=e.target.value}} />
        </div>

        <div className="description">
            <label htmlFor="todo_description">description de la tache:</label>
            <input type="text" id="todo_description" defaultValue={todoDescription} name="todo_description" onChange={(e)=>{todoDescription=e.target.value}} />
        </div>
        
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

}

function Result(props:{name:string}){
    return <div>
        la tache {props.name} a bien été ajouté
    </div>

}

export interface Todo{
    name:string,    // nom de la tache
    description:string,   // description de la tache (ajouté plus tard)
    checked:boolean, // définit si la tache est réalisé
}