import React from 'react';
import { Table } from 'antd';

let Users = (props) => {
    // console.log(props)
    // console.log(props.pageNumber)

    const { Column } = Table;
    let test = props.pageNumber

    return (
        <>
            <Table 
                dataSource={props.tableData} 
                pagination={
                    {
                        pageSize: props.usersData.pagesInfo.per_page,
                        total: props.usersData.pagesInfo.total,
                        onChange: (i) => {
                            props.getData(i)
                            test = i
                            console.log(test)}
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