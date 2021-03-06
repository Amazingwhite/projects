import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestPages, requestUsers } from '../../redux/usersReducer';
import { useEffect } from 'react';
import Users from './Users'
import { useParams } from 'react-router-dom';

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