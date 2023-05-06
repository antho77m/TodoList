import React, { Component, useState } from 'react';
import { Route, Routes, To } from 'react-router-dom';
import { Header } from './components/Header';
import { TodoAdder } from './components/TodoAdder';
import { Todo, TodoList } from './components/TodoList';
import {Welcome} from './components/Welcome'
import './css/styles.css';

function App() {
  const [todoList,setTodoList] = useState<Todo[]|undefined>()
  let addTodo = (todo:Todo)=>{  // fonction réalisant l'ajout d'une tache a la liste
    console.log(todo)
    if(todo.name===""){
      return false
    }
    //vérifie si il y a déjà une todo avec le meme nom
    if(todoList!==undefined){
      for(let i=0;i<todoList.length;i++){
        if(todoList[i].name===todo.name){
          return false
        }
      }
    }


    if(todoList===undefined){
      setTodoList([todo])
    }else{
      todoList.push(todo)
      setTodoList(todoList)
    }
    return true
  }
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/list" element={<TodoList todoList={todoList} todoListUpdate={(todos)=>{
          setTodoList(todos)
        }} />}/>
        <Route path='/add' element={<TodoAdder todoAdd={addTodo}/>}/>
      </Routes>


    </div>
  );
}

export default App;
