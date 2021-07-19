import React from 'react';

let UserInfo = (props) => {

    return( 
    <>
        <h1>Возраст пользователя: {props.age} лет</h1>
        <h1>До события: {props.untilEvent[0].years} лет, {props.untilEvent[1].months} месяцев, {props.untilEvent[2].days} дней,
          {props.untilEvent[3].hours} часов: 
         {props.untilEvent[4].minutes} минут
         </h1>
        
    </>
    )
}

export default UserInfo;