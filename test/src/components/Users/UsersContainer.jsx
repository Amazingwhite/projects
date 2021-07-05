import React from 'react'
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { requestPages, requestUsers } from '../../redux/usersReducer';
import { useEffect } from 'react';
import Users from './Users'
import { useParams, withRouter } from 'react-router-dom';

let UsersContainer =  (props) =>  {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users)

    const { pageNumber } = useParams()
    const getData = (i) => {
        dispatch(requestUsers(i))
        dispatch(requestPages(i))
    }
    
    useEffect( () => {
        getData(pageNumber)
    }, [])

    if (!localStorage.token) {
        return (<Redirect to='/login' />)
    }
    const tableData = usersData.users.map(i => {
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
            <Users tableData={tableData}
                   usersData={usersData}
                   getData={getData}
                   pageNumber={pageNumber}/>
        </>
        
    )
}



export default UsersContainer;