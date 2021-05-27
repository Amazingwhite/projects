import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg';
import classes from '../styles/Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.activePage || classes.inactivePage}
                    onClick={() => { props.onPageChanged(p) }} >{`${p} `}</span>
            })}
        </div>
        {
            props.users.map(u => <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='' src={u.photos.small != null ? u.photos.small : userPhoto} width='250px' height='250px'></img>
                        </NavLink>
                    </div>
                    <div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some( id => id === u.id)} 
                                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some( id => id === u.id)} 
                                    onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                </span>
                <span>
                    <div>{`Имя: ${u.name}`}</div>
                    <div>{`Статус: ${u.status}`}</div>
                    <div>{`ID: ${u.id}` } </div>
                </span>
            </div>)}
    </div>
}

export default Users;