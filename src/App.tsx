import React, { Component, useState } from 'react';
import { Route, Routes, To } from 'react-router-dom';
import { Header } from './components/Header';
import { Todo, TodoAdder, TodoList } from './components/TodoList';
import {Welcome} from './components/Welcome'
import './css/styles.css';

function App() {
  const [todoList,setTodoList] = useState<Todo[]|undefined>()
  let addTodo = (todo:Todo)=>{  // fonction réalisant l'ajout d'une tache a la liste
    if(todoList===undefined){
      setTodoList([todo])
    }else{
      todoList.push(todo)
      setTodoList(todoList)
    }
  }
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/list" element={<TodoList todoList={todoList} />}/>
        <Route path='/add' element={<TodoAdder todoAdd={addTodo}/>}/>
      </Routes>


    </div>
  );
}

export default App;
