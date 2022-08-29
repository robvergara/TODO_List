import React from 'react'
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//import './App.css';

//const defaultTodos = [
  //{text: 'cortar cebollas', completed: true},
  //{text: 'Tomar el curso de React', completed: true},
  //{text: 'repasar conceptos de JS', completed: false}
//];


function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
