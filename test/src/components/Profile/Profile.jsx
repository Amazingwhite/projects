import React from 'react';
import { Descriptions, Avatar, Button } from 'antd';
import { useHistory } from 'react-router-dom';

export let Profile = (props) => {
    const history = useHistory()

    // console.log(props)
    return (
        <div style={{marginLeft: '30px'}}>

            <Avatar
                size={{ xs: 34, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={props.profileState?.avatar}
            />

            <Descriptions title="User Info" >
                <Descriptions.Item label="First Name">{props.profileState?.first_name}</Descriptions.Item>
                <Descriptions.Item label="Last name">{props.profileState?.last_name}</Descriptions.Item>
                <Descriptions.Item label="E-mail Address">{props.profileState?.email}</Descriptions.Item>
                <Descriptions.Item label="User ID">{props.profileState?.id}</Descriptions.Item>
            </Descriptions>

            <Button onClick={() => history.goBack()}>go back</Button>
        </div>
    )
}