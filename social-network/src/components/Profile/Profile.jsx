import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import user from '../../assets/images/user.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profile = (props) => {
  if (!props.profile) {
    return <div>
      <div>No profile :(</div>
      <Preloader />
      </div>
  }
  if (!props.profile.photos.large) {
    return (
      <div>
        <div>
        <img alt='' src={user} style= {{hegiht: '200px', width: '200px'}}/>
        <br />
        {props.profile.fullName + ' ' + props.profile.userId}
        <br/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        avatar + description
      </div>
        <MyPostsContainer store={props.store} />
      </div>)
  } else {
    return (
      <div>
        <div>
          <img alt='' src={props.profile.photos.large} />
          <br />
          {props.profile.fullName + ' ' + props.profile.userId}
          <br />
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      ava + description
    </div>
        <MyPostsContainer store={props.store} />
      </div>)
  }
}

export default Profile;

