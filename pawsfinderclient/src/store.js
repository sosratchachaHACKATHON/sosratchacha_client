import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'loggedIn',
    initialState: false,
    reducers : {
        changeState(state){
            return !state
        }
    }
})

export default configureStore({
  reducer: { 
    loggedIn : user.reducer
   }
}) 

export let { changeState } = user.actions