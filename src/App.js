import React from 'react';
import TodosProvider from './providers/TodosProvider.js'
import TodosIndex from './components/TodosIndex.js';
// import './App.css';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodosIndex />
      </TodosProvider>
    </div>
  );
}

export default App;
