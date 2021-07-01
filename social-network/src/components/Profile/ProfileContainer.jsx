import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { compose } from 'redux';

// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         let userId = this.props.match.params.userId;
//         if(!userId) {
//             userId = this.props.authorizedUserId
//         } 
//         this.props.getUserProfile(userId);
//         this.props.getStatus(this.userId);
//         console.log('component did mount!')
//     }   
//     render() {
//         return (
//             <Profile {...this.props}
//                 profile={this.props.profile}
//                 status={this.props.status}
//                 updateStatus={this.props.updateStatus} />
//         )
//     }
// }

const ProfileContainer = (props) => {
    useEffect( () => {
        let userId = props.match.params.userId;
        if(!userId) {
            userId = props.authorizedUserId
        } 
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [])
    
    return (
        <>
            <Profile {...props}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
        </>
    )
}

















let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth 
})

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);