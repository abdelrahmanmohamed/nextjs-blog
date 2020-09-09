import TYPES from "../types";

//Action Creator

export function fetchUsers() {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: TYPES.FETCH_USER,
                    payload: data
                })
            );
    };
}

export function addUser(user) {
    console.log(user);
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: TYPES.ADD_USER,
                    payload: data
                })
            );
    };
}
