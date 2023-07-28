import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends React.Component {
    state = {
        arr: [
            {id: 1, title: "Developer", salary: "500"},
            {id: 2, title: "Tester", salary: "500"},
            {id: 3, title: "Fullstack", salary: "500"},
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arr: [...this.state.arr, job]
        })
    }

    deleteJob = (job) => {
        this.setState({
            arr: this.state.arr.filter(item => item.id !== job.id)
        })
    }

    

    render() {
        return (
            <>
            <AddComponent
            addNewJob={this.addNewJob}
            
            />
                
            <ChildComponent 
            arr={this.state.arr} 
            deleteJob={this.deleteJob}
            />

                
            </>
        )
    }

}

export default MyComponent;

