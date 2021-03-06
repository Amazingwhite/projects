import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, requestUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';

// class UsersContainer extends React.Component {

//     componentDidMount() {
//         this.props.requestUsers(this.props.currentPage, this.props.pageSize)
//     }

//     onPageChanged = (pageNumber) => {
//         this.props.requestUsers(pageNumber, this.props.pageSize)
//     }

//     render() {
//         return <>
//             {this.props.isFetching ? <Preloader /> : null}
//             <Users totalUsersCount={this.props.totalUsersCount}
//                 pageSize={this.props.pageSize}
//                 currentPage={this.props.currentPage}
//                 onPageChanged={this.onPageChanged}
//                 users={this.props.users}
//                 follow={this.props.follow}
//                 unfollow={this.props.unfollow}
//                 followingInProgress={this.props.followingInProgress}
//             />
//         </>
//     }
// }

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, [])

    const onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }

    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
            />
        </>)
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, requestUsers })
)(UsersContainer);