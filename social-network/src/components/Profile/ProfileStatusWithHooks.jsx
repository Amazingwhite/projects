import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const disableEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode && 
            <div>
                <span onDoubleClick={activateEditMode}>
                    {props.status || "No status set"}
                </span>
                <br />
                <button onClick={activateEditMode}>Change status</button>
            </div>}

            {editMode && 
            <div>
                <input autoFocus={true} onBlur={disableEditMode} onChange={onStatusChange} value={status}></input>
                <br />
                <button onClick={disableEditMode}>Set status</button>
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;