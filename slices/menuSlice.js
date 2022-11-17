import {createSlice} from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        open:false,
        locChoice:'',
        guests:0
    },
    reducers:{
        setMenuState:(state) => {
            state.open = !state.open;
        },
        setLocChoice:(state,{payload}) => {
            state.locChoice = payload;
        },
        setGuests:(state,{payload}) => {
            state.guests = payload;
        }
    }
})

export const {setMenuState, setLocChoice, setGuests} = menuSlice.actions;

export default menuSlice;