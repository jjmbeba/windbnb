import {configureStore} from '@reduxjs/toolkit'
import menuSlice from '../slices/menuSlice'

const store = configureStore({
    reducer: menuSlice.reducer
})

export default store