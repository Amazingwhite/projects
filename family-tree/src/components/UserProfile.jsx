import React, { forwardRef, useEffect } from 'react';
import '.././styles/UserProfile.css';
import cn from 'classnames';

let UserProfile = forwardRef((props, ref) => {

    useEffect( () => {
        let isIll = ref.current.innerHTML.toLocaleLowerCase().indexOf('нет информации')
        if(isIll === -1) {
            ref.current.classList.add('fillColor')
            ref.current.classList.add('activeText')
        }
    }, [])

    return (
    <>
        <div className={'person ' + props.varyingClass} ref={ref} onClick={props.clickHandler}>
            <div className='name'>
                <p className='personTitle'>{props.name}</p>
                <p className='personInfo'>{props.illnesses.length > 0 ? props.illnesses.length + ' заболевания' : 'Нет информации'}</p>
            </div>
        </div>

    </>
    )
})
export default UserProfile;