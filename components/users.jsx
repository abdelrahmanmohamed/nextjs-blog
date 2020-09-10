import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';


const Users = () => {
    const users = useStoreState(state => state.users);
    const fetchUsers  = useStoreActions(actions => actions.fetchUsers);
    useEffect(() => { fetchUsers() }, [])
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

export default Users;
