import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EnterNumbers = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const numbers = input.split(',').map(num => parseInt(num.trim()));
        const res = await axios.post('/process-numbers', numbers);
        setResponse(res.data);
    };

    return (
        <div className="container">
            <h2>Enter Numbers</h2>
            <p>Input as many random numbers as you'd like!</p>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="1, 2, 3" />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => navigate('/previous')}>Show Previous</button>
            <pre>{response && JSON.stringify(response, null, 2)}</pre>
        </div>
    );
};

export default EnterNumbers;