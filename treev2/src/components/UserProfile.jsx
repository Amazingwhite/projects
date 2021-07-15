import React from 'react';
import cn from 'classnames'
import '../styles/UserProfile.css';

let UserProfile = (props) => {
    let clickHandler = (e) => {
        if(e.currentTarget.innerHTML.indexOf('Нет информации') === -1 && e.currentTarget.classList.contains('clickedPerson') === false) {
            props.setActiveUser(e.currentTarget)
        }
    }
    
    return(
        <div className={cn('person',{'clickedPerson': props.isActive},
                                    {'fillColor': props.illnesses.length > 0},
                                    {'me': props.name === 'Я'}, 
                                    {'father': props.name === 'Отец'},
                                    {'mother': props.name === 'Мать'},
                                    {'siblings': props.name === 'Братья, сестры'},
                                    {'babushka': props.name === 'Бабушка'},
                                    {'dedushka': props.name === 'Дедушка'},
                                    {'babushkaFather': props.id === 4},
                                    {'dedushkaFather': props.id === 5},
                                    {'babushkaMother': props.id === 6},
                                    {'dedushkaMother': props.id === 7},
                                    {'fatherSiblings': props.id === 8},
                                    {'motherSiblings': props.id === 9},
                                    {'selfSiblings': props.id === 10})}
              onClick={clickHandler}>
            <div className='name'>
              <p className='personTitle'>{props.name}</p>
              <p className='personInfo'>{props.illnesses.length > 0 ? props.illnesses.length + ' заболевания' : 'Нет информации'}</p>
            </div>
        </div>
    )
}

export default UserProfile;