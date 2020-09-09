import React, { useEffect } from "react";
//2.
import { connect, useDispatch } from "react-redux";

//1.
import { fetchUsers } from "../actions/userActions";

const Users = ({ fetchUsers, users }) => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(fetchUsers) }, [])
    return (
        <React.Fragment>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                </div>
            ))}
        </React.Fragment>
    );
}

//4.
const mapStateToProps = (state) => {
    return {
        users: state.users.items, //Get items from usersReducer
        user: state.users.item
    };
}

//3.
export default connect(mapStateToProps, { fetchUsers })(Users);
