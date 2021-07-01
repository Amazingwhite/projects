import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useHistory } from 'react-router-dom';

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [link, setLink] = useState('');
    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const createLinkHandler = async () => {
        try {
            const data = await request('/api/link/generate', 'POST', { from: link }, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push(`/detail/${data.link._id}`)
        } catch (e) { }
    }

    const pressHandler = event => {
        if (event.key === 'Enter') {
            createLinkHandler()
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2" >
            <p className="flow-text">ShortenLink - Сервис сокращенных ссылок со статистикой. Всего в 1 клик вы получите краткую ссылку — аналог вашего длинного адреса. 
                Также к каждой сокращённой ссылке мы предоставляем полную статистику.  
                Вы увидите количество кликов и переходов, дату создания короткой версии ссылки и оригинальный адрес. 
                Одним словом — все что может понадобиться хорошему маркетологу для хорошей работы. 
                Главное, чтобы длинна исходной ссылки перед ее сокращением, не превышала 1984 символов.</p>
                <div className="input-field">
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler} />
                    <label htmlFor="link">Введите ссылку</label>
                </div>
                <button className="btn waves-effect orange lighten-2" onClick={createLinkHandler}>Создать</button>

                <table>
            <thead>
                <tr>
                    <th>Сокращенный URL в 1 клик</th>
                    <th>Полная статистика ссылок</th>
                    <th>Рабочая альтернатива goo.gl</th>
                    
                </tr>
            </thead>

            <tbody>
                
                <tr>
                    <td>Всего в 1 клик Вы получаете персональный короткий адрес. Данный URL — статичен, а значит всегда с вами</td>
                    <td>Вы можете отслеживать статистику ваших ссылок. Просто перейдите на страницу ссылки для дополнительно информации</td>
                    <td>В отличие от закрытого проекта от google — ShortenLink поддерживает действительно короткие адреса </td>
                    
                </tr>               

            </tbody>
            </table>
                
            </div>
            
        </div>

        
    )
}