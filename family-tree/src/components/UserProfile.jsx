import React, { forwardRef, useEffect } from 'react';
import '.././styles/UserProfile.css';

// let UserProfile = (props) => {
//     return (
//         <>
//             <div className={classes.person} ref={props.ref}>
//                 <div className={classes.name}>
//                     <p className={classes.personTitle}>{props.name}</p>
//                     <p className={classes.personInfo}>{props.illnesses.length > 0 ? props.illnesses.length + ' заболевания' : 'Нет информации'}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// const forwardedProfile = forwardRef(UserProfile)

// export default forwardedProfile;




// let people = document.querySelectorAll('UserProfile')
//     console.log(people)
//     people.forEach((i) => {
//       let isIllness = i.innerHTML.toLocaleLowerCase().indexOf('нет информации')
//       if (isIllness === -1) {
//         i.classList.add('fillColor')
//         i.classList.add('activeText')
//       }
//     })

let UserProfile = forwardRef((props, ref) => {

    let clickHandler = (e) => {
        if(e.currentTarget.classList.contains('fillColor')) {
            if(document.querySelectorAll('.clickedColor').length > 0 ) {
                document.querySelectorAll('.clickedColor').forEach((i => {
                    i.classList.remove('clickedColor')
                }))
            }

            
            e.currentTarget.classList.add('clickedColor')
        }
    }

    useEffect( () => {
        let isIll = ref.current.innerHTML.toLocaleLowerCase().indexOf('нет информации')
        if(isIll === -1) {
            ref.current.classList.add('fillColor')
            ref.current.classList.add('activeText')
        }
    }, [])

    return (
    <>
        <div className={'person' + ` ${props.varyingClass}`} ref={ref} onClick={clickHandler}>
            <div className='name'>
                <p className='personTitle'>{props.name}</p>
                <p className='personInfo'>{props.illnesses.length > 0 ? props.illnesses.length + ' заболевания' : 'Нет информации'}</p>
            </div>
        </div>

    </>
    )
})


export default UserProfile