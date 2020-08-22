import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action';

const Dashboard = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <>
            <h3>Dashboard</h3>
                <h1>{`Hii ${data.user.fullname}`}</h1>
            <button onClick={handleLogout}>log out</button>
        </>
    )
}

export default Dashboard;
