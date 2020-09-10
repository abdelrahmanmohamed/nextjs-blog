import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setFName, setLName } from '../stepsReducer'
import Link from 'next/link';

const Step1 = () => {
    const dispatch = useDispatch()
    const fName = useSelector(state => state.fName)
    const lName = useSelector(state => state.lName)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log('asdad');
        dispatch(setFName(data.fName), setLName(date.lName))
        //router.push("./step2")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Step 1</h2>
            <label htmlFor="fName">First Name:</label>
            <input
                id="fName"
                name="fName"
                ref={register}
            //defaultValue={state.data.fName}
            />
<br/>
            <label htmlFor="lName">Last Name:</label>
            <input
                id="lName"
                name="lName"
                ref={register}
            //defaultValue={data.lName}
            /> 
            <Link href="/step2">
                <input type="submit" />
            </Link>
        </form>
    );
}

export default Step1;
