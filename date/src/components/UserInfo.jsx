import React from 'react';

let UserInfo = (props) => {
    console.log(props)
    return( 
    <>
        <h1>Возраст пользователя: {props.age} years</h1>
        <h1>
            До события: {props.untilEvent[0].years} years, {props.untilEvent[1].months} months, {props.untilEvent[2].days} days, {props.untilEvent[3].hours} hours: {props.untilEvent[4].minutes} minutes
        </h1>
    </>
    )
}

export default UserInfo;