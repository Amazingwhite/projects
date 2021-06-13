import React, { useState } from 'react';

export const Auth = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    }, )

    const changeHandler = (event) => {
        setForm({...form, [event.target.name] : event.target.value })
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Курсовая работа</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Введите логин" 
                                    id="email" 
                                    type="text" 
                                    name="email"
                                    onChange={changeHandler}/>
                                <label htmlFor="email">E-mail или имя пользователя</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Введите пароль" 
                                    id="password" 
                                    type="password" 
                                    name="password"
                                    onChange={changeHandler}/>
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect yellow darken-4" style={{ marginRight: 10 }}>Войти</button>
                        <button className="btn waves-effect yellow darken-4">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}