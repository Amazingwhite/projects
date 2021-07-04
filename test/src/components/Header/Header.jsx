import React from 'react';
import { Button } from 'antd';
import { PageHeader } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authReducer';

let Header = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Авторизация выполнена"
        subTitle="Вы выиграли 1 000 000"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button type="primary" onClick={() => dispatch(logout())}>Logout</Button>

      </PageHeader>
    </>
  )
}

export default Header;