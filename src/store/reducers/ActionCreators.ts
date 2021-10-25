import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     dispatch(userSlice.actions.usersFetching())
//     await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         .then(res => {
//             dispatch(userSlice.actions.usersFetchingSuccess(res.data))
//         }).catch((e) => {
//             dispatch(userSlice.actions.usersFetchingError(e.message))
//         })
// }

export const fetchUsers = createAsyncThunk('user/fetchAll', async () => {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return response.data
})