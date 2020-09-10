import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        fName: '',
        lName: '',
        age: '',
        experience: ''
    },
    reducers: {
        setFName: (state, action) => { state.fName = action.payload },
        setLName: (state, action) => { state.lName = action.payload },
        setAge: (state, action) => { state.age = action.payload },
        setExperience: (state, action) => { state.experience = action.payload },
    }
})

export const reducer = rootSlice.reducer

export const { setFName, setLName, setAge, setExperience } = rootSlice.actions;