import React from 'react';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;
