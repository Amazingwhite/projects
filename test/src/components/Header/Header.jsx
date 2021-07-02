import React from 'react';
import { PageHeader } from 'antd';

export let Header = (props) => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Авторизация выполнена"
        subTitle="Вы выиграли 1 000 000"
      />
      <button onClick={props.logout}>Logout</button>
    </>
  )
}