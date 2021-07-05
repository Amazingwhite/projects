import React from 'react'
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../../redux/usersReducer';
import { useEffect } from 'react';
import Users from './Users'

let UsersContainer =  (props) =>  {
    const dispatch = useDispatch()
    
    useEffect( () => {
        dispatch(requestUsers(2))
    }, [])

    const usersData = useSelector(state => state.users)

    if (!localStorage.token) {
        return (<Redirect to='/login' />)
    }

    const data = usersData.users.map(i => {
        return {
            key: i.id,
            firstName: i.first_name,
            lastName: i.last_name,
            email: i.email,
            avatar: i.avatar
        }
    })
    return (
        <>
            <Users data={data}/>
        </>
    )
}

export default UsersContainer;