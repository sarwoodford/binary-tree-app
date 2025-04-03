import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PreviousTrees = () => {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('/previous-trees').then(res => setTrees(res.data));
    }, []);

    return (
        <div>
            <h2>Previous Trees</h2>
            <p>Previously entered trees will appear here!</p>
            {trees.map(tree => (
                <div key={tree.id}>
                    <p><strong>Input:</strong> {tree.numbers}</p>
                    <pre>{tree.treeJson}</pre>
                </div>
            ))}
        </div>
    );
};

export default PreviousTrees;
