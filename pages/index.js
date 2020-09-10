import { Container } from 'react-bootstrap';

import RootForm from '../components';
// import UserForm from '../components/myForm-redux';
// import Users from '../components/users';


export default function Home() {
    return (
        <Container className="md-container">
            <RootForm/>
            {/* <UserForm />
            <br />
            <br />
            <br />
            <Users /> */}
        </Container>
    )
}
