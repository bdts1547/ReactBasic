import React from "react";
import {v4 as uuidv4} from 'uuid';
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: "",
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    handleAddTitle = (title) => {
        if (!title) {
            toast.error("Missing value");
            return;
        }


        this.props.addTodo({
            id: uuidv4(),
            title: title,
        })

        this.setState({
            title: ""
        })
        toast.success("Missing value");

    }

    render() {
        return (
            <div className="add-todoList">
                    <input onChange={(e) => this.handleChangeTitle(e)} 
                    type="text" value={this.state.title} />
                    <button className="add-btn" onClick={() => this.handleAddTitle(this.state.title)}>Add</button>
            </div>
        )
    }


}


export default AddTodo;

