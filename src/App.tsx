import React from 'react';
import Node from './types/Node';
import './styles/tailwind.css';

const App = ({ children }: { children?: Node }) => {
  return (
    <main className="">
      <header>
        <h1>Header</h1>
      </header>

      <div>Hello, World!</div>
    </main>
  );
};

export default App;
