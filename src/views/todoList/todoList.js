import React from "react";
import AddTodo from "./addTodo";
import ContentTodo from "./contentTodo";
import './todoList.scss';


class TodoList extends React.Component {
    state = {
        listTodo: [
            {id: 1, title: "Coding"},
            {id: 2, title: "Play game"},
            {id: 3, title: "Reading book"},
        ]
    }


    addTodo = async (todo) => {
        // setState is asynchronus 
        this.setState({
            listTodo: [...this.state.listTodo, todo],
        })
    }

    editTodo = (todo) => {
        let listTodoCopy = [...this.state.listTodo];
        let index = listTodoCopy.findIndex((item) => item.id === todo.id);
        listTodoCopy[index].title = todo.title;
        
        this.setState({
            listTodo: listTodoCopy
        })
    }

    deleteTodo = (todo) => {
        let _listTodo = this.state.listTodo.filter((item) => item.id !== todo.id)
        
        this.setState({
            listTodo: _listTodo
        })
    }


    render() {
        return (
            <div className="todoList-container">
                <AddTodo
                addTodo={this.addTodo}
                
                />

                <ContentTodo
                listTodo={this.state.listTodo}
                editTodo={this.editTodo}
                deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }



}


export default TodoList;


