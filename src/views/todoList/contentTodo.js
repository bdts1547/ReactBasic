import React from "react";
import { toast } from 'react-toastify';


class ContentTodo extends React.Component {
    state = {
        isEdit: false,
        todoEdit: {}
    }


    // Edit Todo
    handleEditTodo = (todo) => {
        // >>> Save
        if (this.state.isEdit) {
            this.props.editTodo(this.state.todoEdit)


            this.setState({
                isEdit: false,
                todoEdit: {}
            })

            toast.success("Updated");
            return;
        }


        // >>> Edit
        this.setState({
            isEdit: true,
            todoEdit: todo,
        })
    }

    // Receive value changing todo
    handleOnChangeEdit = (e) => {
        let changedTodo = {...this.state.todoEdit};
        changedTodo.title = e.target.value;
        
        this.setState({
            todoEdit: changedTodo
        })
    }


    // Delete Todo
    handleDeleteTodo = (todo) => {
        this.props.deleteTodo(todo);
        toast.success('Deleted')
    }



    render() {
        let { listTodo } = this.props;

        return (
            <div className="content-todoList">
                {listTodo &&
                    listTodo.map((todo, index) => {
                        return (
                            <div className="todo-item" key={todo.id}>
                                {this.state.isEdit && this.state.todoEdit.id === todo.id ?
                                    <>
                                        <span>{index + 1}</span>
                                        <input type="text" value={this.state.todoEdit.title} 
                                        onChange={(e) => this.handleOnChangeEdit(e)}
                                        />
                                        <button onClick={() => this.handleEditTodo(todo)}>Save</button>
                                    </>
                                    :
                                    <>
                                        <span>{index + 1} - {todo.title}</span>
                                        <button onClick={() => this.handleEditTodo(todo)}>Edit</button>
                                    </>
                                }
                                <button onClick={() => this.handleDeleteTodo(todo)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}



export default ContentTodo;
