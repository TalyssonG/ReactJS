import React, { useState } from 'react';
import Header from './componentes/Header';

/* Skils mais importantes do react
- Componente
- Propriedade
- Estado e Imutabilidade
*/
function App() {

    
    const [projects, setProjects] = useState(['Developer APP', 'Front end']);


    function handleAddProject(){
       // projects.push(`Novo projeto ${Date.now()}`);

        //Imutabilidade
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
        </>
    );
}

export default App;