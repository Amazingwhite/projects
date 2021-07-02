import React from 'react';
import { PageHeader } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authReducer';

export let Header = () => {

  const dispatch = useDispatch();

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Авторизация выполнена"
        subTitle="Вы выиграли 1 000 000"
      />
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  )
}