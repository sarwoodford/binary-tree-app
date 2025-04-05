import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PreviousTrees = () => {
    const [trees, setTrees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/previous-trees').then(res => setTrees(res.data));
    }, []);

    return (
        <div className="container">
            <h2>Previous Trees</h2>
            <p>Previously entered trees will appear here!</p>
            <p><em>scroll to see entire tree</em></p>
            {trees.map(tree => (
                <div key={tree.id}>
                    <p><strong>Input:</strong> {tree.numbers}</p>
                    <pre>{tree.treeJson}</pre>
                </div>
            ))}
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
};

export default PreviousTrees;
