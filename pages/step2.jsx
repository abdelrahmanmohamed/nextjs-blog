import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setAge, setExperience } from '../stepsReducer'
import Link from 'next/link';
import { addUser } from '../actions/userActions';

const Step2 = () => {
    const dispatch = useDispatch()
    const age = useSelector(state => state.age)
    const experience = useSelector(state => state.experience)
    const { register, handleSubmit } = useForm({defaultValues:{data.age, data.experience}})

    //const onSubmit = (data) => addUser(data)

    const onSubmit = (data) => {
        console.log('blaaa', data);
        dispatch(setAge(data.age), setExperience(date.experience))
        //router.push("./result")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Step 2</h2>
            <label htmlFor="age">Age:</label>
            <input
                id="age"
                name="age"
                ref={register}
            //defaultValue={data.age}
            />
<br/>
            <label htmlFor="experience">Years of experience:</label>
            <input
                id="experience"
                name="experience"
                ref={register}
              //  defaultValue={data.experience}
            />
            <Link href="/result">
                <input type="Submit" />
            </Link>
        </form>
    );
}

export default (Step2);