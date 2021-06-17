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
            </div>

        </div>
    )
}