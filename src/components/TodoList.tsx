export function TodoList(props:{todoList:Todo[]|undefined}){
    return <div className="todo_list">
        
        {props.todoList===undefined &&<EmptyList/>} 
        {
            props.todoList?.map((val,i)=>{
                return <TodoDisplayer name={val.name} checked={val.checked} key={i}/>
            })
            
        }
    </div>

}

function EmptyList() {
    return <div>votre liste est vide</div>
    
}

function TodoDisplayer(props:Todo){
    return <div className="todo">
        <input type="checkbox" name="" id="" defaultChecked={props.checked} />
        {props.name}

    </div>
}

export function TodoAdder(props:{todoAdd:(todo:Todo)=>void}){
    let todoName:string = ""
    return <div>
        nom de la tache:<input type="text" id="todo_name" onChange={(e)=>{todoName=e.target.value}} />
        <input type="submit" value="ajouter" onClick={()=>{
            props.todoAdd({name:todoName,checked:false})   // par défaut la tache n'est pas réalisé


        }}  />
    </div>

}

export interface Todo{
    name:string,    // nom de la tache
    //description:string,   // description de la tache (ajouté plus tard)
    checked:boolean, // définit si la tache est réalisé
}