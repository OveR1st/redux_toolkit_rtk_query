import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { $CombinedState } from 'redux';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { IUser } from './models/IUser';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
    const { count } = useAppSelector(state => state.userReducer)
    const { users } = useAppSelector(state => state.userReducer)
    const { increment } = userSlice.actions

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!!users) dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increment(1))}>inc</button>
            {users.map(user => {
                return (
                    <>
                        <div>{user.email}</div>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                    </>
                )
            })}
        </div>
    );
}

export default App;
