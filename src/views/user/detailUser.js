import React from 'react';
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />;
}


class DetailUser extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        const id = this.props.params.id;

        axios.get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                this.setState({
                    user: res.data.data
                })
            })
            
    }

    handleBackPage = () => {
        this.props.navigate('/user')
    }

    render() {
        const {user} = this.state;
        const isEmptyUser = Object.keys(user).length === 0;

        return (
            <div className='detail-user'>
                { user && !isEmptyUser ?
                <>
                <div className="name"> {user.first_name} {user.last_name} </div>
                <div className="email"> {user.email} </div>
                <div className="avatar">
                    <img src={user.avatar} alt="" />
                </div>
                <button onClick={() => this.handleBackPage()}>Back</button>
                </>
                :
                    <div>
                        Not found
                    </div>
                }

            </div>
        )
    }
}

export default withParams(DetailUser);