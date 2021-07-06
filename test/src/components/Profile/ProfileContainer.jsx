import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Profile } from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { requestUser } from '../../redux/profileReducer';


let ProfileContainer = (props) => {
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile.data.data)
    const { userId } = useParams();
    const getData = (i) => {
        dispatch(requestUser(i))
    }
    useEffect( () => {
        getData(userId)
    }, [])

    return (
        <>
            <Profile profileState={profileState}/>
        </>
    )
}

export default ProfileContainer