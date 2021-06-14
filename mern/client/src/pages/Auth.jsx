import React, { useEffect, useState } from 'react';
import { useMessage } from '../hooks/errorMessage.hook';
import { useHttp } from '../hooks/http.hook';

export const Auth = () => {
    const errorMessage = useMessage()
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        errorMessage(error)
        clearError()
    }, [error, errorMessage, clearError])

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/auth/register', 'POST', { ...form })
            
        } catch (e) { }
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
                                    onChange={changeHandler} />
                                <label htmlFor="email">E-mail или имя пользователя</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler} />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect yellow darken-4" style={{ marginRight: 10 }} disabled={loading}>Войти</button>
                        <button className="btn waves-effect yellow darken-4" onClick={registerHandler} disabled={loading}>Регистрация</button>
                    </div>

                </div>
            </div>
        </div>
    )
}