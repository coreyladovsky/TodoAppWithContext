import React from 'react';
import TodosProvider from './providers/TodosProvider.js'
import TodosIndex from './components/TodosIndex.js';
import TodoForm from './components/TodoForm.js';
// import './App.css';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoForm />
        <TodosIndex />
      </TodosProvider>
    </div>
  );
}

export default App;
