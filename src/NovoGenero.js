import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const NovoGenero = () => {
    const [name, setName] = useState('');

    const onChange = evt => {
        setName(evt.target.value);
    };

    const [success, setSuccess] = useState(false);

    const save = () => {
        axios.post('/api/genres',{name}).then(res => {
            setSuccess(true);
        });
    };

    if(success) {
        return (
            <Redirect to='/generos/' />
        )
    }

    return (
        <div className="container">
            <h1>Novo Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" value ={name} onChange={onChange} className="form-control" id="name" placeholder="Nome do Gênero"/>
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    );
};

export default NovoGenero;