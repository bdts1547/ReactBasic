import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/myComponent';
import TodoList from './todoList/todoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
        <TodoList/>
        {/* <MyComponent /> */}
      </header>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
