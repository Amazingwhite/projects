import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { login, registration } from '../../redux/authReducer';

let Register = (props) => {
    const dispatch = useDispatch();

    if (localStorage.token) {
        return <Redirect to='/userslist/1' />
    }

    const onFinish = (values) => {
        dispatch(registration(values.email, values.password))
        dispatch(login(values.email, values.password))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1>Registration page</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8
                }}
                wrapperCol={{
                    span: 7
                }}
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your e-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>
            </Form>
        </>
    )
}

export default Register;