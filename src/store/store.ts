import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducers/UserSlice'
const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

//console.log('typeof rootReducer', typeof rootReducer);
//console.log('typeof setupStore', typeof rootReducer);
//console.log('typeof rootReducer', typeof rootReducer);


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];