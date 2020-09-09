import { connect } from "react-redux";

import { addUser } from "../actions/userActions";
import { useForm } from "react-hook-form";


function UserForm({addUser}) {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addUser(data); //this.props.addUser(data)

    console.log(watch("name")); 

    return (
        <>
            < form onSubmit={handleSubmit(onSubmit)} >
                < input name="name" placeholder='Name' ref={register} />
                < input name="username" placeholder='Username' ref={register({ required: true })} />
                {errors.userName && <span>This field is required</span>}
                <input type="submit" />
            </form >
        </>
    );
}

    export default connect(null, { addUser })(UserForm);
