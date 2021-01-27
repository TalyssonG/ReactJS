import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';


import Header from './componentes/Header';

/* Skils mais importantes do react
- Componente
- Propriedade
- Estado e Imutabilidade
*/
function App() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        //Imutabilidade
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;