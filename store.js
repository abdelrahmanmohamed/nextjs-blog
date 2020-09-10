import { createStore } from 'easy-peasy';
import { action, thunk } from 'easy-peasy';

const storeModel = {
    //State
    users: [],
    //Thunks
    fetchUsers: thunk((actions) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => actions.addUsersToState(users))
    }),
    addUser: thunk((actions, user) => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(user => actions.addUsersToState([user]))
    }),
    //Actions
    addUsersToState: action((state, users) => {
        state.users = [...state.users, ...users];
    }),

}

//Create Store
export default createStore(
    storeModel
);