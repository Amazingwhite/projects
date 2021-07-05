import React from 'react';
import { Table } from 'antd';

let Users = (props) => {

    const { Column } = Table;

    return (
        <>
            <Table dataSource={props.data}>
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" /> 
                <Column title="Avatar" dataIndex="avatar" key="avatar" />
                <Column title="Email" dataIndex="email" key="email" />
            </Table>
        </>
    )
}

export default Users