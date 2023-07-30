import React from "react";
import { connect } from "react-redux";
import Color from "../HOC/color";

class Home extends React.Component {


    handleDeleteUser = (user) => {
        this.props.deleteUser(user);
    }

    handleCreateUser = () => {
        this.props.createUser();
    }


    render() {
        let listUser = this.props.dataRedux;
        return (
            <div>
                <h1>Home Page</h1>
                {listUser && listUser.length > 0 &&
                    listUser.map((user, index) => {
                        return (
                            <div key={user.id}> 
                                {++index} - {user.name}
                                <button onClick={() => this.handleDeleteUser(user)}>Delete</button>
                            </div>
                        )
                    })
                }
                <button onClick={() => this.handleCreateUser()}>Add Random</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch({ type: "DELETE_USER", payload: user}),
        createUser: () => dispatch({ type: "CREATE_USER" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));


