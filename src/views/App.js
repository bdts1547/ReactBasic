import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/myComponent';
import Home from './example/home';
import TodoList from './todoList/todoList';
import Nav from './nav/nav';
import ListUser from './user/listUser';
import DetailUser from './user/detailUser';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
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
    </BrowserRouter>
  );
}

export default App;
