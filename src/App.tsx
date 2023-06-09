import React from 'react';
import Node from './types/Node';

const App = ({ children }: { children?: Node }) => {
  return (
    <main className="">
      <div>{children ?? null}</div>
    </main>
  );
};

export default App;
