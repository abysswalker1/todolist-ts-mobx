import TodoList from './components/TodoList';
import Form from './components/Form';
import Filter from './components/Filter';
import './App.scss';

function App() {
  return (
    <div className="app-wrap">
      <div className="app">
        <h1 className="app__title">Todo list</h1>
        <div className="app__form">
          <Form />
        </div>
        <div className="app__todo-list">
          <TodoList />
        </div>
        <div className="app__filter">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
