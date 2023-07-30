import React from 'react';
import axios from 'axios';
import './listUser.scss';
import { useNavigate, useParams} from "react-router-dom";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />;
}

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=1')
            .then((res) => {
                this.setState({
                    listUser: res.data.data
                })
            })
    }

    handleDetailViewUser = (user) => {
        this.props.navigate(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className='list-user-container'>
                <div className="header">
                    All User
                </div>

                {listUser && listUser.length > 0 ?
                    <div className="user-item">
                        { listUser.map((user, index) => {
                            return (
                                <div className='user-content' key={user.id}
                                onClick={() => this.handleDetailViewUser(user)}>
                                    {index + 1} - {user.first_name} {user.last_name}
                                </div>
                            )
                        })
                        }
                    </div>
                    :
                    <div>No user</div>
                }
            </div>
        )
    }
}


export default withParams(ListUser);



