import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/devs', {
                username
            });

            const { _id } = response.data.userExists;

            console.log(response.data.userExists)

            return history.push(`/dev/${_id}`);
        } catch (error) {
            console.log(error)
        }    
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    type="text"
                    placeholder="Digite seu usuário do github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
