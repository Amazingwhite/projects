import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.disableEditMode}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;