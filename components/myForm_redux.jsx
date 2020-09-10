import { connect } from "react-redux";
import { useStoreActions } from 'easy-peasy';
import { useForm } from "react-hook-form";


function UserForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const addUser = useStoreActions(actions => actions.addUser);
    const onSubmit = data => addUser(data);

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

export default UserForm;
