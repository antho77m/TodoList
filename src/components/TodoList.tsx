export function TodoList(props:Todo[]){
    return <div>
        {
            props.map((val,i)=>{
                return <TodoDisplayer name={val.name} checked={val.checked} key={i}/>
            })
        }
    </div>

}

function TodoDisplayer(props:Todo){
    return <div className="todo">
        <input type="checkbox" name="" id="" />
    </div>
}

interface Todo{
    name:string,    // nom de la tache
    //description:string,   // description de la tache (ajouté plus tard)
    checked:boolean, // définit si la tache est réalisé
}