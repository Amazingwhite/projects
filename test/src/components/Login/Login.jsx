import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Login = (props) => {
  console.log(localStorage.token)

  if(localStorage.token) {
    return <Redirect to='/mainpage'/>
  }
  
  const onFinish = (values) => {
    props.login(values.email, values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
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

        <Button>
          Registration
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, { login })(Login);


