import React from 'react';
import { Table, Button } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';

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
                        current: props.pageNumber,
                        onChange: (i) => {
                            history.push(`/userslist/page${i}`)
                            props.getData(i)
                        }
                    }
                }
                onRow={(i)=> {
                    return {
                        onClick: () => {
                            history.push(`/profile/${i.key}`)
                        }
                    }
                }}
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