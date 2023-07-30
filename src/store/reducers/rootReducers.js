import {v4 as uuidv4} from 'uuid';

const initState = {
    users: [
        {id: 1, name: "Dang"},
        {id: 2, name: "Badia"},
        {id: 3, name: "Dang-Badia"},
    ],
    posts: [
        1,2,3
    ]
    

}
const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let newUsers = state.users.filter((user) => user.id !== action.payload.id)
            return {
                ...state,
                users: newUsers
            };

        case "CREATE_USER":
            let newUser = {
                id: uuidv4(),
                name: uuidv4()
            }
            return {
                ...state,
                users: [...state.users, newUser]
            }
    
        default:
            return state;
    }

}

export default rootReducer;