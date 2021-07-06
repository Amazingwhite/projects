import React from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';

let Users = (props) => {
    const { Column } = Table;
    const history = useHistory()

    return (
        <>
            <Table 
                dataSource={props.tableData} 
                pagination={
                    {
                        pageSize: props.usersData.pagesInfo.per_page,
                        total: props.usersData.pagesInfo.total,
                        onChange: (i) => {
                            history.push(`/userslist/${i}`)
                            props.getData(i)
                        }
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