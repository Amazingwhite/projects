import React from 'react';
import { Table } from 'antd';

let Users = (props) => {
    console.log(props)

    const { Column } = Table;

    return (
        <>
            <Table 
                dataSource={props.tableData} 
                pagination={
                    {
                        pageSize: props.usersData.pagesInfo.per_page,
                        total: props.usersData.pagesInfo.total,
                        onChange: (pageNum) => {props.getData(pageNum)}
                    }
                }
            >
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" /> 
                <Column title="Avatar" dataIndex="avatar" key="avatar"/>
                <Column title="Email" dataIndex="email" key="email" />
            </Table>
        </>
    )
}

export default Users