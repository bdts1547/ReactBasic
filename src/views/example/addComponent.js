import React from 'react';
import {v4 as uuidv4} from 'uuid';

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }



    /* #####################
       ### @Handle Event ###
       ##################### */

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addNewJob({
            id: uuidv4(),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: "",
        })
        
    }

    render() {
        return (
            <div className="">
                    <form >
                        <label htmlFor="fname">Job'title:</label><br/>
                        <input onChange={(event) => this.handleChangeJobTitle(event)} type="text" value={this.state.title} /><br/>
                        <label htmlFor="lname">Salary:</label><br/>
                        <input onChange={(event) => this.handleChangeSalary(event)}  type="text" value={this.state.salary} /><br/><br/>
                        <input onClick={(event) => this.handleSubmit(event)} type="submit" value="Submit" />
                    </form>
                </div>
        )
    }
}


export default AddComponent;
