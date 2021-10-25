import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { $CombinedState } from 'redux';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { IUser } from './models/IUser';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
    const { count, users, isLoading, error } = useAppSelector(state => state.userReducer)
    const { increment } = userSlice.actions

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    console.log('error', error);

    return (
        <div className="App">
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increment(1))}>inc</button>
            {isLoading && <h4>ЗАГРУЗКА!!!!</h4>}
            {error && <h1>{error}</h1>}
            {users?.map((user, i) => {
                return (
                    <div key={i}>
                        <div>{user.email}</div>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
