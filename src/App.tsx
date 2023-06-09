import React from 'react';
import Node from './types/Node';

const App = ({ children }: { children?: Node }) => {
  return (
    <main className="">
      <header>
        <h1>Header</h1>
      </header>

      <div>{children ?? null}</div>
    </main>
  );
};

export default App;
