import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    users: IUser[],
    isLoading: boolean;
    error: string;
    count: number,
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },

        usersFetching(state) {
            state.isLoading = true
        },

        usersFetchingSuccess(state, { payload }: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.error = ''
            state.users = payload
        },
        usersFetchingError(state, { payload }: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.error = 'Missing users'
            state.users = payload
        },
    }
})

export default userSlice.reducer;