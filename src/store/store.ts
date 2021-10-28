import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'

import { postAPI } from "../services/PostService";
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
    })
}

//console.log('typeof rootReducer', typeof rootReducer);
//console.log('typeof setupStore', typeof rootReducer);
//console.log('typeof rootReducer', typeof rootReducer);


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];